import { useEffect, useRef, useState } from "react";

import seaPoster from "@/assets/bg-sea-poster.jpg";
import sunPoster from "@/assets/bg-sun-poster.jpg";

type LayerProps = {
  src: string;
  poster: string;
  reduceMotion: boolean;
};

const VideoLayer = ({ src, poster, reduceMotion }: LayerProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Some browsers block autoplay until the element is explicitly muted in JS
  // and/or the user interacts. Keep retrying playback so the clip never
  // freezes on its poster frame in production.
  useEffect(() => {
    if (reduceMotion) return;
    const tryPlay = () => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = true;
      v.defaultMuted = true;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };
    tryPlay();
    const events = ["pointerdown", "touchstart", "keydown", "scroll", "visibilitychange"];
    events.forEach((e) => window.addEventListener(e, tryPlay, { passive: true }));
    const id = window.setInterval(tryPlay, 2000);
    return () => {
      events.forEach((e) => window.removeEventListener(e, tryPlay));
      window.clearInterval(id);
    };
  }, [reduceMotion]);

  if (reduceMotion) {
    return (
      <img src={poster} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      disablePictureInPicture
      disableRemotePlayback
      preload="auto"
      onLoadedData={(e) => {
        const v = e.currentTarget;
        v.muted = true;
        v.play().catch(() => {});
      }}
      className="w-full h-full object-cover"
    />
  );
};

/**
 * Full-screen animated background:
 * - Light theme: drifting sunshine rays
 * - Dark theme: sea and beach
 * Fixed behind all content, non-interactive.
 * Reduced-motion users see the still poster frame only.
 */
const BackgroundScene = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Light theme - sunshine */}
      <div className="absolute inset-0 dark:hidden">
        <VideoLayer src="/bg-sun.mp4" poster={sunPoster} reduceMotion={reduceMotion} />
        {/* Readability scrim */}
        <div className="absolute inset-0 bg-background/50" />
      </div>

      {/* Dark theme - sea & beach */}
      <div className="absolute inset-0 hidden dark:block">
        <VideoLayer src="/bg-sea.mp4" poster={seaPoster} reduceMotion={reduceMotion} />
        {/* Readability scrim */}
        <div className="absolute inset-0 bg-[#1A1A2E]/80" />
      </div>
    </div>
  );
};

export default BackgroundScene;
