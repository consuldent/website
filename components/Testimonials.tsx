import { Quote } from "lucide-react";

/**
 * Client proof section.
 *
 * RULES (why this component exists in this shape):
 *
 * 1. Only quotes from real engagements, with permission, go in
 *    `lib/testimonials.ts`. No invented names, no stock photos, no AI faces.
 *    AHPRA s.133 (testimonials in advertising of regulated health services)
 *    and Australian Consumer Law s.18 both apply to this site.
 * 2. Photos: real people, photographed by us or with written permission. Match
 *    the photo to the person quoted - never a stand-in "matching ethnicity".
 * 3. If the array below is empty, this section renders nothing. An absent
 *    section converts better than a section visitors think is fake.
 *
 * To add the first real quote: add it to lib/testimonials.ts, drop the photo
 * in /public/testimonials/, and mount <Testimonials /> on the homepage where
 * social proof should appear. Nothing else is needed.
 */
import { testimonials, type Testimonial } from "@/lib/testimonials";

const Testimonials = () => {
  if (testimonials.length === 0) return null;

  return (
    <section className="container mx-auto py-20 md:py-28 px-4">
      <div className="max-w-2xl mb-14">
        <p className="eyebrow mb-4">In their words</p>
        <span className="accent-rule mb-6" />
        <h2 className="font-display text-4xl md:text-5xl font-medium text-ink">
          What practices who we&apos;ve worked with say.
        </h2>
        <p className="text-muted mt-4 leading-relaxed">
          Real feedback from real engagements, shared with permission.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t: Testimonial) => (
          <figure
            key={t.id}
            className="bg-paper border border-line border-t-4 border-t-accent/80 rounded-2xl p-8 flex flex-col"
          >
            <Quote
              className="w-7 h-7 text-accent/40 mb-4"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <blockquote className="text-ink-soft leading-relaxed flex-1">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-line flex items-center gap-4">
              {t.photo && (
                // next/image here once the first real photo lands:
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={t.photo}
                  alt={t.showAsName}
                  width={52}
                  height={52}
                  className="w-13 h-13 rounded-full object-cover border border-line shrink-0"
                />
              )}
              <span>
                <span className="font-display text-lg font-medium text-ink block leading-tight">
                  {t.showAsName}
                </span>
                <span className="text-sm text-muted mt-0.5 block">
                  {t.showAsRole}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
