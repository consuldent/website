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

          <h1 className="font-display text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.4rem] leading-[1.03] font-medium text-ink mt-5">
            More booked patients.
            <br />
            Less admin.{" "}
            <span className="italic text-accent">In 90 days.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-xl mt-7 leading-relaxed">
            We find where your practice is leaking enquiries — the calls that
            ring out, the quotes nobody follows up, the recall list nobody
            works — then fix it with your team: automation for the repetitive
            work, a fractional practice manager instead of another full-time
            salary, and a front desk trained to a standard.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-9">
            <Link
              href="/contact"
              data-cta="hero_primary"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Book a free call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#leaks"
              className="inline-flex items-center justify-center gap-2 border border-ink/25 text-ink px-7 py-3.5 rounded-full font-medium hover:border-ink hover:bg-ink hover:text-white transition-colors"
            >
              See where you&apos;re leaking
            </Link>
          </div>

          <p className="text-sm text-muted mt-4">
            15 minutes, no pitch. Prefer no call? Ask for the one-page summary
            instead and I&apos;ll email it.
          </p>

          {/* credibility row */}
          <div className="mt-9 pt-7 border-t border-line text-sm">
            <p className="text-ink-soft">
              <span className="font-medium text-ink">Dr Vrinda Vashisht</span>{" "}
              — dental surgeon and practice manager
            </p>
            <p className="text-muted mt-1">
              Melbourne based · working with practices across VIC, NSW &amp; QLD
            </p>
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
