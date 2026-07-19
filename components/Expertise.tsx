"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const expertise = [
  {
    id: 1,
    number: "01",
    title: "Tech & AI",
    subTitle: "Modernise your practice systems.",
    description:
      "PMS optimisation, AI chatbots, automation, cloud migration, cybersecurity, and integrations that actually stick.",
    video: "/videos/expertise1.mp4",
  },
  {
    id: 2,
    number: "02",
    title: "Customer Experience",
    subTitle: "Convert more, lose less.",
    description:
      "Phone scripts, patient onboarding, treatment presentation, recall systems, Google Business, and reviews that build your reputation.",
    video: "/videos/expertise2.mp4",
  },
  {
    id: 3,
    number: "03",
    title: "Training",
    subTitle: "Your team, finally performing.",
    description:
      "Front desk, practice manager, nurse, and dentist training. Virtual or on-site. Your whole team leveled up.",
    video: "/videos/expertise3.mp4",
  },
  {
    id: 4,
    number: "04",
    title: "Results",
    subTitle: "Measure everything that matters.",
    description:
      "Every system we build is tracked. You see exactly what's working, what's not, and where the revenue is.",
    video: "/videos/expertise4.mp4",
  },
];

const Expertise = () => {
  return (
    <section className="container mx-auto py-20 md:py-28 px-4">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink">
            Four disciplines.
            <br />
            One accountable partner.
          </h2>
        </div>
        <p className="text-lg text-muted max-w-md leading-relaxed">
          We deploy the right specialism for the gap in your practice, then
          implement it and measure the result.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {expertise.map((item) => (
          <article
            key={item.id}
            className="expertise-card group bg-paper border border-line rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-lg"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-bone via-bone to-line/30">
              <video
                src={item.video}
                loop
                autoPlay
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute top-4 left-4 font-display text-sm text-accent bg-paper/95 backdrop-blur-sm px-3 py-1 rounded-full border border-line">
                {item.number}
              </span>
            </div>

            <div className="p-7 md:p-8">
              <h3 className="font-display text-2xl md:text-3xl font-medium text-ink">
                {item.title}
              </h3>
              <p className="text-base font-medium text-ink-soft mt-2">
                {item.subTitle}
              </p>
              <p className="text-muted mt-3 leading-relaxed">
                {item.description}
              </p>

              <Link
                href="/services"
                className="luxury-link inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-accent"
              >
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
