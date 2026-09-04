import { useEffect, useRef, useState } from "react";

import seaPoster from "@/assets/bg-sea-poster.jpg";

/**
 * Full-screen animated background:
 * - Light theme: plain themed background (no video)
 * - Dark theme: sea and beach
 * Fixed behind all content, non-interactive.
 * Reduced-motion users see the still poster frame only.
 */
const BackgroundScene = () => {
  const [reduceMotion, setReduceMotion] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

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


  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Light theme - plain background */}
      <div className="absolute inset-0 bg-background dark:hidden" />

      {/* Dark theme - sea & beach */}
      <div className="absolute inset-0 hidden dark:block">
        {reduceMotion ? (
          <img
            src={seaPoster}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        ) : (
          <video
            key="sea"
            ref={videoRef}
            src="/bg-sea.mp4"
            poster={seaPoster}
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
        )}
        {/* Readability scrim */}
        <div className="absolute inset-0 bg-[#1A1A2E]/80" />
      </div>
    </div>
  );
};

export default BackgroundScene;
