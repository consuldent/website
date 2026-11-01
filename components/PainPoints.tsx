import { ArrowRight } from "lucide-react";
import Link from "next/link";

const leaks = [
  {
    number: "01",
    title: "The phone rings out",
    body: "A call at 9:15 that hits voicemail isn't a missed call. It's a patient booking with the practice down the road.",
  },
  {
    number: "02",
    title: "Quotes that go nowhere",
    body: "A treatment plan presented once, never followed up, is revenue you already earned the right to.",
  },
  {
    number: "03",
    title: "The recall list nobody works",
    body: "Hundreds of patients overdue, and nobody with the time, the list or the script to call them.",
  },
  {
    number: "04",
    title: "A front desk guessing",
    body: "No standard for how a new enquiry is handled, so every team member handles it differently.",
  },
];

const PainPoints = () => {
  return (
    <section id="leaks" className="bg-ink scroll-mt-24">
      <div className="container mx-auto py-20 md:py-28 px-4">
        <div className="max-w-3xl">
          <p className="eyebrow !text-accent-soft mb-4">The quiet leak</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium text-bone leading-[1.08]">
            Most practices lose more patients to
            <span className="italic text-accent-soft"> admin</span> than to
            competition.
          </h2>
          <p className="text-lg text-bone/65 mt-5 leading-relaxed">
            Owners can feel it. Almost none can point to the number. These are
            the four places it usually hides.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-bone/15 mt-14 rounded-2xl overflow-hidden">
          {leaks.map((leak) => (
            <div key={leak.number} className="bg-ink p-7 md:p-8">
              <span className="font-display text-sm text-accent-soft">
                {leak.number}
              </span>
              <h3 className="font-display text-xl md:text-2xl font-medium text-bone mt-4">
                {leak.title}
              </h3>
              <p className="text-sm text-bone/60 leading-relaxed mt-3">
                {leak.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-5">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-bone text-ink px-7 py-3.5 rounded-full font-medium hover:bg-white transition-colors"
          >
            Find out what it&apos;s costing you
            <ArrowRight className="w-4 h-4" />
          </Link>
          <p className="text-sm text-bone/55">
            We measure it before we recommend anything.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
