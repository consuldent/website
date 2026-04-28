"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 90, suffix: "days", label: "To Measurable Results" },
  { value: 50, prefix: "$", suffix: "K+", label: "Avg Revenue Unlocked" },
  { value: 100, suffix: "%", label: "Implementation Rate" },
  { value: 3, suffix: "x", label: "ROI on Average" },
];

const Stats = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
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
    <div ref={containerRef} className="container mx-auto py-20 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="stat-item text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl md:text-5xl font-bold text-[#0A3D91] mb-2">
              {stat.prefix}
              {stat.value}
              {stat.suffix}
            </div>
            <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
