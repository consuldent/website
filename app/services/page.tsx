import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Consuldent",
  description:
    "Dental practice consulting services: Tech & AI, Customer Experience, and Training. PMS optimisation, AI chatbots, phone scripts, team training. Results in 90 days.",
  openGraph: {
    title: "Services - Consuldent",
    description:
      "Dental practice consulting services: Tech & AI, Customer Experience, and Training. Results in 90 days.",
    url: "https://consuldent.com.au/services",
  },
};

const services = [
  {
    id: 1,
    title: "Tech & AI",
    description: "Transform your dental practice with cutting-edge technology. From PMS optimisation to AI chatbots, we implement systems that save time and reduce costs.",
    features: [
      "Practice Management System (PMS) Optimisation",
      "Website & Marketing Audit",
      "AI Chatbots for Patient Inquiries",
      "Automated Recall Systems",
      "Cloud Migration & Security",
      "Workflow Automation",
    ],
    color: "#0A3D91",
  },
  {
    id: 2,
    title: "📞 Customer Experience",
    description: "Create exceptional patient journeys. We design the systems that turn first-time visitors into loyal patients who refer others.",
    features: [
      "Phone Script Development",
      "Patient Onboarding Systems",
      "Treatment Presentation Frameworks",
      "Google Business Optimisation",
      "Review & Referral Programs",
    ],
    color: "#10B981",
  },
  {
    id: 3,
    title: "📚 Training",
    description: "Build a team that delivers. Virtual and on-site training for every role in your dental practice.",
    features: [
      "Front Desk Training",
      "Practice Manager Training",
      "Clinical Team Training",
      "Leadership Development",
      "Custom Training Programs",
    ],
    color: "#00C4CC",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#FAF4EC]">
      <div className="container mx-auto py-16 px-4">
        {/* Header */}
        <div className="mb-16">
<h1 className="text-5xl md:text-8xl font-bold text-[#0A3D91] mb-6">
            Dental Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl">
            Everything your dental practice needs to grow — from technology implementation to team training.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="rounded-3xl p-8 lg:p-12"
              style={{ backgroundColor: service.color }}
            >
              <div className="lg:flex gap-12">
                <div className="lg:w-1/3 mb-8 lg:mb-0">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="lg:w-2/3">
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white">
                        <CheckCircle className="w-6 h-6 mt-0.5 flex-shrink-0" />
                        <span className="text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mt-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0A3D91] mb-8">
            Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[#0A3D91] mb-2">Audit</h3>
              <div className="text-4xl font-bold text-[#0A3D91] mb-4">$2,500</div>
              <p className="text-gray-600 mb-6">Comprehensive analysis of your practice with actionable recommendations.</p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#0A3D91] text-white p-3 rounded-xl font-semibold"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#10B981]">
              <div className="bg-[#10B981] text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Most Popular</div>
              <h3 className="text-xl font-bold text-[#0A3D91] mb-2">Transformation</h3>
              <div className="text-4xl font-bold text-[#0A3D91] mb-4">$12,000</div>
              <p className="text-gray-600 mb-6">6-month comprehensive engagement with implementation and training.</p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#10B981] text-white p-3 rounded-xl font-semibold"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-[#0A3D91] mb-2">Scale & Optimise</h3>
              <div className="text-4xl font-bold text-[#0A3D91] mb-4">$25,000</div>
              <p className="text-gray-600 mb-6">12-month partnership for sustained growth and optimisation.</p>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 bg-[#0A3D91] text-white p-3 rounded-xl font-semibold"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <p className="text-xl text-gray-700 mb-6">Not sure where to start? Let's talk about your practice.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0A3D91] text-white px-8 py-4 rounded-xl font-semibold text-lg"
          >
            Book a Free Call <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}