# Mind

Portfolio for [MindPJL](https://github.com/MindPJL) — dark, high-energy single page with dissolve mark, public projects, languages orbit, negotiation (no fixed prices), and a contact note.

## Run it

```bash
npm install
npm run dev -- -p 43123
```

Open [http://localhost:43123](http://localhost:43123).

## Language

On first visit the site asks for English or Portuguese. The choice is saved in `localStorage` under `mind-locale`. Switch anytime with the EN / PT control in the header.

## What’s here

- `/` — portfolio sequence (work, process, negotiate, contact)
- `/languages` — interactive principal languages (TypeScript, JavaScript, Lua, CSS, HTML)
- `/about` — longer note
- `/work/[slug]` — public project notes linked to GitHub

## Make it yours

- `src/lib/site.ts` — name, GitHub, Discord, bio, `contactEmail`
- `src/lib/projects.ts` — public projects (+ optional `repo` URLs)
- `src/lib/languages.ts` — principal languages for the orbit page
- `src/lib/i18n/dictionary.ts` — all EN / PT copy

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Lenis for smooth scrolling.
