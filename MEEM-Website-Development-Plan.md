# MEEM Creative Group — Website Development Plan

**Prepared from:** MEEM Creative Group company profile
**Scope:** Strategy, information architecture, visual identity, technology stack, and delivery roadmap for a new bilingual (Arabic/English) website.

A quick note on that last point before anything else: MEEM's own profile is written in full English and Arabic side by side. That isn't a footnote — it's the single detail that should shape almost every decision below, from the CMS you pick to how the homepage is laid out. This plan treats bilingual, RTL-native design as a first-class requirement throughout, not a checkbox added at the end.

---

## Table of contents

1. [Executive summary](#1-executive-summary)
2. [Brand foundation](#2-brand-foundation)
3. [Strategic goals for the website](#3-strategic-goals-for-the-website)
4. [Target audience](#4-target-audience)
5. [Information architecture & sitemap](#5-information-architecture--sitemap)
6. [Visual identity & design system](#6-visual-identity--design-system)
7. [Bilingual (Arabic/English) strategy](#7-bilingual-arabicenglish-strategy)
8. [Technology stack](#8-technology-stack)
9. [Key features & functionality](#9-key-features--functionality)
10. [Content strategy](#10-content-strategy)
11. [SEO, performance & accessibility](#11-seo-performance--accessibility)
12. [Development roadmap](#12-development-roadmap)
13. [Team & resources](#13-team--resources)
14. [Next steps](#14-next-steps)

---

## 1. Executive summary

MEEM Creative Group is a three-division creative business (**Creative**, **Studios**, **Events**) positioned as a strategic partner rather than a pure vendor — the profile is explicit about this: "we don't just create campaigns—we build brands, shape experiences, and create opportunities for sustainable growth." The website has to carry that same weight. It's not a digital business card; it's the first proof point of the quality MEEM sells.

**What this plan recommends, in brief:**

- A **Next.js (App Router) + TypeScript** front end, paired with a **headless CMS with native localization** (Sanity or Payload) so Arabic and English are equal citizens in the content model, not a translation bolted onto an English site.
- A **visual identity system built outward from the existing logo** — the exact navy pulled from your file, a small deliberate supporting palette, and the Cairo typeface, which was designed for Arabic and Latin as one family and echoes the geometric character of the mark.
- An **information architecture built around the three divisions** (Creative / Studios / Events) as the primary way visitors navigate, with a unified portfolio and industries layer cutting across all three.
- A **six-phase delivery roadmap** that deliberately mirrors MEEM's own stated process — Discover → Think → Create → Execute → Measure → Grow — so the way the site gets built demonstrates the same methodology the agency sells to clients.
- A rough **10–16 week timeline** for a full build, broken down by phase in Section 12.

One scoping note: a search for MEEM Creative Group's existing web presence didn't surface a live site matching this profile (there are several unrelated agencies using "Meem" in Egypt and the Gulf — this plan is specific to the brand in your uploaded profile). Everything here assumes a from-scratch build; if a site already exists, this doc works equally well as a redesign brief.

---

## 2. Brand foundation

### The mark

Pulling the logo directly from your profile PDF and sampling it confirms a single, consistent brand color:

| Element | Value |
|---|---|
| Primary mark color | `#00215C` (deep navy) |
| Construction | A rounded-square icon where negative space forms a droplet — which simultaneously reads as the Arabic letter **م (Meem)** and a Latin **M**. The wordmark "MEEM" uses blocky, geometric letterforms with a distinctive stacked-bar treatment on the E's. |
| Tagline | "Create • Connect • Inspire • Impact" |
| Sub-brand | "Creative Group," set in wide letter-spacing beneath the wordmark |

That triple-meaning icon (droplet / م / M) is genuinely unusual and is the single most ownable visual asset MEEM has. Section 6 builds the website's signature interaction directly around it.

### Positioning, in MEEM's own words

The profile repeatedly draws the same line: creativity is a tool for business outcomes, not decoration. A few statements worth treating as design and copy constraints, not just marketing lines:

- "Great brands are never built by chance. They are built through vision, strategy, creativity, and the courage to think differently."
- "We don't believe in one-size-fits-all solutions."
- "We don't measure success by the number of projects we complete, but by the value we create."
- "We don't chase trends. We build brands that stand the test of time."

That last line matters for Section 6 specifically — it argues against chasing the most fashionable web-design trend of the moment in favor of a system that will still look considered in three years.

### What's missing (flag for the team)

The profile gives strategy and voice but no formal brand guidelines file, no photography library, and no secondary/extended color palette beyond the single navy. Before design work starts, confirm whether a brand guidelines document exists anywhere else — if not, Section 6 proposes an extended system derived from the existing mark.

---

## 3. Strategic goals for the website

Translating MEEM's business model into web goals:

- **Generate qualified leads** across a wide industry base (real estate, healthcare, education, retail, restaurants, NGOs, government, manufacturing, personal brands, startups) — the site needs credibility signals that work for a government procurement officer and a startup founder alike.
- **Demonstrate range across three divisions** without fragmenting the brand — a visitor should leave understanding Creative, Studios, and Events are one coordinated capability, not three separate vendors.
- **Showcase actual work.** For a creative agency, the portfolio *is* the pitch. This is the section worth the most design and engineering investment.
- **Serve as production input**, not just output — since MEEM Studios does photography/videography in-house, the site itself is a chance to prove that capability through its own imagery.
- **Support a bilingual market** natively, reaching both Arabic-first and English-first decision-makers without either feeling like the "translated" version.

**Suggested success metrics:** contact/brief form submissions by division, portfolio case study engagement (scroll depth, time on page), Arabic vs. English traffic split and bounce-rate parity between them, and Core Web Vitals scores (targets in Section 11).

---

## 4. Target audience

| Segment | Who | What they need from the site |
|---|---|---|
| Primary decision-makers | Marketing directors, business owners, brand managers across the industries MEEM serves | Fast proof of relevant experience, clear service scope, easy way to start a conversation |
| Public sector / enterprise | Government, healthcare, education buyers | Credibility signals, professionalism, clear company information — this audience is more risk-averse than a startup founder, which has direct design implications (see Section 6) |
| Event organizers / brand teams | Companies planning conferences, exhibitions, activations | Visual proof of production quality (Studios) and past event execution |
| Talent & partners | Prospective hires, potential collaborators | Culture and process visibility (the "Our Process" and "What We Believe" content) |

---

## 5. Information architecture & sitemap

The three divisions are strong enough to be the primary navigation, with a unifying portfolio and industries layer that lets visitors browse by *what they need* instead of forcing them to know which division owns it first.

| Page | Purpose | Key content |
|---|---|---|
| **Home** | First impression, division overview, proof points | Hero (see Section 6), division summary cards, featured work, industries served, process teaser, primary CTA |
| **About** | Trust and story | Who We Are, What We Believe, Vision & Mission, Why MEEM — largely adaptable from the existing profile copy |
| **MEEM Creative** (hub) | Division landing page | Marketing, Branding, Advertising, Communication — sub-sections or anchored scroll sections per service |
| **MEEM Studios** (hub) | Division landing page | Photography, Videography, Production — should lean heavily on video/motion given the subject matter |
| **MEEM Events** (hub) | Division landing page | Corporate Events, Exhibitions, Conferences, Brand Activations |
| **Our process** | Methodology, builds trust before the ask | Discover → Think → Create → Execute → Measure → Grow, as an interactive scroll sequence |
| **Work / Portfolio** | The actual proof | Filterable by division *and* by industry; individual case study pages with outcomes, not just visuals |
| **Industries** | Cross-cutting relevance | Either a dedicated page per industry or (recommended to start) filter tags on the portfolio — cheaper to maintain and avoids ten thin pages |
| **Insights** *(optional, phase 2)* | SEO and authority | Short articles/POVs — valuable for organic search but only worth building once there's a content owner committed to it |
| **Careers** *(optional)* | Talent pipeline | Only include if actively hiring; a stale careers page hurts more than no page |
| **Contact** | Conversion | Contact form (ideally branching by division/interest), office location/map, WhatsApp click-to-chat (see Section 9), phone/email |

Footer-only: Privacy policy, Terms — required for any lead-capturing site operating in Egypt.

---

## 6. Visual identity & design system

### Design direction

The brief already rejects the two easy failure modes: generic templated polish (fights "we don't believe in one-size-fits-all") and chasing whatever's trendiest (fights "we don't chase trends"). The direction that satisfies both is a **confident, geometric system built outward from the existing mark** — bold and current enough to prove creative credibility to a startup client, restrained enough to read as trustworthy to a hospital or government buyer.

### Color palette

The palette below extends the single brand navy into a small, deliberate system rather than defaulting to generic "navy blue + white" web-template colors:

| Color | Hex | Role |
|---|---|---|
| MEEM navy | `#00215C` | Primary brand color — logo, headlines, primary buttons, active states |
| Ink | `#0A1930` | Body text on light backgrounds — darker and slightly warmer than pure black, stays in the brand family |
| Sand accent | `#C6A15B` | Sparing use only — hover states, highlight details, quiet CTAs. A warm counterweight to the navy so the palette isn't monochrome |
| Cloud tint | `#EEF2F8` | Section backgrounds, card fills — a hint of navy rather than flat white, keeps long pages from feeling sterile |
| Base white | `#FFFFFF` | Primary background, negative space |

*(Preview rendered above — swatches and live Arabic/Latin type sample.)*

**Usage discipline:** navy and white should carry roughly 90% of every screen. The sand accent is a seasoning, not an ingredient — reserve it for moments that should draw the eye (a stat, a hover state, a single highlighted word in a headline), never a whole section background.

### Typography

**Recommended: Cairo** (Google Fonts, open-source, weights 200–900) as the sole family across the site, in both Arabic and Latin.

Why one family instead of a display/body split: Cairo was designed as a genuine dual-script system rather than a Latin face with an Arabic version added later, which means headlines in Arabic and English sit at the same visual weight and rhythm — critical when a language switcher can swap the entire page's script instantly. Its geometric structure also rhymes with the angular, constructed quality of the logo's droplet/M mark.

| Role | Weight | Use |
|---|---|---|
| Display / hero headlines | Cairo 800–900 | Large, confident, used sparingly |
| Section headings | Cairo 700 | |
| Body text | Cairo 400–500 | Set generously — 1.6–1.7 line height for both scripts, wider for Arabic if needed |
| Captions / labels / eyebrows | Cairo 500, letter-spaced | Echoes the letter-spaced "CREATIVE GROUP" treatment in the existing logo |

*Alternative if the team wants more contrast between headline and body:* pair **IBM Plex Sans Arabic** with **IBM Plex Sans** — same rationale (a matched multi-script system, not a mismatched pairing), with slightly more restrained character than Cairo.

### Imagery

MEEM Studios does photography and videography in-house — the website should never use generic stock imagery. Every hero, case study, and team photo should come from MEEM's own production, which doubles as a Studios showcase. If real project photography isn't ready by build time, that's a sequencing flag for Section 12, not a reason to fall back on stock.

### The signature moment

Every strong site has one deliberate, ownable interaction rather than scattered effects everywhere. For MEEM, the natural candidate is the logo mark itself: an opening sequence where an abstract drop of ink/water resolves — on scroll or on load — into the fixed Meem/M logomark. It's a literal, tasteful expression of "we take a vision and give it form," which is close to a direct quote from the welcome message. Used once, well, on the homepage hero — not repeated as a gimmick on every page.

Supporting motion should stay quiet: scroll-triggered content reveals, restrained hover states on portfolio and division cards, and a slower narrative scroll on the "Our Process" page where the six stages genuinely are sequential (this is one of the few places numbered steps are earned rather than decorative). Always respect `prefers-reduced-motion`.

### What to avoid

Two specific temptations, given what's trending in agency web design right now: **neo-brutalism** (heavy outlines, raw/unfinished aesthetics) reads well for fashion and youth-culture brands but actively undercuts trust with the healthcare, government, and manufacturing clients on MEEM's own industries list — skip it. Likewise, resist defaulting to the generic AI-generated design patterns currently everywhere (cream background with a serif display and a terracotta accent; or a near-black background with one neon accent) — none of that is derived from *this* brand, and MEEM's own copy explicitly rejects one-size-fits-all execution.

---

## 7. Bilingual (Arabic/English) strategy

This gets a dedicated section because it isn't a feature to add later — it changes the CMS choice, the URL structure, and the CSS approach from day one.

- **Full content parity, not a stub.** Every page, including individual portfolio case studies, should exist in both languages. A visitor switching languages should never suddenly hit an English-only page.
- **URL structure:** locale-prefixed paths (`/en/...` and `/ar/...`) via Next.js's built-in internationalized routing — clean for SEO, bookmarkable, and works with `hreflang` tags out of the box.
- **RTL is a layout mode, not a mirror image.** Use CSS logical properties (`margin-inline-start` instead of `margin-left`, `text-align: start` instead of `left`) throughout so the layout flips correctly rather than needing a hand-maintained parallel RTL stylesheet. Directional icons (arrows, the process flow) need mirrored variants; the logo itself does not need to flip.
- **One typeface, both scripts** (Section 6) avoids the common failure mode where Arabic looks like an afterthought set in a default system font while English gets the "real" branded typeface.
- **CMS-level localization**, not page duplication: content fields should be localized *within* one entry (title_en/title_ar, etc.) so an editor updates one case study once, in each language, rather than maintaining two disconnected page trees. Both Sanity and Payload CMS (Section 8) support this natively, including marking Arabic locales as RTL at the schema level.
- **Translation workflow:** plan for a human translator/reviewer in the loop — MEEM's Arabic copy is clearly written by a native speaker with real command of tone, and the website copy deserves the same. Any Arabic text drafted during design (placeholder headlines, etc.) should be treated as provisional until reviewed by a native Arabic speaker on the team.
- **Default language:** worth an explicit team decision — geolocation/browser-language detection with a manual switcher is standard practice, but which language loads for a direct URL with no locale hint (`meemcreativegroup.com`) should be a deliberate choice, not a default.

---

## 8. Technology stack

Recommendations below are current as of mid-2026 and chosen specifically for MEEM's requirements — bilingual/RTL content, an in-house media library, and a portfolio-driven site — rather than a generic "best stack" list.

| Layer | Recommendation | Why this fits MEEM specifically |
|---|---|---|
| Framework | **Next.js (App Router), TypeScript** | The default modern choice for marketing/portfolio sites in 2026 — React Server Components and the App Router mean fast initial loads (important on the mobile-heavy, sometimes-slower connections common across the industries MEEM serves), with Incremental Static Regeneration so portfolio pages stay fast while still editable from the CMS. |
| Styling | **Tailwind CSS** | Pairs naturally with the logical-properties approach RTL requires, and keeps the design system (Section 6's tokens) enforced in code rather than drifting page to page. |
| CMS | **Sanity** *or* **Payload CMS** (headless) | Both were confirmed in current comparisons as the strongest options specifically for multi-language content with real Arabic/RTL support, giving editors locale-aware fields instead of duplicated content trees. Sanity is hosted and has the more mature visual editing experience; Payload is open-source/self-hosted and gives more control if MEEM wants to own its data infrastructure outright. Either is a defensible choice — this is worth a short bake-off during the Discover phase. |
| Animation | **Motion** (the current name for Framer Motion) for UI and component-level animation; **GSAP** (free, including all plugins, since 2025) for the scroll-driven "Our Process" sequence and the signature hero moment | Splitting the two by strength rather than picking one: Motion is the natural fit for React component transitions, GSAP's ScrollTrigger has no real equivalent for scroll-storytelling. |
| Hosting | **Vercel** | Native fit for Next.js — edge delivery, image optimization, and preview deployments per pull request, which matters for a bilingual site where reviewers need to check both language versions before merging. |
| Forms | Next.js Server Actions + a transactional email service (e.g. Resend) | Avoids a third-party form-builder dependency; branching contact forms (by division/interest) are simple to build natively. |
| Media | Next.js `<Image>` for photos; a dedicated video host (e.g. Mux or Cloudflare Stream) for Studios showcase reels | Reels and case study video need adaptive streaming and thumbnails — don't self-host raw video files. |
| Analytics | A privacy-respecting analytics tool (e.g. Plausible) as the primary dashboard, with Google Analytics 4 added only if/when paid ad campaigns need conversion tracking | Keeps page weight down (relevant to Core Web Vitals — see Section 11) while still giving the team real usage data. |
| Version control / CI | GitHub + Vercel preview builds | Standard, and gives non-technical stakeholders a live preview link for every change before it ships. |

---

## 9. Key features & functionality

- **Filterable portfolio system** — filter by division (Creative / Studios / Events) and by industry simultaneously; each case study should state the challenge, the work, and the measurable outcome, echoing MEEM's own "creativity should solve problems" positioning.
- **Interactive process journey** — the six-stage process (Discover → Think → Create → Execute → Measure → Grow) as a scroll- or click-driven sequence rather than a static list.
- **Division hub pages** with their own visual sub-identity (built from the shared system, not a separate palette) so Creative, Studios, and Events each feel distinct while clearly belonging to one brand.
- **WhatsApp Business click-to-chat** — worth calling out explicitly since it's close to a default expectation for B2B contact in the Egyptian/MENA market, and often converts better than a web form for a first inquiry.
- **Branching contact/brief form** — a short initial form that routes by division or project type rather than one generic "message us" box, so a real estate client and an NGO aren't filling out the same fields.
- **Language switcher** — persistent, one tap/click, retains the current page context when switching (Section 7).
- **Case study video embeds** — native support for Studios' reels and production work, not just static galleries.

---

## 10. Content strategy

**Can be adapted directly from the existing profile** (with light editing for a web-reading context — the source copy is written well but is print/PDF-length in places):

- Welcome message → About page intro
- Who We Are, What We Believe → About page
- Vision & Mission → About page
- Why MEEM → About page or homepage proof section
- The "We Believe" list → strong candidate for a homepage or About page visual moment

**Needs to be created new:**

- Individual case studies (challenge / approach / outcome format) for real projects — this is the single highest-priority content gap, since the portfolio is the site's main selling tool
- Service-level copy for each of the twelve services listed under the three divisions
- Team bios (if the site will feature people, which builds trust for B2B/government buyers)
- Client testimonials or logos, if available under NDA/permission
- Arabic translation and native-speaker review of any new copy drafted in English first

**Needs to be produced:** professional photography of the team and office, and — ideally — behind-the-scenes production stills/reels from MEEM Studios work, both to fill out the site and to demonstrate the division's own capability.

---

## 11. SEO, performance & accessibility

- **Technical SEO:** semantic HTML, `Organization` and `LocalBusiness` structured data, XML sitemap covering both locales, clean canonical URLs.
- **Bilingual SEO:** `hreflang` tags linking each page to its language counterpart; localized meta titles/descriptions rather than machine-translated ones.
- **Performance targets:** aim for Lighthouse scores of 90+ (95+ is achievable with the recommended stack) and sub-second initial load — realistic with Next.js's static generation for content pages, especially important given a portfolio-heavy site that leans on imagery and video.
- **Image/video discipline:** modern formats (WebP/AVIF for images), lazy-loading below the fold, and adaptive streaming for video rather than large embedded files.
- **Accessibility baseline:** WCAG 2.1 AA — the navy-on-white palette already gives strong contrast ratios, which is a genuine head start; carry that discipline into the sand accent color (check contrast before using it for text, not just decoration), visible keyboard focus states, and full support for `prefers-reduced-motion` given the motion-forward direction in Section 6.

---

## 12. Development roadmap

Structured deliberately around MEEM's own six-stage process — the build should demonstrate the methodology, not just result in a website that describes it.

| Phase | Focus | Approx. duration | Key activities |
|---|---|---|---|
| **1. Discover** | Groundwork | 1–2 weeks | Stakeholder interviews, content/asset audit, competitor review, CMS bake-off (Sanity vs. Payload), technical requirements sign-off |
| **2. Think** | Strategy & structure | 1–2 weeks | Finalize sitemap, wireframes for key templates (home, division hub, case study, contact), information architecture sign-off |
| **3. Create** | Visual design | 2–4 weeks | Design system build-out from Section 6 (tokens, type scale, components), key page mockups in both languages, stakeholder design review |
| **4. Execute** | Build | 4–8 weeks | CMS schema and localization setup, front-end build, content population (English and Arabic in parallel, not sequentially), integrations (forms, WhatsApp, analytics, video) |
| **5. Measure** | QA | 1–2 weeks | Cross-browser/device testing, RTL layout QA, performance and accessibility audits, full bilingual content review, stakeholder UAT |
| **6. Grow** | Launch & iterate | Ongoing | Deployment, analytics/goal setup, post-launch monitoring, content cadence (case studies, insights) established for the months after launch |

**Rough total: 10–16 weeks** for a full build, depending on how much content and photography are ready going into Phase 4 — the single biggest variable in almost every agency website project is content readiness, not engineering time, so it's worth front-loading case study writing and photo/video selection during Phases 1–2 rather than leaving it for the end.

A note on cost: MEEM is best placed to scope pricing internally or against Egyptian/regional market rates — this plan intentionally doesn't invent a budget figure. If cost becomes a constraint, the highest-value phases to protect are 1 (Discover) and 3 (Create); the easiest to compress without damaging quality is scope within Phase 9's feature list (e.g., launch without Insights/Careers and add them post-launch).

---

## 13. Team & resources

| Role | Responsibility | Note |
|---|---|---|
| Project lead | Scope, timeline, stakeholder sign-off | |
| UI/UX designer | Design system, page layouts, prototypes | Should work in both languages simultaneously, not design English-first and adapt |
| Front-end developer | Next.js build, animation, RTL implementation | |
| CMS/back-end developer | Schema design, localization setup, integrations | Can often be the same person as front-end on a project this size |
| Content writer / Arabic translator | New copy, case studies, translation review | Non-negotiable given the bilingual requirement — budget for a native-speaker reviewer even if a translation tool does the first pass |
| Photographer/videographer | Team and project imagery | MEEM Studios can likely resource this in-house |
| QA | Cross-device, cross-language testing | |

---

## 14. Next steps

1. Confirm CMS choice (Sanity vs. Payload) — recommend a short technical spike during Discover rather than deciding on paper alone.
2. Locate or commission any existing brand guidelines beyond the logo file, so Section 6's proposed system can be validated or adjusted against real precedent.
3. Start the case study content audit now — identify which past projects can be featured, and confirm client permission where needed — since this is the most likely timeline bottleneck.
4. Assign an Arabic content owner/reviewer early, not at the end of the content process.
5. Schedule the Phase 1 (Discover) kickoff.
