import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Server, Bot, Cloud, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Tech & AI for Dental Practices | Consuldent",
  description: "Modernise your dental practice with PMS optimisation, AI chatbots, automation, and cloud solutions. Implementation that actually works.",
  openGraph: {
    title: "Tech & AI for Dental Practices | Consuldent",
    description: "Modernise your dental practice with PMS optimisation, AI chatbots, automation, and cloud solutions.",
    url: "https://consuldent.com.au/services/tech-ai",
  },
};

export default function TechAIPage() {
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
            <div className="inline-flex items-center gap-2 bg-[#0A3D91] text-white px-4 py-2 rounded-full mb-6">
              <Server className="w-5 h-5" />
              <span className="font-semibold">Tech & AI</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-[#0A3D91] mb-6">
              Modernise Your Practice Systems
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Transform your dental practice with cutting-edge technology. From PMS optimisation to AI chatbots, we implement systems that save time and reduce costs.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#10B981]" />
                <span className="text-gray-700">Practice Management System (PMS) Optimisation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#10B981]" />
                <span className="text-gray-700">AI Chatbots for Patient Inquiries</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#10B981]" />
                <span className="text-gray-700">Automated Recall Systems</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#10B981]" />
                <span className="text-gray-700">Cloud Migration & Security</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-[#10B981]" />
                <span className="text-gray-700">Workflow Automation</span>
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
            <h2 className="text-2xl font-bold text-[#0A3D91] mb-6">Why Tech Matters</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-[#0A3D91]/10 p-3 rounded-xl h-fit">
                  <Bot className="w-6 h-6 text-[#0A3D91]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A3D91] mb-2">AI-Powered Patient Communication</h3>
                  <p className="text-gray-600 text-sm">
                    24/7 patient inquiry handling with intelligent chatbots that book appointments, answer questions, and nurture leads while you sleep.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#10B981]/10 p-3 rounded-xl h-fit">
                  <Server className="w-6 h-6 text-[#10B981]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A3D91] mb-2">PMS Optimisation</h3>
                  <p className="text-gray-600 text-sm">
                    Unlock the full potential of your practice management software. We configure templates, automate workflows, and eliminate manual processes.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#00C4CC]/10 p-3 rounded-xl h-fit">
                  <Cloud className="w-6 h-6 text-[#00C4CC]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0A3D91] mb-2">Cloud & Security</h3>
                  <p className="text-gray-600 text-sm">
                    Secure, accessible practice data from anywhere. We implement HIPAA-compliant cloud solutions with robust backup and security protocols.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-[#0A3D91] rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-6">Ready to modernise your practice?</h2>
          <p className="text-xl mb-8 opacity-90">
            See measurable improvements in your practice operations within 90 days.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#00C4CC] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#00C4CC]/90 transition-colors"
          >
            Start Your Transformation <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}