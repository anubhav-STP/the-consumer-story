@AGENTS.md

# The Consumer Story — theconsumerstory.com

## Overview
An independent consumer advocacy portal documenting real cases of corporate misconduct, unethical business practices, and consumer court orders. Built with Next.js 16, TypeScript, Tailwind CSS. Hosted on Vercel with Turso DB.

## Tech Stack
- **Framework:** Next.js 16.2.2 (App Router, TypeScript, Tailwind CSS v4)
- **Database:** Turso (libsql) — `consumer-story` database
- **Email:** Resend API (sends submission notifications to editor@theconsumerstory.com)
- **Hosting:** Vercel (auto-deploy via GitHub Actions deploy hook)
- **Domain:** theconsumerstory.com (DNS on GoDaddy, pointed to Vercel)

## Repository
- **GitHub:** https://github.com/anubhav-STP/the-consumer-story
- **Vercel Project:** the-consumer-story (scope: anubhav-stps-projects)
- **Vercel Project ID:** prj_TqwDMTFmd5Yboo2knsQt1qLimA1L

## Deployment
- Push to `main` → GitHub Actions triggers Vercel deploy hook
- Deploy hook secret stored in GitHub repo secret `VERCEL_DEPLOY_HOOK`
- Manual deploy: `npx vercel --yes --prod`

## Environment Variables (Vercel Production)
- `TURSO_DATABASE_URL` — libsql://consumer-story-anubhav-stp.aws-eu-west-1.turso.io
- `TURSO_AUTH_TOKEN` — Turso database auth token
- `RESEND_API_KEY` — Resend email API key (domain verified: theconsumerstory.com)

## Database Schema (Turso)

### `submissions` table
Stores user-submitted consumer stories from the /submit form.

| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Auto-increment PK |
| name | TEXT | Submitter name (confidential) |
| email | TEXT | Submitter email |
| country | TEXT | IN, US, UK, other |
| company | TEXT | Company being reported |
| category | TEXT | Category of complaint |
| story | TEXT | Full story text |
| complaint | TEXT | Court/agency complaint details (optional) |
| status | TEXT | pending/reviewed/published/rejected |
| created_at | DATETIME | Auto timestamp |
| reviewed_at | DATETIME | When editor reviewed |
| notes | TEXT | Editor notes |

### `companies` table
Company names for the autocomplete dropdown, organized by region. New companies entered by users via "Other" get added automatically.

| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Auto-increment PK |
| name | TEXT | Company name |
| region | TEXT | IN, US, UK |
| added_by | TEXT | 'system' or 'user' |
| created_at | DATETIME | Auto timestamp |
| UNIQUE | | (name, region) |

~705 companies seeded (India 350+, US 200+, UK 150+).

## Project Structure

```
src/
  app/
    layout.tsx          — Root layout (header + footer)
    page.tsx            — Homepage (hero, featured cases, latest stories, CTA)
    globals.css         — Tailwind imports + theme
    cases/
      page.tsx          — All cases listing with search/filter
      [slug]/page.tsx   — Individual case detail page
    country/
      [country]/page.tsx — Region-filtered cases (IN/US/UK)
    know-your-rights/
      page.tsx          — Complaint filing guides per country
    about/page.tsx      — About page
    submit/page.tsx     — Story submission form (client component)
    api/
      submit/route.ts   — POST: validates, saves to Turso, sends email via Resend
      companies/route.ts — GET: fetches companies by region from Turso
  components/
    Header.tsx          — Sticky nav (Home, All Cases, Know Your Rights, About, Share Your Story)
    Footer.tsx          — Brand, quick links, copyright
    CaseCard.tsx        — Case preview card (category, status, title, summary, amount)
    SearchFilter.tsx    — Region pills + search + category/status dropdowns
  data/
    cases.ts            — 48 case objects + sort order + helper functions
    companies.ts        — Hardcoded company lists (legacy, DB is now primary source)
  lib/
    db.ts               — Turso client (lazy init) + initDb() for table creation
```

## Cases Data
- 48 documented cases: India (18), US (15), UK (15)
- Each case has: slug, title, company, country, category, year, amount, agency, status, summary, fullStory, courtOrder, outcome, consumerImpact, sources, lastUpdated
- Cases sorted by impact (India-heavy at top) via `sortedCases` in cases.ts
- Featured cases marked with `featured: true`
- Sources include verified URLs to FTC, CFPB, DOJ, FCA, Ofcom, CMA, NCDRC, LiveLaw, Business Standard, etc.

## Submit Form Features
- Email validation (blocks 20+ disposable email domains)
- Country-based company autocomplete from Turso DB
- "Other" option for companies not in the list (auto-added to DB for future users)
- Rate limiting: 3 submissions per email per hour
- Saves to Turso DB, then sends notification email to editor@theconsumerstory.com
- No confirmation email sent to submitter (removed by design)
- Green success screen on completion

## Legal Considerations
- All category labels are neutral (no "fraud" — use "Banking", "Ed-Tech", "Real Estate", etc.)
- Titles use factual attribution ("found to have", "according to regulators", "alleged")
- "corporate fraud" replaced with "corporate misconduct" site-wide
- Words avoided: fraud (in categories/accusations), cheat, scam, predatory, illegitimate, stole
- OK to use these words when quoting court findings or regulatory determinations
- All case content is based on publicly available court records, regulatory filings, and verified reports

## Branding
- Name: The Consumer Story
- Domain: theconsumerstory.com
- Tagline: "They took your money. We tell the story."
- Voice: "The united voice of consumers who refuse to be silenced."
- Logo: Red shield with "TCS" (favicon)
- No country-specific branding on homepage (region pills on cases page for filtering)

## DNS (GoDaddy)
- A record `@` → 76.76.21.21 (Vercel)
- CNAME `www` → cname.vercel-dns.com (Vercel)
- MX `@` → Outlook (Microsoft 365 email)
- TXT `resend._domainkey` → DKIM for Resend
- MX `send` → Resend (amazonses)
- TXT `send` → SPF for Resend
- All Microsoft 365 records (autodiscover, email, lyncdiscover, msoid, sip, DMARC, SRV) remain untouched
