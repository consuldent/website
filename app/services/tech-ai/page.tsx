import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech & AI for Dental Practices | Consuldent",
  description:
    "Modernise your dental practice with PMS optimisation, AI chat, recall automation, and cloud migration. We configure what you already own before selling you anything new.",
  alternates: {
    canonical: "/services/tech-ai",
  },
  openGraph: {
    title: "Tech & AI for Dental Practices | Consuldent",
    description:
      "Modernise your dental practice with PMS optimisation, AI chatbots, automation, and cloud solutions.",
    url: "https://consuldent.com.au/services/tech-ai",
  },
};

const included = [
  "Practice Management System optimisation",
  "AI chat for patient enquiries",
  "Automated recall and reactivation",
  "Cloud migration and backup",
  "Workflow automation",
  "Reporting you can actually read",
];

const signals = [
  "Your team re-types the same patient into three different systems.",
  "A website enquiry waits a day for a reply — or never gets one.",
  "Nobody can tell you yesterday's chair utilisation without asking someone.",
  "You're paying for software that nobody was ever trained on.",
];

const steps = [
  {
    n: "01",
    title: "Baseline",
    body: "What your systems actually do today: call volume, enquiry response time, no-shows, and where the manual work sits.",
  },
  {
    n: "02",
    title: "Configure",
    body: "Fix what you already own before recommending anything new. Most practices are using a fraction of the PMS they pay for.",
  },
  {
    n: "03",
    title: "Hand over",
    body: "Written checklists, a trained team, and one person accountable for each system. No dependency on us to keep it running.",
  },
];

export default function TechAIPage() {
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
            <p className="eyebrow mb-4">01 · Tech &amp; AI</p>
            <span className="accent-rule mb-6" />
            <h1 className="font-display text-4xl md:text-6xl font-medium text-ink leading-[1.05]">
              Make the systems do the admin.
            </h1>
            <p className="text-xl text-muted mt-6 leading-relaxed">
              Your PMS, phones, recalls and enquiries should run without someone
              babysitting them. We configure what you already own before
              recommending anything new.
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
                href="/contact?model=audit"
                data-cta="svc_tech_ai_hero"
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
              Ready to stop paying for software nobody uses?
            </h2>              <Link
                href="/contact"
                data-cta="svc_tech_ai_bottom"

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
