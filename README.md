# 🏆 ChoreChamp

A fun, gamified chore tracking app for the whole family. Kids check off their chores, parents monitor progress and release allowance.

## Features

- **Kids View** — Daily chore list with progress ring, streak tracker, and celebrations 🎉
- **Parents / Daily** — Per-child completion status, notes, and allowance release
- **Parents / Weekly Summary** — Full Mon–Sun grid showing every chore, every day at a glance
- **Stats** — Completion totals, streaks, and allowance released

## Getting Started

This is a single-file static app — no build step required.

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/chorechamp.git
cd chorechamp

# Open locally
open index.html
# or serve with any static server:
npx serve .
```

## Deploying to Netlify

The app deploys as a static site. Just connect your GitHub repo in Netlify and it will auto-deploy on every push. No build command or publish directory needed — `index.html` is at the root.

## Data

All chore completion data is stored in `localStorage` in the browser — no backend required for v1. Data persists across page refreshes on the same device.

## Customizing Chores

Edit the `CHORES` array in `index.html` to change assignments. Each chore entry has a `schedule` object with day-of-week keys and values of `'sara'`, `'sophia'`, `'all'`, or `null` (not assigned).

## Tech Stack

- Vanilla HTML / CSS / JavaScript
- Google Fonts (Fredoka One + Nunito)
- localStorage for persistence
- Zero dependencies, zero build step
