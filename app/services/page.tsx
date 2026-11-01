import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Consuldent",
  description:
    "Dental practice consulting services: fractional practice management, Tech & AI, Customer Experience, and Training. Fixed fee, month to month, we implement.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services - Consuldent",
    description:
      "Dental practice consulting services: fractional practice management, Tech & AI, Customer Experience, Training. We implement, not just advise.",
    url: "https://consuldent.com.au/services",
  },
};

const services = [
  {
    id: 1,
    number: "01",
    title: "Tech & AI",
    lede: "Your systems should give your team time back, not one more thing to maintain.",
    features: [
      "Practice Management System (PMS) optimisation",
      "AI chat for patient enquiries",
      "Automated recall and reactivation",
      "Cloud migration and security",
      "Workflow automation",
      "Website and marketing audit",
    ],
    link: "/services/tech-ai",
  },
  {
    id: 2,
    number: "02",
    title: "Customer Experience",
    lede: "Most practices don't have a lead problem. They have a conversion problem.",
    features: [
      "Phone scripts and call handling",
      "Patient onboarding systems",
      "Treatment presentation frameworks",
      "Google Business Profile",
      "Review and referral programs",
      "Recall scripting",
    ],
    link: "/services/customer-experience",
  },
  {
    id: 3,
    number: "03",
    title: "Training",
    lede: "A standard only exists if every person in the practice can repeat it.",
    features: [
      "Front desk training",
      "Practice manager coaching",
      "Clinical team training",
      "Leadership development",
      "Custom programs, virtual or on-site",
      "Hiring and onboarding standards",
    ],
    link: "/services/training",
  },
];

const models = [
  {
    name: "Fractional Practice Manager",
    duration: "Month to month",
    description:
      "A senior practice manager on your roster part-time, with automation and front-desk training built in. Replaces the next full-time admin salary instead of adding one.",
    cta: "Check availability",
    href: "/contact?model=fractional",
    featured: true,
  },
  {
    name: "Audit",
    duration: "Two weeks",
    description:
      "A measured picture of where the leaks are, what they're worth, and what to fix first.",
    cta: "Start with an audit",
    href: "/contact?model=audit",
    featured: false,
  },
  {
    name: "Transformation",
    duration: "Six months",
    description:
      "Implementation across your two or three biggest constraints, with your team trained to hold the change.",
    cta: "Talk about transformation",
    href: "/contact?model=transformation",
    featured: false,
  },
  {
    name: "Scale & Optimise",
    duration: "Twelve months",
    description:
      "An ongoing partnership once the basics hold. New sites, new systems, steady review.",
    cta: "Talk about a partnership",
    href: "/contact?model=scale",
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-bone">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-3xl animate-fade-in-up">
          <p className="eyebrow mb-5">Services</p>
          <span className="accent-rule mb-6" />
          <h1 className="font-display text-5xl md:text-7xl font-medium text-ink leading-[1.03]">
            What we actually fix.
          </h1>
          <p className="text-xl text-muted mt-6 leading-relaxed">
            Three disciplines, one accountable partner. We start with the
            constraint costing you the most, fix it, then move to the next.
          </p>
        </div>

        {/* Services */}
        <div className="grid lg:grid-cols-3 gap-6 mt-14">
          {services.map((service) => (
            <article
              key={service.id}
              className="bg-paper border border-line rounded-2xl p-7 md:p-8 flex flex-col hover:border-ink/30 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow !text-accent">{service.number}</span>
                <ArrowUpRight className="w-4 h-4 text-muted" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-ink mt-4">
                {service.title}
              </h2>
              <p className="text-muted mt-3 leading-relaxed">{service.lede}</p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm text-ink-soft"
                  >
                    <Check
                      className="w-4 h-4 text-accent mt-0.5 shrink-0"
                      strokeWidth={2.5}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={service.link}
                className="luxury-link inline-flex items-center gap-1.5 mt-7 text-sm font-medium text-accent w-fit"
              >
                See what&apos;s involved
                <ArrowRight className="w-4 h-4" />
              </Link>
            </article>
          ))}
        </div>

        {/* Engagement models */}
        <section className="mt-24 md:mt-32">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Ways to work together</p>
            <span className="accent-rule mb-6" />
            <h2 className="font-display text-3xl md:text-5xl font-medium text-ink">
              Start as small as you like.
            </h2>
            <p className="text-lg text-muted mt-4 leading-relaxed">
              Every engagement is scoped and quoted in writing before it starts.
              You&apos;ll know the number before you commit to anything.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
            {models.map((model) => (
              <div
                key={model.name}
                className={`bg-paper border rounded-2xl p-7 flex flex-col ${
                  model.featured ? "border-accent" : "border-line"
                }`}
              >
                {model.featured ? (
                  <span className="self-start bg-accent text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
                    Most chosen
                  </span>
                ) : (
                  <span className="text-xs text-muted mb-4">
                    {model.duration}
                  </span>
                )}
                {model.featured && (
                  <span className="text-xs text-muted mb-2">
                    {model.duration}
                  </span>
                )}
                <h3 className="font-display text-2xl font-medium text-ink">
                  {model.name}
                </h3>
                <p className="text-muted mt-3 leading-relaxed flex-1">
                  {model.description}
                </p>
                <Link
                  href={model.href}
                  className={`inline-flex items-center justify-center gap-2 mt-7 px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                    model.featured
                      ? "bg-accent text-white hover:bg-accent/90"
                      : "border border-ink/25 text-ink hover:bg-ink hover:text-white"
                  }`}
                >
                  {model.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl bg-ink px-7 py-12 md:px-12 md:py-16">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-medium text-bone leading-[1.08]">
              Not sure which one you need?
            </h2>
            <p className="text-bone/65 text-lg mt-4 leading-relaxed">
              That&apos;s the normal starting point. The first job is
              measurement, not a proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-bone text-ink px-7 py-3.5 rounded-full font-medium mt-8 hover:bg-white transition-colors"
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
