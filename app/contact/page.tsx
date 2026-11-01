import { Metadata } from "next";
import Link from "next/link";
import { Check, Mail, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a free call | Consuldent",
  description:
    "A free 15-minute call with Dr Vrinda Vashisht, or ask for a one-page summary of the three things she'd change first. No pitch, no obligation.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book a Free Call | Consuldent",
    description:
      "A free 15-minute call with a dentist who has also run the front desk - or a one-page summary, no call needed.",
    url: "https://consuldent.com.au/contact",
  },
};

const faqs = [
  {
    q: "What does the free call actually cost?",
    a: "Nothing, and there's no obligation afterwards. It's 15 minutes with Dr Vrinda. You leave with a clear view of what you'd fix first, whether or not you work with us. Rather not talk at all? Ask for the one-page summary and I'll do it by email.",
  },
  {
    q: "How quickly will we see something change?",
    a: "The first fixes usually land inside three weeks. We track the numbers we changed against the numbers before, and review them with you at 90 days.",
  },
  {
    q: "Do you work with our practice manager, or around them?",
    a: "With them. We train and support the person you already have. We're not there to replace your team, and we don't hire into it.",
  },
  {
    q: "We're outside Melbourne. Can you still help?",
    a: "Yes. Most of the work is remote, with on-site days in Victoria where they help. We work with practices across VIC, NSW and Queensland.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const modelLabels: Record<string, string> = {
  audit: "Practice audit",
  transformation: "Transformation engagement",
  scale: "Scale & optimise",
  fractional: "Fractional practice management",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ model?: string | string[] }>;
}) {
  const params = await searchParams;
  const rawModel = Array.isArray(params?.model)
    ? params.model[0]
    : params?.model;
  const intent = rawModel ? modelLabels[rawModel] ?? rawModel : undefined;

  return (
    <main className="bg-bone">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl animate-fade-in-up">
          <p className="eyebrow mb-5">Book a call</p>
          <span className="accent-rule mb-6" />
          <h1 className="font-display text-5xl md:text-7xl font-medium text-ink leading-[1.03]">
            Book your free call.
          </h1>
          <p className="text-xl text-muted mt-6 leading-relaxed">
            15 minutes, no pitch. Tell me what&apos;s not working and I&apos;ll
            tell you what I&apos;d fix first — even if that&apos;s all you take
            away.
          </p>
          <p className="text-muted mt-4 leading-relaxed max-w-xl">
            Rather not get on a call at all? In the form, choose{" "}
            <span className="text-ink font-medium">
              &ldquo;Send me the one-page summary&rdquo;
            </span>{" "}
            and I&apos;ll email it without a call.
          </p>
          {intent && (
            <p className="inline-flex items-center gap-2 mt-6 text-sm text-ink bg-paper border border-line rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Enquiring about: {intent}
            </p>
          )}
        </div>

        {/* Form + context */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 mt-14 items-start">
          <div className="md:col-span-5 space-y-9">
            <div>
              <p className="eyebrow mb-4">What happens on the call</p>
              <ol className="space-y-5">
                <li className="flex gap-4">
                  <span className="font-display text-lg text-accent leading-none mt-1">
                    01
                  </span>
                  <div>
                    <p className="font-medium text-ink">You talk, mostly.</p>
                    <p className="text-muted text-sm mt-1 leading-relaxed">
                      What&apos;s breaking, what you&apos;ve already tried, what
                      you&apos;d fix first if you had a spare month.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-display text-lg text-accent leading-none mt-1">
                    02
                  </span>
                  <div>
                    <p className="font-medium text-ink">
                      I tell you what I&apos;d do.
                    </p>
                    <p className="text-muted text-sm mt-1 leading-relaxed">
                      The specific changes I&apos;d make in your first 90 days,
                      and what I&apos;d expect each one to move.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="font-display text-lg text-accent leading-none mt-1">
                    03
                  </span>
                  <div>
                    <p className="font-medium text-ink">You decide.</p>
                    <p className="text-muted text-sm mt-1 leading-relaxed">
                      If it&apos;s a fit, I&apos;ll send a written scope and fee.
                      If it isn&apos;t, I&apos;ll say so.
                    </p>
                  </div>
                </li>
              </ol>
            </div>

            <div className="pt-8 border-t border-line">
              <p className="eyebrow mb-4">Who this is for</p>
              <ul className="space-y-2.5">
                {[
                  "Owners doing their own admin after hours",
                  "Practices where the front desk has become the bottleneck",
                  "Practice managers who need systems, not another report",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-soft"
                  >
                    <Check
                      className="w-4 h-4 text-accent mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 border-t border-line space-y-3 text-sm">
              <p className="eyebrow">Prefer email</p>
              <a
                href="mailto:vrinda@consuldent.com.au"
                className="flex items-center gap-2 text-ink hover:text-accent transition-colors"
              >
                <Mail className="w-4 h-4" />
                vrinda@consuldent.com.au
              </a>
              <p className="flex items-center gap-2 text-muted">
                <MapPin className="w-4 h-4" />
                Melbourne · on-site in VIC, remote elsewhere
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            <ContactForm intent={intent} />
          </div>
        </div>

        {/* FAQ */}
        <section className="mt-24 md:mt-32">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Before you book</p>
            <span className="accent-rule mb-6" />
            <h2 className="font-display text-3xl md:text-5xl font-medium text-ink">
              The questions people actually ask.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="bg-paper border border-line rounded-2xl p-7"
              >
                <h3 className="font-display text-xl font-medium text-ink">
                  {faq.q}
                </h3>
                <p className="text-muted mt-3 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <p className="text-muted mt-10">
            Not sure what&apos;s wrong yet? That&apos;s the usual starting
            point.{" "}
            <Link
              href="/services"
              className="text-accent underline underline-offset-2"
            >
              See what we look at
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
