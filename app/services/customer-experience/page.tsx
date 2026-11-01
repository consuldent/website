import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Experience for Dental Practices | Consuldent",
  description:
    "Phone scripts, patient onboarding, treatment presentation, recall systems and Google Business optimisation. Turn the enquiries you already pay for into booked patients.",
  alternates: {
    canonical: "/services/customer-experience",
  },
  openGraph: {
    title: "Customer Experience for Dental Practices | Consuldent",
    description:
      "Turn first-time enquiries into booked, kept and returning patients.",
    url: "https://consuldent.com.au/services/customer-experience",
  },
};

const included = [
  "Phone scripts and call handling standards",
  "New patient onboarding",
  "Treatment presentation frameworks",
  "Recall and reactivation campaigns",
  "Google Business Profile",
  "Review and referral systems",
];

const signals = [
  "The phone goes to voicemail at lunch, and nobody calls back.",
  "People ask the price and never call again.",
  "Quotes for big treatment go out and nobody follows up.",
  "Two team members give two different answers to the same question.",
];

const steps = [
  {
    n: "01",
    title: "Listen",
    body: "We sit in on real calls and count what happens: enquiries, bookings, price questions, drop-offs. No guessing at conversion rates.",
  },
  {
    n: "02",
    title: "Rewrite",
    body: "Scripts, offers and a follow-up cadence built around the way your patients actually talk. Short enough to remember under pressure.",
  },
  {
    n: "03",
    title: "Hold the line",
    body: "Practice in the room, then measure. The standard survives only if someone is checking it weekly.",
  },
];

export default function CustomerExperiencePage() {
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
            <p className="eyebrow mb-4">02 · Customer Experience</p>
            <span className="accent-rule mb-6" />
            <h1 className="font-display text-4xl md:text-6xl font-medium text-ink leading-[1.05]">
              Turn more enquiries into booked patients.
            </h1>
            <p className="text-xl text-muted mt-6 leading-relaxed">
              You&apos;re already paying to make the phone ring. What happens in
              the next ninety seconds decides whether it becomes a patient.
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
                data-cta="svc_customer_experience_hero"
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
              Your next enquiry is already calling.
            </h2>              <Link
                href="/contact"
                data-cta="svc_customer_experience_bottom"

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
