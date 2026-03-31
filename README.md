# 🏆 ChoresChamp

A fun, gamified chore tracking app for the whole family. Kids check off their chores, parents monitor progress and release allowance.

## Features

- **Kids View** — Daily chore list with progress ring, streak tracker, and celebrations 🎉
- **Parents / Daily** — Per-child completion status, notes, and one-tap allowance release
- **Parents / Weekly Summary** — Full Mon–Sun grid showing every chore, every day at a glance
- **Stats** — Completion totals, streaks, and allowance released to date

## Allowance Logic

Allowance is released **per day, per child** from the Parents → Daily view. The release button is only enabled once **all chores for that day are completed**. Each cleared day credits $5.00. The running total is tracked in the Stats view.

## Getting Started

This is a single-file static app — no build step required.

```bash
# Clone the repo
git clone https://github.com/kevinmklein/ChoresChamp.git
cd ChoresChamp

# Open locally
open index.html
# or serve with any static server:
npx serve .
```

## Deploying to Netlify

Connect your GitHub repo in Netlify and it will auto-deploy on every push. No build command or publish directory config needed — `index.html` is at the root.

## Data

All chore completion data is stored in `localStorage` — no backend required for v1. Data persists across page refreshes on the same device.

## Customizing Chores

Edit the `CHORES` array in `index.html`. Each chore has a `schedule` object with day-of-week keys and values of `'sara'`, `'sophia'`, `'all'`, or `null` (not assigned that day).

## Tech Stack

- Vanilla HTML / CSS / JavaScript
- Google Fonts (Fredoka One + Nunito)
- `localStorage` for persistence
- Zero dependencies, zero build step
