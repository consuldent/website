"use client";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const contents = [
  {
    id: 1,
    image: "/image/content/loopimg3.png",
    video: "/videos/content/loop3.mp4",
    title: "Transformation that scales",
    label: "Transformation",
  },
  {
    id: 2,
    image: "/image/content/loopimg2.png",
    video: "/videos/content/loop2.mp4",
    title: "Systems that work while you sleep",
    label: "Automation",
  },
  {
    id: 3,
    image: "/image/content/loopimg1.png",
    video: "/videos/content/loop1.mp4",
    title: "Front desk trained, patients converted",
    label: "Training",
  },
];

const Content = () => {
  const cardRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".content-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
        },
      });
      gsap.from(".content-card", {
        y: 56,
        opacity: 0,
        duration: 0.7,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".content-card",
          start: "top 82%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleCardMouseEnter = (index: number) => {
    const card = cardRef.current[index];
    if (!card) return;
    const cardVideo = card.querySelector(".cardVideo") as HTMLVideoElement | null;
    if (cardVideo) {
      cardVideo.play().catch(() => {});
      gsap.to(cardVideo, { opacity: 1, duration: 0.4 });
    }
  };

  const handleCardMouseLeave = (index: number) => {
    const card = cardRef.current[index];
    if (!card) return;
    const cardVideo = card.querySelector(".cardVideo") as HTMLVideoElement | null;
    if (cardVideo) {
      cardVideo.pause();
      cardVideo.currentTime = 0;
      gsap.to(cardVideo, { opacity: 0, duration: 0.4 });
    }
  };

  return (
    <section ref={sectionRef} className="container mx-auto py-20 md:py-28 px-4">
      <div className="content-title flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow mb-4">Proof, not promises</p>
          <h2 className="font-display text-4xl md:text-6xl font-medium text-ink leading-[1.05]">
            Results you can measure.
          </h2>
        </div>
        <Link
          href="/about"
          className="luxury-link inline-flex items-center gap-1.5 text-sm font-medium text-ink"
        >
          See our approach
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contents.map((content, index) => (
          <div
            ref={(el) => {
              if (el) cardRef.current[index] = el;
            }}
            onMouseEnter={() => handleCardMouseEnter(index)}
            onMouseLeave={() => handleCardMouseLeave(index)}
            key={content.id}
            className="content-card group relative aspect-[4/5] rounded-2xl overflow-hidden border border-line cursor-pointer bg-bone"
          >
            <Image
              src={content.image}
              fill
              className="object-cover"
              alt={content.title}
              sizes="(max-width: 768px) 100vw, 33vw"
              loading={index === 0 ? "eager" : "lazy"}
            />

            <video
              src={content.video}
              className="cardVideo absolute inset-0 w-full h-full object-cover opacity-0"
              loop
              muted
              playsInline
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent flex flex-col justify-end p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="eyebrow !text-accent-soft">
                  {content.label}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-bone leading-tight">
                {content.title}
              </h3>
            </div>

            <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-bone text-ink flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content;
