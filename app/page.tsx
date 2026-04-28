import Content from "@/components/Content";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import MarqueeText from "@/components/MarqueeText";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <MarqueeText text="Practice Growth · AI Systems · Team Training · Patient Experience · Measurable Results" />
      <Expertise />
      <Stats />
      <Content />
      <Testimonials />
    </div>
  );
}
