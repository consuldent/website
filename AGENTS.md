# AGENTS.md - Consuldent Website

## Project Context

Consuldent dental practice consulting website. Static site, deployed on Vercel. Homepage + About page.

## Brand Guidelines

- **Name:** Consuldent
- **Tagline:** Where Practices Grow
- **Colors:** Primary #0A3D91 (blue), Accent #00C4CC (teal), Success #10B981 (green)
- **Fonts:** Inter (body), bold weights for headings

## Services (3 Scopes)

1. Tech & AI - PMS, chatbots, automation, cloud, security
2. Customer Experience - Phone scripts, onboarding, recall, Google Business
3. Training - Front desk, PM, nurses, dentists. Virtual + on-site

## Routes

- `/` - Homepage (Hero, Expertise, Content, Brands, Footer)
- `/about` - About page (Banner, Services, MissionVision, Logos, Testimonials, Team, Works)

## TODO (Your Items)

### Immediate
- [ ] Add team photos (Dr. Vrinda, Dhruv) to /public/team/
- [ ] Rebrand lib/constant.ts data (testimonials, team members, services) → Consuldent content
- [ ] Add real client case studies
- [ ] Add pricing details section
- [ ] Add founder bios (Dr. Vrinda, Dhruv)
- [ ] Set up contact form (static site - consider Netlify Forms or Formspree)

### Later
- [ ] Deploy to Vercel
- [ ] Add custom domain (consuldent.com.au)
- [ ] Set up social media accounts (links commented in Footer.tsx)
- [ ] Add Three.js hero section (per design brief)

## Contact Info
- Email: vrinda@consuldent.com.au
- Location: Melbourne, VIC
- Service Area: VIC primary, NSW/QLD secondary

## Tech Stack
- Next.js 16 (App Router)
- React 19
- Tailwind CSS v4
- GSAP + ScrollTrigger
- TypeScript
- Deployed on Vercel

## Issues to Check
- About page: Ensure Navbar/Footer layout applies correctly
- Colors: Verify all components use brand colors (#0A3D91, #00C4CC, #10B981)
- Images: Some external images from cloudinary may need fixing