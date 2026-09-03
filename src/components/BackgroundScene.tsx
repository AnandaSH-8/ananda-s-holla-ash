import { useEffect, useRef, useState } from "react";

import seaVideo from "@/assets/bg-sea.mp4.asset.json";
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

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

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
            src={seaVideo.url}
            poster={seaPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
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
