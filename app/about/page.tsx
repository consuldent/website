import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Check,
  Cpu,
  TrendingUp,
  PhoneCall,
  ClipboardList,
  GraduationCap,
  Compass,
  ArrowUpRight,
} from 'lucide-react';
// import { FaLinkedin } from 'react-icons/fa'; // LinkedIn re-enabled later

export const metadata: Metadata = {
  title: 'About - Consuldent',
  description:
    "Learn about Consuldent: Melbourne's dental practice growth specialists. AI-powered consulting, hands-on implementation, results in 90 days.",
  openGraph: {
    title: 'About - Consuldent',
    description:
      "Melbourne's dental practice growth specialists. AI-powered consulting, hands-on implementation, results in 90 days.",
    url: 'https://consuldent.com.au/about',
  },
};

const values = [
  {
    title: 'We implement, not just advise',
    description:
      'Every system we build is tracked, measured, and optimised for real results. We do the heavy lifting so you can focus on patients.',
  },
  {
    title: 'Results in 90 days or less',
    description:
      "Not 6–18 months like traditional consultants. We deliver measurable improvements fast, because your practice can't wait.",
  },
  {
    title: 'Your practice, your way',
    description:
      'Every practice is unique. We build custom solutions tailored to your specific needs, team dynamics, and growth goals.',
  },
];

// The Bench: anonymous capability cards. No individual names.
// Describes the tools, skills and core specialties our consultants bring.
const bench = [
  {
    icon: Cpu,
    title: 'Tech & AI',
    summary:
      'Modernise the systems your practice runs on and let automation do the repetitive work.',
    skills: [
      'PMS optimisation',
      'AI chatbots & automation',
      'Cloud migration',
      'Cybersecurity',
      'Systems integration',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Marketing & Growth',
    summary:
      'Fill the chair consistently with patient acquisition engines that compound.',
    skills: [
      'Patient acquisition',
      'Google Business Profile',
      'Reviews & reputation',
      'Recall campaigns',
      'Treatment presentation',
    ],
  },
  {
    icon: PhoneCall,
    title: 'Customer Experience',
    summary:
      'Turn every enquiry into a booked, kept and returned appointment.',
    skills: [
      'Phone scripts & call handling',
      'Patient onboarding',
      'Recall systems',
      'Reputation management',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Practice Operations',
    summary:
      'Find the revenue and time hiding inside your daily workflows.',
    skills: [
      'KPIs & reporting',
      'Scheduling efficiency',
      'Fee collection & billing',
      'Profitability & capacity',
    ],
  },
  {
    icon: GraduationCap,
    title: 'Clinical & Training',
    summary:
      'Lift the capability of every role across the practice.',
    skills: [
      'Front desk training',
      'Practice manager coaching',
      'Nurse & dentist upskilling',
      'Virtual + on-site delivery',
    ],
  },
  {
    icon: Compass,
    title: 'Strategy & Growth Planning',
    summary:
      'A clear, accountable plan that turns ambition into a 90-day roadmap.',
    skills: [
      'Growth roadmaps',
      'Benchmarking',
      '90-day implementation plans',
      'Performance tracking',
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bone">
      <div className="container mx-auto px-4 py-20 md:py-28">
        {/* Header */}
        <div className="mb-20 md:mb-28 max-w-3xl animate-fade-in-up">
          <p className="eyebrow mb-5">About</p>
          <span className="accent-rule mb-6" />
          <h1 className="font-display text-5xl md:text-7xl font-medium text-ink leading-[1.03]">
            We help dental practices grow.
          </h1>
          <p className="text-xl text-muted mt-7 leading-relaxed">
            Smarter systems, better technology, and trained teams, implemented,
            not just advised. Results in 90 days or less.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-24 md:mb-32 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Our story</p>
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink">
              Great dentistry shouldn&apos;t mean complicated business.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-5 text-lg text-ink-soft leading-relaxed">
            <p>
              You went to dental school to be a great dentist. Nobody taught you
              how to run a business.
            </p>
            <p>
              Every day, brilliant dentists leave thousands of dollars on the
              table because their systems are broken. Phone calls go unanswered.
              Patients don&apos;t book. Staff burn out. Sound familiar?
            </p>
            <p>
              We combine AI-powered consulting with hands-on implementation to
              transform your practice, not in 12–18 months, but in 90 days or
              less. Our team has worked with dental practices across Australia
              and seen what works. Now we implement systems that actually stick.
            </p>
          </div>
        </section>

        {/* Why Consuldent */}
        <section className="mb-24 md:mb-32">
          <p className="eyebrow mb-4">Why Consuldent</p>
          <span className="accent-rule mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink mb-10">
            A different kind of consultancy.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-paper border border-line rounded-2xl p-7"
              >
                <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center mb-5">
                  <Check className="w-4 h-4 text-accent" strokeWidth={2} />
                </div>
                <h3 className="font-display text-xl font-medium text-ink mb-2">
                  {value.title}
                </h3>
                <p className="text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Founder spotlight (light) */}
        <section className="mb-24 md:mb-32">
          <p className="eyebrow mb-4">Leadership</p>
          <span className="accent-rule mb-6" />
          <h2 className="font-display text-3xl md:text-4xl font-medium text-ink mb-10">
            Directed by our founder.
          </h2>
          <div className="grid md:grid-cols-12 gap-10 items-center bg-paper border border-line rounded-3xl p-7 md:p-12">
            <div className="md:col-span-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-line bg-paper">
                <Image
                  src="/vrinda_headshot.png"
                  alt="Dr Vrinda Vashisht, Founder & Managing Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <p className="text-sm uppercase tracking-[0.14em] text-accent font-medium">
                Founder &amp; Managing Director
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-medium text-ink mt-2">
                Dr Vrinda Vashisht
              </h3>
              <p className="text-muted mt-1">Dental Surgeon &amp; Practice Management Consultant</p>
              <p className="text-ink-soft leading-relaxed mt-5">
                With over a decade of clinical and practice management experience
                across multiple dental practices in Australia, Dr Vrinda brings a
                rare dual perspective, she&apos;s been both the dentist in the
                chair and the manager behind the desk. Her expertise spans
                clinical operations, patient journey design, and team performance
                optimisation. She founded Consuldent on a simple premise: great
                dentistry shouldn&apos;t mean complicated business.
              </p>
              {/* LinkedIn link re-enabled later */}
              {/* <a
                href="https://www.linkedin.com/in/dr-vrinda-vashisht-ba06ab27a/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-ink border border-ink/25 rounded-full px-5 py-2.5 hover:bg-ink hover:text-bone transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a> */}
            </div>
          </div>
        </section>

        {/* The Bench: anonymous capability cards */}
        <section>
          <div className="max-w-2xl mb-10">
            <p className="eyebrow mb-4">The bench</p>
            <span className="accent-rule mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-medium text-ink">
              Specialists behind every engagement.
            </h2>
            <p className="text-lg text-muted mt-4 leading-relaxed">
              We deploy the right specialist for the gap in your practice, a
              senior bench across tech, growth and operations, directed by our
              founder.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bench.map((b) => (
              <div
                key={b.title}
                className="bg-paper border border-line rounded-2xl p-7 hover:border-ink/30 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl border border-line bg-bone flex items-center justify-center mb-5">
                  <b.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-medium text-ink">
                  {b.title}
                </h3>
                <p className="text-muted mt-2 leading-relaxed text-sm">
                  {b.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {b.skills.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-sm text-ink-soft"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-white px-7 py-3.5 rounded-full font-medium hover:bg-accent/90 transition-colors"
            >
              Book a Free Call <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
