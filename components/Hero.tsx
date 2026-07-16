"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 md:px-0 pt-10 md:pt-24 pb-16 md:pb-28">
      <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        {/* Copy */}
        <div className="md:col-span-7 stagger-children">
          <p className="eyebrow">Dental Practice Consulting · Melbourne</p>
          <span className="accent-rule" />

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] font-medium text-ink mt-5">
            Where dental
            <br />
            practices{" "}
            <span className="italic text-accent">grow.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-xl mt-7 leading-relaxed">
            We implement the systems, technology and training your practice
            needs to grow: AI automation, patient experience and team
            capability, delivered and measured in 90 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Book a Free Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 border border-ink/25 text-ink px-7 py-3.5 rounded-full font-medium hover:border-ink hover:bg-ink hover:text-white transition-colors"
            >
              See how it works
            </Link>
          </div>

          {/* credential row */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-10 pt-7 border-t border-line text-sm text-muted">
            <span className="text-ink font-medium">Tech &amp; AI</span>
            <span className="text-line">·</span>
            <span className="text-ink font-medium">Customer Experience</span>
            <span className="text-line">·</span>
            <span className="text-ink font-medium">Training</span>
            <span className="hidden sm:inline text-line">·</span>
            <span className="text-muted">Results in 90 days</span>
          </div>
        </div>

        {/* Media */}
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-paper">
            <video
              src="/videos/hero1.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <p className="eyebrow mt-4 text-muted !text-[0.7rem]">
            Implementation, not just advice
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
