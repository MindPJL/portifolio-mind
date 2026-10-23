# Mind

A portfolio site for Mind, a programmer. Dark, high-energy single page — dissolve mark, studies, process chat, pricing, and a contact note — inspired by modern creative portfolios like PerusC4.

## Run it

```bash
npm install
npm run dev -- -p 43123
```

Open [http://localhost:43123](http://localhost:43123).

## Language

On first visit the site asks for English or Portuguese. The choice is saved in `localStorage` under `mind-locale`. Switch anytime with the EN / PT control in the header.

Copy lives in `src/lib/i18n/dictionary.ts` (and `src/lib/i18n/conversation.ts` for the sample chat).

## Make it yours

- `src/lib/site.ts` — name, role, and the short description used in the page title.
- `src/lib/site.ts` → `contactEmail` — set your address and the contact form opens the visitor’s mail app. Leave it empty and the form copies the note to the clipboard instead.
- `src/lib/projects.ts` — the studies (structure and stacks; prose is in the dictionary).
- `src/lib/i18n/dictionary.ts` — all EN / PT strings, including practice, process, and pricing.
- `src/app/about/page.tsx` — the longer note.

## Stack

Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Lenis for smooth scrolling.
