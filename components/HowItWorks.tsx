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
    description:
      "We audit your practice operations, technology, and patient journey to identify the biggest opportunities for improvement.",
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "Design",
    description:
      "We build custom systems tailored to your practice - from AI chatbots to training programs - designed to solve your specific challenges.",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Deliver",
    description:
      "We implement with you, track every metric, and optimise until you see measurable results. Most practices see improvement within 90 days.",
  },
];

const HowItWorks = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".step-card", {
        y: 40,
        opacity: 0,
        duration: 0.7,
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
    <section id="how-it-works" ref={containerRef} className="container mx-auto py-20 md:py-28 px-4">
      <div className="max-w-2xl mb-14">
        <p className="eyebrow mb-4">The Process</p>
        <h2 className="font-display text-4xl md:text-5xl font-medium text-ink">
          How it works
        </h2>
        <p className="text-lg text-muted mt-4 leading-relaxed">
          A proven three-step process to transform your practice. No jargon, no
          vague strategies, just systems that work.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="step-card relative bg-paper border border-line rounded-2xl p-8 transition-colors duration-300 hover:border-ink/30"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-line bg-bone">
                <step.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <span className="font-display text-2xl text-accent">
                0{step.id}
              </span>
            </div>
            <h3 className="font-display text-2xl font-medium text-ink mb-3">
              {step.title}
            </h3>
            <p className="text-muted leading-relaxed">{step.description}</p>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 z-10">
                <div className="w-6 h-px bg-line" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium hover:bg-accent/90 transition-colors"
        >
          Start your journey <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
