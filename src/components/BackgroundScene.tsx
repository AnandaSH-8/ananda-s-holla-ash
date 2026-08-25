import { useEffect, useState } from "react";

import seaVideo from "@/assets/bg-sea.mp4.asset.json";
import fireVideo from "@/assets/bg-fire.mp4.asset.json";
import seaPoster from "@/assets/bg-sea-poster.jpg";
import firePoster from "@/assets/bg-fire-poster.jpg";

/**
 * Full-screen animated background:
 * - Light theme: fire / flames
 * - Dark theme: sea and beach
 * Fixed behind all content, non-interactive.
 * Reduced-motion users see the still poster frames only.
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
      {/* Light theme - fire */}
      <div className="absolute inset-0 dark:hidden">
        {reduceMotion ? (
          <img
            src={firePoster}
            alt=""
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
        ) : (
          <video
            key="fire"
            src={fireVideo.url}
            poster={firePoster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          />
        )}
        {/* Readability scrim */}
        <div className="absolute inset-0 bg-[#FFF4E6]/80" />
      </div>

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
        <div className="absolute inset-0 bg-[#1A1A2E]/75" />
      </div>
    </div>
  );
};

export default BackgroundScene;
