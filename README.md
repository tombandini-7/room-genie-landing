# Room Genie Landing Page

Marketing landing page for [Room Genie](https://app.roomgenie.travel) — a Walt Disney World resort availability monitoring and price comparison tool.

## Tech Stack

- **Framework:** Next.js 16 (static export)
- **Styling:** Tailwind CSS v4
- **Animations:** framer-motion
- **Fonts:** Playfair Display + DM Sans (Google Fonts via next/font)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Produces a static site in `/out` that can be deployed anywhere.

## Pricing Data

Plan names, prices, and features are sourced from the main Room Genie codebase to ensure accuracy:

- **Single Alert:** $5/alert (one-time, 1–10 qty, credits expire after 1 year)
- **Watcher:** $19/month — unlimited alerts, edit/pause/reactivate, SMS + email
- **Explorer:** $29/month — everything in Watcher + Explore Rates (compare 10+ resorts)
