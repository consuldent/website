import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, GraduationCap, Users, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Dental Team Training | Consuldent",
  description: "Build a team that delivers. Virtual and on-site training for front desk, practice managers, nurses, and dentists.",
  openGraph: {
    title: "Dental Team Training | Consuldent",
    description: "Build a team that delivers. Virtual and on-site training for every role in your dental practice.",
    url: "https://consuldent.com.au/services/training",
  },
};

export default function TrainingPage() {
  return (
    <main className="bg-[#F5F0E8]">
      <div className="container mx-auto py-16 px-4">
        <div className="mb-12">
          <Link href="/services" className="text-[#102032] font-semibold hover:underline">
            ← Back to Services
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#6E2230] text-black px-4 py-2 rounded-full mb-6">
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold">Training</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#102032] mb-6">
              Your Team, Finally Performing
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Build a team that delivers. Virtual and on-site training for every role in your dental practice.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#6E2230]" />
                <span className="text-gray-700">Front Desk Training</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#6E2230]" />
                <span className="text-gray-700">Practice Manager Training</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#6E2230]" />
                <span className="text-gray-700">Clinical Team Training</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#6E2230]" />
                <span className="text-gray-700">Leadership Development</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#6E2230]" />
                <span className="text-gray-700">Custom Training Programs</span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#102032] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#102032]/90 transition-colors"
            >
              Book Free Consultation <ArrowRight className="w-6 h-6" />
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-[#102032] mb-6">Training That Transforms</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-[#6E2230]/10 p-3 rounded-xl h-fit">
                  <Users className="w-6 h-6 text-[#6E2230]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#102032] mb-2">Front Desk Mastery</h3>
                  <p className="text-gray-600 text-sm">
                    Your front desk is the face of your practice. We train them to convert calls, handle objections, and create memorable patient experiences.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#6E2230]/10 p-3 rounded-xl h-fit">
                  <Briefcase className="w-6 h-6 text-[#6E2230]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#102032] mb-2">Practice Manager Excellence</h3>
                  <p className="text-gray-600 text-sm">
                    Empower your PM to run the practice efficiently. From roster management to financial reporting, we build operational leaders.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#102032]/10 p-3 rounded-xl h-fit">
                  <GraduationCap className="w-6 h-6 text-[#102032]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#102032] mb-2">Clinical Team Development</h3>
                  <p className="text-gray-600 text-sm">
                    Streamline clinical workflows, improve chairside efficiency, and create a culture of continuous improvement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[#6E2230] rounded-3xl p-8 md:p-12 text-black">
          <h2 className="text-3xl font-bold mb-6">Level up your entire team</h2>
          <p className="text-xl mb-8 opacity-80">
            Invest in your people. Watch productivity, morale, and patient satisfaction all improve together.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#102032] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#102032]/90 transition-colors"
          >
            Start Your Transformation <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}