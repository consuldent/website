"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: Stat[] = [
  { value: 90, suffix: " days", label: "To measurable results" },
  { value: 2, prefix: "", suffix: "×", label: "Phone conversion improvement" },
  { value: 100, suffix: "%", label: "Implementation rate" },
  { value: 2, prefix: "", suffix: "+ hrs", label: "Saved daily" },
];

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        y: 32,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-ink">
      <div className="container mx-auto py-16 md:py-20 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-item text-center px-4 ${
                i !== 0 ? "md:border-l md:border-white/15" : ""
              }`}
            >
              <div className="font-display text-4xl md:text-6xl font-medium text-bone tabular-nums">
                {stat.prefix || ""}
                {stat.value}
                <span className="text-accent-soft">{stat.suffix}</span>
              </div>
              <p className="mt-3 text-xs md:text-sm uppercase tracking-[0.14em] text-bone/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
