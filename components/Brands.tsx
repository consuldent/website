"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const practices = [
  "Family Dental Care",
  "Smile Studio",
  "Bright Smile Dental",
  "Coastal Dental",
  "City Dental Practice",
  "Bayside Family Dentistry",
  "Eastside Dental",
  "Westside Dental",
];

const Brands = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const totalWidth = el.scrollWidth / 2;

    const tween = gsap.to(el, {
      x: -totalWidth,
      duration: 25,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
    });

    return () => {
      tween.kill();
    };
  }, []);
  return (
    <div className="py-16 md:py-20 overflow-hidden bg-[#FAF4EC]">
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D91]">
          Trusted by dental practices<br />across Victoria
        </h2>
        <p className="text-lg text-gray-600 mt-4 max-w-xl">
          Independent practices who chose to grow with systems that actually work.
        </p>
      </div>

      <div ref={trackRef} className="flex gap-8 md:gap-12 px-4">
        {[...practices, ...practices].map((practice, index) => (
          <div
            key={index}
            className="whitespace-nowrap shrink-0"
          >
            <span className="text-xl md:text-2xl font-semibold text-[#0A3D91] border-2 border-[#0A3D91] px-6 py-3 rounded-full">
              {practice}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
