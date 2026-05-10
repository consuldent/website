"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, Search, MessageSquare, TrendingUp } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    icon: Search,
    title: "Discover",
    description: "We audit your practice operations, technology, and patient journey to identify the biggest opportunities for improvement.",
    color: "#0A3D91",
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "Design",
    description: "We build custom systems tailored to your practice - from AI chatbots to training programs - designed to solve your specific challenges.",
    color: "#10B981",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Deliver",
    description: "We implement with you, track every metric, and optimise until you see measurable results. Most practices see improvement within 90 days.",
    color: "#00C4CC",
  },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="container mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D91] mb-4">
          How It Works
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A proven three-step process to transform your practice. No jargon, no vague strategies - just systems that work.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="step-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ backgroundColor: `${step.color}20` }}
            >
              <step.icon className="w-8 h-8" style={{ color: step.color }} />
            </div>
            <div className="text-sm font-bold text-gray-400 mb-2">
              Step {step.id}
            </div>
            <h3 className="text-2xl font-bold text-[#0A3D91] mb-4">
              {step.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {step.description}
            </p>
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8 text-gray-300" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#0A3D91] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0A3D91]/90 transition-colors"
        >
          Start Your Journey <ArrowRight className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
};

export default HowItWorks;