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
    image: "/image/content/content1.avif",
    video: "/videos/content/Bullit _ Loop.mp4",
    title: "From $800K to $2M in 90 days",
    buttonText: "Transformation",
    bgColor: "#0A3D91",
    textColor: "text-white",
  },
  {
    id: 2,
    image: "/image/content/content2.avif",
    video: "/videos/content/loco-bites-loop.mp4",
    title: "Systems that work while you sleep",
    buttonText: "Automation",
    bgColor: "#10B981",
    textColor: "text-white",
  },
  {
    id: 3,
    image: "/image/content/content3.avif",
    video: "/videos/content/roasta-loop.mp4",
    title: "Front desk trained, patients converted",
    buttonText: "Training",
    bgColor: "#00C4CC",
    textColor: "text-white",
  },
];

const Content = () => {
  const cardRef = useRef<HTMLDivElement[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".content-title", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
      gsap.from(".content-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".content-card",
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleCardMouseEnter = (index: number) => {
    const card = cardRef.current[index];
    const cardVideo = card.querySelector(".cardVideo") as HTMLVideoElement;

    if (cardVideo) {
      cardVideo.play();
    }

    gsap.to(cardRef.current[index], {
      skewX: 3,
    });
    if (cardVideo) {
      gsap.to(cardVideo, {
        opacity: 1,
      });
    }
  };

  const handleCardMouseLeave = (index: number) => {
    const card = cardRef.current[index];
    const cardVideo = card.querySelector(".cardVideo") as HTMLVideoElement;

    if (cardVideo) {
      cardVideo.pause();
      cardVideo.currentTime = 0;
    }

    gsap.to(cardRef.current[index], {
      skewX: 0,
    });

    if (cardVideo) {
      gsap.to(cardVideo, {
        opacity: 0,
      });
    }
  };

  return (
    <div ref={sectionRef} className="container mx-auto py-16 px-2">
      {/* content  */}
      <div className="content-title space-y-4 md:px-20">
        <h2 className="text-3xl md:text-7xl font-bold">
          Results <br /> you can measure.
        </h2>
        <p className="text-xl font-semibold md:w-1/3">
          We build systems, not just strategies. Every engagement is tracked, every improvement visible.
        </p>
        <Link href="/about" className="inline-flex items-center gap-2 border border-gray-500 rounded-lg px-4 py-2 text-sm font-medium cursor-pointer bg-white w-fit">
          See our approach
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* content cards  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {contents.map((content, index) => (
          <div
            ref={(el) => {
              if (el) cardRef.current[index] = el;
            }}
            onMouseEnter={() => handleCardMouseEnter(index)}
            onMouseLeave={() => handleCardMouseLeave(index)}
            key={index}
            className={`content-card relative aspect-[4/5] md:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer ${
              index === 1 ? "md:-mt-28" : index === 2 ? "md:-mt-48" : ""
            }`}
          >
            {/* image  */}
            <Image
              src={content.image}
              fill
              className="object-cover"
              alt={content?.title}
            />
            
            {/* video overlay */}
            <video
              src={content?.video}
              className="cardVideo absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300"
              loop
              muted
              autoPlay
            />

            {/* text overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6"
            >
              <span className={`font-semibold text-sm mb-2 inline-block w-fit ${content.textColor}`}>
                {content?.buttonText}
              </span>
              <h2 className={`text-2xl md:text-3xl font-bold ${content.textColor}`}>
                {content?.title}
              </h2>
              <span className="absolute top-4 right-4 p-2 rounded-full bg-white text-gray-900">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;