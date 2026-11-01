/**
 * Testimonial data - the ONLY place this section pulls from.
 *
 * Add an entry here once you have BOTH:
 *   1. a real quote from a real engagement, and
 *   2. written permission from that person to display it.
 *
 * Fields
 * ------
 * id          unique
 * quote       what they actually said (light editing of filler words is
 *             fine; do not change meaning)
 * showAsName  how to display them: full name if they agreed to it, otherwise
 *             "Sarah, practice manager" - never an invented name
 * showAsRole  their actual role + what is safe to disclose about the
 *             practice ("Owner, 4-chair practice")
 * photo       "/public/testimonials/<file>" (or omit the photo entirely -
 *             the card works without one). Only use a photo of the actual
 *             person quoted, with the same permission.
 * consentAt   date of written consent (for your records)
 *
 * Nothing renders while the array is empty - see components/Testimonials.tsx.
 */
type Testimonial = {
  id: number;
  quote: string;
  showAsName: string;
  showAsRole: string;
  photo?: string;
  consentAt?: string;
};

export type { Testimonial };

export const testimonials: Testimonial[] = [
  // Example shape - delete this comment and fill in real entries:
  // {
  //   id: 1,
  //   quote: "We recovered ... .",
  //   showAsName: "Sarah, practice manager",
  //   showAsRole: "4-chair practice, outer east",
  //   photo: "/testimonials/sarah.jpg",
  //   consentAt: "2026-11-05",
  // },
];
