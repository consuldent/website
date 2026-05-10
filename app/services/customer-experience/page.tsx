import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Users, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Experience for Dental Practices | Consuldent",
  description: "Create exceptional patient journeys. Phone scripts, patient onboarding, treatment presentation, recall systems, and Google Business optimisation.",
  openGraph: {
    title: "Customer Experience for Dental Practices | Consuldent",
    description: "Create exceptional patient journeys. Turn first-time visitors into loyal patients who refer others.",
    url: "https://consuldent.com.au/services/customer-experience",
  },
};

export default function CustomerExperiencePage() {
  return (
    <main className="bg-[#FAF4EC]">
      <div className="container mx-auto py-16 px-4">
        <div className="mb-12">
          <Link href="/services" className="text-[#0A3D91] font-semibold hover:underline">
            ← Back to Services
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#10B981] text-white px-4 py-2 rounded-full mb-6">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Customer Experience</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0A3D91] mb-6">
              Convert More, Lose Less
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Create exceptional patient journeys. We design the systems that turn first-time visitors into loyal patients who refer others.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#10B981]" />
                <span className="text-gray-700">Phone Script Development</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#10B981]" />
                <span className="text-gray-700">Patient Onboarding Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#10B981]" />
                <span className="text-gray-700">Treatment Presentation Frameworks</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#10B981]" />
                <span className="text-gray-700">Google Business Optimisation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#10B981]" />
                <span className="text-gray-700">Review & Referral Programs</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0A3D91] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#0A3D91]/90 transition-colors"
            >
              Book Free Consultation <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-6">Patient Experience Mastery</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-[#10B981]/10 p-3 rounded-xl h-fit">
                  <Phone className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A3D91] mb-2">Phone Excellence</h3>
                  <p className="text-gray-600 text-sm">
                    Every phone call is an opportunity. We develop scripts that convert inquiries into appointments at higher rates.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#0A3D91]/10 p-3 rounded-xl h-fit">
                  <Users className="w-6 h-6 text-[#0A3D91]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A3D91] mb-2">Seamless Onboarding</h3>
                  <p className="text-gray-600 text-sm">
                    First impressions matter. Create a patient journey that wows from first contact through first visit and beyond.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#00C4CC]/10 p-3 rounded-xl h-fit">
                  <Star className="w-6 h-6 text-[#00C4CC]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A3D91] mb-2">Reviews & Referrals</h3>
                  <p className="text-gray-600 text-sm">
                    Build your online reputation systematically. Turn happy patients into your biggest marketing asset.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[#10B981] rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Elevate the patient experience</h2>
          <p className="text-xl mb-8 opacity-90">
            Turn one-time visitors into lifelong patients who refer their friends and family.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#10B981] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/90 transition-colors"
          >
            Start Your Transformation <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}