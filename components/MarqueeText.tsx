"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface MarqueeTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const MarqueeText = ({ text, speed = 20, className = "" }: MarqueeTextProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;
    const tween = gsap.to(el, {
      x: -totalWidth,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [speed]);

  const repeatedText = Array(6).fill(text).join(" · ");

  return (
    <div className={`overflow-hidden py-8 border-y border-line bg-paper/50 ${className}`}>
      <div ref={trackRef} className="flex whitespace-nowrap">
        <span className="font-display text-4xl md:text-6xl font-medium text-ink/15 px-4">
          {repeatedText}
        </span>
        <span className="font-display text-4xl md:text-6xl font-medium text-ink/15 px-4">
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
