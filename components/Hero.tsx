"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Image from "next/image";

// icons
import { ArrowRight, ArrowDown } from "lucide-react";
import Link from "next/link";
import MagneticButton from "./MagneticButton";

const cards = [
  {
    id: 1,
    type: "text",
    title: "$50K+",
    bgColor: "#0A3D91",
    subTitle: "Monthly Revenue Left on Table",
    text: "Most practices don't capture what they should",
    textColor: "text-white",
  },
  {
    id: 2,
    type: "video",
    video: "/videos/frame1.mp4",
  },
  {
    id: 3,
    type: "text",
    title: "90 Days",
    bgColor: "#10B981",
    subTitle: "To Measurable Results",
    text: "Not 6-18 months like our competitors",
    textColor: "text-white",
  },
  {
    id: 4,
    type: "video",
    video: "/videos/frame2.mp4",
  },
];

const Hero = () => {
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);
  const leerButtonRef = useRef<HTMLAnchorElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  // arrow icons
  const topIconRef = useRef<HTMLDivElement>(null);
  const bottomIconRef = useRef<HTMLDivElement>(null);

  // text reveal on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title-line", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: "power3.out",
      });
      gsap.from(".hero-card", {
        y: 60,
        opacity: 0,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.6,
        ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, []);

  // handle mouse enter on card
  const handleMouseEnter = (index: number) => {
    cardRef.current.forEach((card, i) => {
      if (!card) return;
      console.log("i", i);
      if (i === index) {
        gsap.to(card, {
          scale: 1.1,
          rotation: 0,
          duration: 0.3,
          ease: "power1.inOut",
        });
      } else if (i < index) {
        gsap.to(card, {
          x: -50,
          scale: 0.95,
          duration: 0.3,
          ease: "power1.inOut",
        });
      } else {
        gsap.to(card, {
          x: 50,
          scale: 0.95,
          duration: 0.3,
          ease: "power1.inOut",
        });
      }
    });
  };

  // handle mouse leave
  const handleMouseLeave = () => {
    cardRef.current.forEach((card) => {
      if (!card) return;
      gsap.to(card, {
        x: 0,
        scale: 1,
        duration: 0.3,
        rotation: 5,
        ease: "expo.inOut",
      });
    });
  };

  // handle leer button mouse enter
  const handleLeerbuttonMouseEnter = () => {
    if (!leerButtonRef.current) return;
    gsap.to(leerButtonRef.current, {
      rotation: -7,
      borderRadius: "10px",
      duration: 0.3,
      scale: 1.1,
      ease: "power1.inOut",
    });
  };
  const handleLeerbuttonMouseLeave = () => {
    if (!leerButtonRef.current) return;
    gsap.to(leerButtonRef.current, {
      borderRadius: "10px",
      rotation: 0,
      duration: 0.3,
      scale: 1,
      ease: "power1.inOut",
    });
  };

  // arrow down button animation
  const handleArrowMouseEnter = () => {
    if (!topIconRef.current) return;
    gsap.to(topIconRef.current, {
      y: 40,
      duration: 0.3,
      ease: "power1.inOut",
    });
    gsap.fromTo(
      bottomIconRef.current,
      {
        y: -40,
      },
      {
        y: 0,
        duration: 0.3,
        ease: "power1.inOut",
      },
    );
  };
  const handleArrowMouseLeave = () => {
    if (!topIconRef.current) return;
    gsap.to(bottomIconRef.current, {
      y: -40,
      duration: 0.3,
      ease: "power1.inOut",
    });
    gsap.to(topIconRef.current, {
      y: 0,
      duration: 0.3,
      ease: "power2.in",
    });
  };

  return (
    <div className="container mx-auto py-5 md:py-12 px-2 md:px-0 overflow-hidden">
      {/* desktop title  */}
      <div ref={titleRef} className="space-y-8 hidden md:block overflow-hidden">
        <p className="text-4xl md:text-8xl font-bold hero-title-line">
          Where Dental Practices
        </p>
        <p className="text-4xl md:text-8xl font-bold hero-title-line">
          Grow.
        </p>
        <p ref={subtitleRef} className="text-2xl font-semibold">
          Stop leaving money on the table. Start scaling your clinic.
        </p>
      </div>
      {/* mobile title  */}
      <div className="md:hidden">
        <h2 className="text-5xl font-semibold hero-title-line">Where Dental Practices</h2>
        <h2 className="text-5xl font-semibold hero-title-line">Grow.</h2>
        <p className="text-2xl font-semibold mt-5">
          Stop leaving money on the table. Start scaling your clinic.
        </p>
      </div>

      {/* ===========
      desktop cards
      ================= */}
      <div className="hidden md:flex items-center justify-start mt-10 rotate-1 w-full">
        {cards.map((card, index) => {
          const lastIndex = cards.length - 1;
          if (card.type === "video") {
            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardRef.current[index] = el;
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`hero-card relative w-full p-4 rounded-4xl h-96 flex flex-col justify-between overflow-hidden ${
                  index === lastIndex
                    ? "-rotate-12"
                    : index === 1
                      ? "-rotate-10"
                      : ""
                }`}
              >
                <video
                  src={card?.video}
                  autoPlay
                  loop
                  muted
                  className="h-96 w-full object-cover absolute left-0 top-0"
                ></video>
              </div>
            );
          }
          return (
            <div
              key={card.id}
              ref={(el) => {
                cardRef.current[index] = el;
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ backgroundColor: card.bgColor }}
              className={`hero-card w-full p-4 rounded-4xl h-96 flex flex-col justify-between  ${
                index === 0 ? "rotate-3" : index === 2 ? "-rotate-6" : ""
              } ${card.textColor || ""}`}
            >
              <h2 className="text-5xl font-semibold">{card.title}</h2>
              <div className="w-full">
                <h2 className="text-2xl font-semibold">{card.subTitle}</h2>
                <div className="bg-white/50 w-full h-0.5 rounded-2xl my-2"></div>
                <p className="opacity-90">{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===========
      mobile cards 
      ================= */}
      <div className="md:hidden flex items-center justify-start mt-10 rotate-1 w-full">
        {cards.slice(0, 2).map((card, index) => {
          const lastIndex = cards.length - 1;
          if (card.type === "video") {
            return (
              <div
                key={card.id}
                ref={(el) => {
                  cardRef.current[index] = el;
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                className={`relative w-full p-4 rounded-4xl h-96 flex flex-col justify-between overflow-hidden ${
                  index === lastIndex
                    ? "-rotate-12"
                    : index === 1
                      ? "-rotate-10"
                      : ""
                }`}
              >
                <video
                  src={card?.video}
                  autoPlay
                  loop
                  muted
                  className="h-96 w-full object-cover absolute left-0 top-0"
                ></video>
              </div>
            );
          }
          return (
            <div
              key={card.id}
              ref={(el) => {
                cardRef.current[index] = el;
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{ backgroundColor: card.bgColor }}
              className={`w-full p-4 rounded-4xl h-96 flex flex-col justify-between  ${
                index === 0 ? "rotate-3" : index === 2 ? "-rotate-6" : ""
              } ${card.textColor || ""}`}
            >
              <h2 className="text-5xl font-semibold">{card.title}</h2>
              <div className="w-full">
                <h2 className="text-2xl font-semibold">{card.subTitle}</h2>
                <div className="bg-white/50 w-full h-0.5 rounded-2xl my-2"></div>
                <p className="opacity-90">{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* paragraph  */}
      <p className="text-2xl md:text-5xl font-bold md:w-2/3 md:ml-20 mt-27">
        We build the systems your practice needs to run without you. AI, automation, and training that actually works.
      </p>

      {/* image banner bottom section  */}
      <div className="mt-16 space-y-5 md:space-y-0 md:flex items-center justify-center gap-5">
        <div className="w-100 rounded-xl overflow-hidden">
          <video src="/videos/hero1.mp4" autoPlay loop muted className="w-full" />
        </div>
        {/* text  */}
        <div className="relative md:ml-32">
          <p className="md:w-1/2 text-2xl font-semibold">
            We don't just advise. We implement. AI chatbots, recall systems, phone scripts, PMS optimisation — all measured, all working while you focus on patients.
          </p>

          {/* meet the team button */}
          <MagneticButton>
            <Link
              href="/about"
              ref={leerButtonRef}
              onMouseEnter={handleLeerbuttonMouseEnter}
              onMouseLeave={handleLeerbuttonMouseLeave}
              className="flex items-center gap-2 border border-gray-500 rounded-lg px-4 py-2 text-sm font-medium cursor-pointer bg-white w-fit mt-6"
            >
              Meet the Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </MagneticButton>

        </div>
      </div>
    </div>
  );
};

export default Hero;
