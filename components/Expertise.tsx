"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// DATA
const experticeCards = [
  {
    id: 1,
    name: "Service",
    cardNumber: "01",
    title: "Tech & AI",
    subTitle: "Modernise your practice systems.",
    description: "PMS optimisation, AI chatbots, automation, cloud migration, cybersecurity, and integrations that actually stick.",
    bgColor: "#0A3D91",
    buttonText: "Learn about Tech & AI",
    link: "/services",
    video: "/videos/expertise1.mp4",
    buttonBg: "#00C4CC",
    buttonTextColor: "#000000",
    textColor: "text-white",
  },
  {
    id: 2,
    name: "Service",
    cardNumber: "02",
    title: "Customer Experience",
    subTitle: "Convert more, lose less.",
    description: "Phone scripts, patient onboarding, treatment presentation, recall systems, Google Business, and reviews that build your reputation.",
    bgColor: "#F3F4F6",
    buttonText: "Learn about CX",
    link: "/services",
    video: "/videos/expertise2.mp4",
    buttonBg: "#1E3A5F",
    buttonTextColor: "#FFFFFF",
    textColor: "text-gray-900",
  },
  {
    id: 3,
    name: "Service",
    cardNumber: "03",
    title: "Training",
    subTitle: "Your team, finally performing.",
    description: "Front desk, practice manager, nurse, and dentist training. Virtual or on-site. Your whole team leveled up.",
    bgColor: "#10B981",
    buttonText: "Learn about Training",
    link: "/services",
    video: "/videos/expertise3.mp4",
    buttonBg: "#FFFFFF",
    buttonTextColor: "#000000",
    textColor: "text-white",
  },
  {
    id: 4,
    name: "Service",
    cardNumber: "04",
    title: "Results",
    subTitle: "Measure everything that matters.",
    description: "Every system we build is tracked. You see exactly what's working, what's not, and where the revenue is.",
    bgColor: "#1E3A5F",
    buttonText: "See our process",
    link: "/services",
    video: "/videos/expertise4.mp4",
    buttonBg: "#00C4CC",
    buttonTextColor: "#000000",
    textColor: "text-white",
  },
];

const Expertise = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      const sections = sectionRef.current;

      // initial state
      gsap.set(sections, { yPercent: 100 });
      gsap.set(sections[0], { yPercent: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${sections.length * 100}%`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
        },
      });

      sections.forEach((section, index) => {
        if (index === 0) return;

        // next comes up
        tl.to(
          section,
          {
            yPercent: 0,
            ease: "power3.inOut",
          },
          index,
        );

        // previous goes down
        tl.to(
          sections[index - 1],
          {
            y: 120,
            scale: 0.9,
            opacity: 0.5,
            transformOrigin: "top center",
            ease: "power3.inOut",
          },
          index,
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div
        ref={containerRef}
        className="relative md:h-screen overflow-hidden space-y-5 md:space-y-0"
      >
        {experticeCards.map((card, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) sectionRef.current[index] = el;
            }}
            style={{ backgroundColor: card.bgColor }}
            className="
              w-full 
              h-auto md:h-screen 
              flex flex-col md:flex-row 
              items-start md:items-center 
              justify-between 
              gap-6
              p-5 md:p-10 
              rounded-4xl

              relative md:absolute md:inset-0
            "
          >
            {/* LEFT */}
            <div className={`md:basis-2/3 flex flex-col justify-between gap-6 ${card.textColor}`}>
              <div className="space-y-4 md:space-y-7">
                <h4 className="bg-gray-300/50 p-2 w-fit rounded-md font-semibold text-sm">
                  {card.name}
                </h4>
                <h2 className="text-3xl md:text-7xl font-bold">{card.title}</h2>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {card.subTitle}
                </h3>
                <p className="text-base md:text-lg md:w-1/2 opacity-90">
                  {card.description}
                </p>

                <Link
                  href={card.link}
                  style={{
                    backgroundColor: card.buttonBg,
                    color: card.buttonTextColor,
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold w-fit"
                >
                  {card.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-end gap-4 w-full md:w-auto">
              <h2 className="text-4xl md:text-8xl font-bold opacity-30">
                {card.cardNumber}
              </h2>

              <div className="relative w-40 h-40 md:w-72 md:h-[420px] rounded-xl overflow-hidden rotate-3 bg-white">
                <video
                  src={card.video}
                  loop
                  autoPlay
                  muted
                  className="absolute inset-0 w-full h-full object-cover p-2 rounded-2xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
