"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "Dr Sarah Mitchell",
    role: "Principal Dentist, Melbourne",
    comment:
      "Consuldent transformed our practice operations. Our phone conversion rate improved significantly and the recall system actually works now. Dr Vrinda genuinely understands dentistry, she's been in the chair.",
  },
  {
    id: 2,
    name: "James Thornton",
    role: "Practice Manager, Victoria",
    comment:
      "The AI chatbot implementation alone delivered immediate value. But it was the team training that made the real difference. Our front desk team now handles patient enquiries with confidence and professionalism.",
  },
  {
    id: 3,
    name: "Dr Anita Patel",
    role: "Owner, Private Dental Practice",
    comment:
      "We now have systems that actually stick. The PMS optimisation streamlined our workflows and freed up valuable clinical time. The team training created a culture of accountability and excellence.",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        y: 44,
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
    <section ref={containerRef} className="container mx-auto py-20 md:py-28 px-4">
      <div className="max-w-2xl mb-14">
        <p className="eyebrow mb-4">In their words</p>
        <span className="accent-rule mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-medium text-ink">
          Trusted by dental practices across Australia
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <figure
            key={t.id}
            className="testimonial-card bg-paper border border-line border-t-4 border-t-accent/80 rounded-2xl p-8 flex flex-col"
          >
            <span
              className="font-display text-5xl leading-none text-accent/40 mb-4"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="text-ink-soft leading-relaxed flex-1">
              {t.comment}
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-line">
              <p className="font-display text-lg font-medium text-ink">
                {t.name}
              </p>
              <p className="text-sm text-muted mt-0.5">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
