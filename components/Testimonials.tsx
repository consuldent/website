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
      "Consuldent transformed our practice operations. Our phone conversion rate improved significantly and the recall system actually works now. Dr Vrinda genuinely understands dentistry — she's been in the chair.",
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
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
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
      <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D91] mb-4">
        What Our Clients Say
      </h2>
      <p className="text-xl text-gray-600 mb-12 max-w-2xl">
        Real results from real dental practices across Australia.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="testimonial-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              &ldquo;{t.comment}&rdquo;
            </p>
            <div>
              <p className="font-bold text-[#0A3D91]">{t.name}</p>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
