# Room Genie Landing Page

## Project Overview
Standalone marketing landing page for Room Genie — a Walt Disney World resort availability monitoring and price comparison tool. This is a separate repo from the main app.

## Tech Stack
- **Framework:** Next.js 16 with static export (`output: 'export'`)
- **Styling:** Tailwind CSS v4 (`@theme inline` pattern, no config file)
- **Animations:** framer-motion (scroll-triggered reveals)
- **Utilities:** clsx
- **Fonts:** Playfair Display (headings), DM Sans (body) via next/font/google

## Design System
- **Primary color:** `#061E29` (deep navy-black)
- **Gold accent:** `#ba9d5d` (used for CTAs, headings, hover states, badges)
- **Aesthetic:** Dark, luxurious, editorial — premium Disney travel meets modern SaaS
- **DO NOT use:** Inter, Roboto, system fonts, or generic UI aesthetics

## Architecture
- All reusable UI primitives live in `components/ui/`
- Section components (`hero.tsx`, `pricing.tsx`, etc.) compose from `ui/` primitives
- Content-heavy sections use data arrays rendered via `.map()` — never duplicate markup per item
- Every CTA links to `https://app.roomgenie.travel`

## Pricing Data (from main Room Genie codebase)
These values must match the main app exactly:
- **Single Alert:** $5/alert — one-time purchase, 1-10 qty, credits expire after 1 year
- **Watcher:** $19/month — unlimited alerts, edit/pause/reactivate, SMS + email, monitor all resorts (Most Popular)
- **Explorer:** $29/month — everything in Watcher + Explore Rates: compare 10+ resorts, live Disney pricing, rooms/tickets/dining/Memory Maker (Best Value)

## Main Room Genie Application Codebase Reference
Located at `/Users/tom/Disney Hotels Lookup/` (remote: `https://github.com/tombandini-7/room-genie.git`)

Key files for pricing/plan accuracy:
- `frontend/app/plans/plans-content.tsx` — Plan names, prices, features, UI copy
- `frontend/lib/entitlements.ts` — Credit system, feature gating logic
- `frontend/app/api/billing/checkout/route.ts` — Stripe price IDs, checkout flow
- `frontend/app/api/webhooks/stripe/route.ts` — Subscription lifecycle events

## Key Product Facts
- Availability alerts check Disney every 30 minutes
- Price drop alerts notify when price falls below user's target
- Explore Rates compares 10+ WDW resorts simultaneously with live pricing
- Notifications: email (live), SMS (coming soon)
- Single alert credits expire after 1 year from purchase
- Subscriptions cancel anytime, no commitment

## Logo
`https://xrcwdxbwtnmxyahbgrlw.supabase.co/storage/v1/object/public/app-assets/logos/Room%20Genie%20-%20Small%20-%20Transparent.png`

## Commands
- `npm run dev` — local development server
- `npm run build` — static export to `/out`
