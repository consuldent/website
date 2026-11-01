import type { Metadata } from "next";

import Content from "@/components/Content";
import Expertise from "@/components/Expertise";
import Founder from "@/components/Founder";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MarqueeText from "@/components/MarqueeText";
import PainPoints from "@/components/PainPoints";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <MarqueeText text="Practice Growth · AI Systems · Team Training · Patient Experience · Measurable Results" speed={40} />
      <PainPoints />
      <HowItWorks />
      <Expertise />
      <Founder />
      <Content />
    </div>
  );
}
