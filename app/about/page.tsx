import { Metadata } from 'next';
import Image from 'next/image';
import { FaLinkedin, FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'About - Consuldent',
  description:
    'Learn about Consuldent — Melbourne\'s dental practice growth specialists. AI-powered consulting, hands-on implementation, results in 90 days.',
  openGraph: {
    title: 'About - Consuldent',
    description:
      'Melbourne\'s dental practice growth specialists. AI-powered consulting, hands-on implementation, results in 90 days.',
    url: 'https://consuldent.com.au/about',
  },
};

const team = [
  {
    name: 'Dr Vrinda Vashisht',
    role: 'Founder & Principal Consultant',
    bio: 'With over a decade of clinical and practice management experience across multiple dental practices in Australia, Dr Vrinda brings a rare dual perspective — she\'s been both the dentist in the chair and the manager behind the desk. Her expertise spans clinical operations, patient journey design, and team performance optimisation. She founded Consuldent on a simple premise: great dentistry shouldn\'t mean complicated business.',
    image: '/vrinda.jpg',
    linkedin: 'https://www.linkedin.com/in/dr-vrinda-vashisht-ba06ab27a/',
    specialties: ['Practice Management', 'Clinical Operations', 'Patient Experience'],
  },
  {
    name: 'Dhruv Oberoi',
    role: 'Head of Autonations & AI',
    bio: 'A technology strategist with deep expertise in AI automation, cloud infrastructure, and system integration. Dhruv has built and scaled technology solutions across multiple industries and startups. At Consuldent, he architects the tech stack that powers practice growth — from PMS optimisation and AI chatbots to automated recall systems and data dashboards that actually tell you something useful.',
    image: '/dhruv.jpeg',
    linkedin: 'https://www.linkedin.com/in/oberoi-dhruv/',
    specialties: ['AI & Automation', 'System Integration', 'Data Analytics'],
  },
  {
    name: 'Jeremy Ciaora',
    role: 'Head of Growth & Marketing',
    bio: 'An ex-IBM strategist with extensive experience in business development and marketing across multiple industries. Jeremy brings enterprise-grade thinking to dental practice growth. He specialises in patient acquisition funnels, Google Business optimisation, and building marketing systems that deliver measurable ROI — not vanity metrics.',
    image: '/jeremy.png',
    linkedin: 'https://www.linkedin.com/in/jeremy-ciaora/',
    specialties: ['Growth Strategy', 'Digital Marketing', 'Patient Acquisition'],
  },
];

const values = [
  {
    title: 'We Implement, Not Just Advise',
    description:
      'Every system we build is tracked, measured, and optimised for real results. We do the heavy lifting so you can focus on patients.',
  },
  {
    title: 'Results in 90 Days or Less',
    description:
      'Not 6–18 months like traditional consultants. We deliver measurable improvements fast — because your practice can\'t wait.',
  },
  {
    title: 'Your Practice, Your Way',
    description:
      'Every practice is unique. We build custom solutions tailored to your specific needs, team dynamics, and growth goals.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF4EC]">
      <div className="container mx-auto py-16 px-4">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-8xl font-bold text-[#0A3D91] mb-6">
            About Consuldent
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
            We help dental practices grow through smarter systems, better
            technology, and trained teams. Results in 90 days or less.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0A3D91] mb-6">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 text-lg mb-4">
                You went to dental school to be a great dentist. Nobody taught
                you how to run a business.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Every day, brilliant dentists leave thousands of dollars on the
                table because their systems are broken. Phone calls go
                unanswered. Patients don&apos;t book. Staff burns out. Sound
                familiar?
              </p>
              <p className="text-gray-600 text-lg">
                That&apos;s where we come in. Consuldent was founded on a simple
                belief: great dentistry shouldn&apos;t mean complicated business.
              </p>
            </div>
            <div>
              <p className="text-gray-600 text-lg mb-4">
                We combine AI-powered consulting with hands-on implementation to
                transform your practice. Not in 12–18 months — but in 90 days
                or less.
              </p>
              <p className="text-gray-600 text-lg">
                Our team has been in your shoes. We&apos;ve worked with dental
                practices across Australia and seen what works. Now we implement
                systems that actually stick.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#0A3D91] mb-8">
            Why Consuldent?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <FaCheckCircle className="w-8 h-8 text-[#10B981] mb-4" />
                <h3 className="text-xl font-bold text-[#0A3D91] mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-2">
          <h2 className="text-3xl font-bold text-[#0A3D91] mb-8">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-[#0A3D91] group-hover:border-[#00C4CC] transition-colors duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#0A3D91] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-[#00C4CC] mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4 max-w-xs">
                  {member.bio}
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="text-xs bg-[#0A3D91]/10 text-[#0A3D91] px-2 py-1 rounded-full"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0A3D91] text-white p-2 rounded-full hover:bg-[#0A3D91]/90 transition-colors"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
