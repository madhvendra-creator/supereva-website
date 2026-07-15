# Supereva Technology — Website

The marketing site for Supereva Technology Private Limited, built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Base UI.

## Tech stack

- **Framework**: Next.js 16 (App Router, React Server Components)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **UI primitives**: Base UI (`@base-ui/react`) — Button, Input, Accordion, Drawer
- **Icons**: lucide-react
- **Forms**: react-hook-form + zod
- **Animation**: framer-motion (`LazyMotion` + `domAnimation` for a smaller bundle)
- **Theming**: next-themes (light/dark)
- **Toasts**: sonner

## Getting started

```bash
npm install
cp .env.example .env.local   # then edit NEXT_PUBLIC_SITE_URL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes, before production | Canonical production URL (no trailing slash). Drives `metadataBase`, canonical tags, `sitemap.xml`, `robots.txt`, Open Graph images, and JSON-LD. Falls back to a placeholder domain if unset — **must be set in Vercel's project settings** before going live. |

## Project structure

```
app/                  Routes (App Router). Each route composes reusable
                       section components with content from constants/.
components/
  ui/                  Design-system primitives (Button, Input, Skeleton, ...)
  layout/              Navbar, Footer, Container, Section, PageHero
  sections/            Homepage sections (Hero, Services, Differentiators, ...)
  services/ portfolio/ blog/ company/
                       Section components specific to each content type
constants/
  services/ case-studies/ blog/
                       One file per service / case study / article, plus an
                       index.ts aggregator (array + getXBySlug + slugs)
  site.ts              Site-wide config: nav, footer links, social links
  company.ts            Mission/vision/values/timeline/leadership content
lib/
  metadata.ts          constructMetadata() — canonical SEO helper used by every page
  schema.ts            JSON-LD builders (Organization, Service, Article, Breadcrumb, ...)
  og-image.tsx         Shared renderer for dynamically-generated OG images
types/                 Shared TypeScript types, re-exported via types/index.ts
```

Services, case studies, and blog posts are each driven by a single content
file per item plus a `[slug]` dynamic route — adding a new one means adding
a content file and one line to its index, not a new page.

## Content notes

Some content is intentionally a placeholder pending real company data —
each is marked clearly in the UI rather than fabricated:

- **Leadership** (`/company/leadership`): role titles are real, names show
  "Name to be announced" until provided.
- **Company statistics, Awards, Certifications** (`/company/about`,
  `/company`): shown as honest "coming soon" states.
- **Office address** (`/contact`): placeholder until a real location exists;
  the LocalBusiness JSON-LD omits the address block entirely rather than
  inventing one.
- **Portfolio case studies**: anonymized client descriptors (e.g. "A Series B
  fintech lender") — standard practice for confidential engagements, not
  literal client names.
- **Contact form** (`app/api/contact/route.ts`): validates and logs
  submissions server-side; no email/CRM delivery is wired up yet. Wire in a
  provider (e.g. Resend) before relying on this in production.

Search `constants/site.ts` for the placeholder domain and social links and
update them with real values.

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # serve the production build locally
npm run lint     # eslint
```

## Deploying to Vercel

This is a zero-config Next.js app — connect the repository in Vercel and it
will detect the framework automatically. Before the first production deploy:

1. Set `NEXT_PUBLIC_SITE_URL` in the Vercel project's environment variables.
2. Update the placeholder domain/social links in `constants/site.ts`.
3. Wire up real contact-form delivery (see above).
