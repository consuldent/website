import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

const credentials = [
  "Dental surgeon — has sat in the chair, not just beside it",
  "Practice manager — has run the front desk, the roster and the P&L",
  "A decade across Australian practices, single-site and multi-location",
];

const Founder = () => {
  return (
    <section className="container mx-auto py-20 md:py-28 px-4">
      <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-paper">
            <Image
              src="/vrinda_headshot.png"
              alt="Dr Vrinda Vashisht, founder of Consuldent"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="md:col-span-7">
          <p className="eyebrow mb-4">Why dentists listen</p>
          <span className="accent-rule mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-medium text-ink leading-[1.08]">
            Advice from someone who has
            <span className="italic text-accent"> run the front desk.</span>
          </h2>

          <div className="space-y-4 text-lg text-ink-soft leading-relaxed mt-6">
            <p>
              You went to dental school to be a dentist. Nobody taught you how
              to run a business — and most consultants have never run a
              practice either.
            </p>
            <p>
              Dr Vrinda Vashisht has done both. She has worked clinically across
              Australian practices and managed them: the phones, the recall
              list, the roster, the numbers. That is why the recommendations are
              things your team can actually do on a Tuesday.
            </p>
          </div>

          <ul className="mt-7 space-y-2.5">
            {credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 text-ink-soft">
                <Check
                  className="w-4 h-4 text-accent mt-1 shrink-0"
                  strokeWidth={2.5}
                />
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-9">
            <Link
              href="/contact"
              data-cta="homepage_founder"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Book a free call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="luxury-link text-sm font-medium text-ink w-fit"
            >
              More about Consuldent
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
