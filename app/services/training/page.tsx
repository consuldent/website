import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Team Training | Consuldent",
  description:
    "Virtual and on-site training for front desk, practice managers, nurses and dentists. Build the standard, then hold it.",
  alternates: {
    canonical: "/services/training",
  },
  openGraph: {
    title: "Dental Team Training | Consuldent",
    description:
      "Build a team that delivers. Virtual and on-site training for every role in your dental practice.",
    url: "https://consuldent.com.au/services/training",
  },
};

const included = [
  "Front desk training",
  "Practice manager coaching",
  "Clinical team training",
  "Leadership development",
  "Custom programs, virtual or on-site",
  "Hiring and onboarding standards",
];

const signals = [
  "New staff learn the job by watching whoever happens to be on that day.",
  "The front desk apologises for the wait before saying hello.",
  "Feedback only happens when something has already gone wrong.",
  "The practice manager is the bottleneck for every decision.",
];

const steps = [
  {
    n: "01",
    title: "Observe",
    body: "A day in the practice, watching the real handoffs: calls, check-in, handover, recall. The gap between the written process and the actual one.",
  },
  {
    n: "02",
    title: "Build the standard",
    body: "One page per role. What good sounds like, what to say, what to do when it goes sideways. Written by the people who do the job.",
  },
  {
    n: "03",
    title: "Coach in the room",
    body: "Practice, not lectures. We train in your practice, with your patients, and leave someone accountable for keeping it.",
  },
];

export default function TrainingPage() {
  return (
    <main className="bg-bone">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          All services
        </Link>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 mt-10 items-start">
          <div className="md:col-span-7 animate-fade-in-up">
            <p className="eyebrow mb-4">03 · Training</p>
            <span className="accent-rule mb-6" />
            <h1 className="font-display text-4xl md:text-6xl font-medium text-ink leading-[1.05]">
              Train the team you already have.
            </h1>
            <p className="text-xl text-muted mt-6 leading-relaxed">
              Most practices don&apos;t need more people. They need the people
              they have to be taught the job properly — then held to it.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mt-9">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-ink-soft"
                >
                  <Check
                    className="w-4 h-4 text-accent mt-1 shrink-0"
                    strokeWidth={2.5}
                  />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-10">
              <Link
                href="/contact?model=transformation"
                className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium hover:bg-accent/90 transition-colors"
              >
                Book a free call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="text-sm text-muted">
                Start with a measured look, not a proposal.
              </p>
            </div>
          </div>

          <aside className="md:col-span-5 bg-paper border border-line rounded-2xl p-7 md:p-8">
            <p className="eyebrow mb-5">If this is you</p>
            <ul className="space-y-4">
              {signals.map((signal) => (
                <li
                  key={signal}
                  className="flex items-start gap-3 text-sm text-ink-soft leading-relaxed"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                  <span>{signal}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted mt-7 pt-6 border-t border-line leading-relaxed">
              We count these before changing anything. If the numbers don&apos;t
              support the fix, we&apos;ll say so.
            </p>
          </aside>
        </div>

        <section className="mt-20 md:mt-28">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">The work</p>
            <h2 className="font-display text-3xl md:text-5xl font-medium text-ink">
              In this order.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {steps.map((step) => (
              <div
                key={step.n}
                className="bg-paper border border-line rounded-2xl p-7"
              >
                <span className="font-display text-sm text-accent">
                  {step.n}
                </span>
                <h3 className="font-display text-xl font-medium text-ink mt-3">
                  {step.title}
                </h3>
                <p className="text-muted mt-2 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl bg-ink px-7 py-12 md:px-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl font-medium text-bone">
              A standard nobody was taught isn&apos;t a standard.
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bone text-ink px-7 py-3.5 rounded-full font-medium mt-7 hover:bg-white transition-colors"
            >
              Book a free call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
