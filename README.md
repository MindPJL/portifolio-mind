# Mind

A portfolio site for Mind, a programmer. Dark, high-energy single page — dissolve mark, studies, process chat, pricing, and a contact note — inspired by modern creative portfolios like PerusC4.

## Run it

```bash
npm install
npm run dev -- -p 43123
```

Open [http://localhost:43123](http://localhost:43123).

## Make it yours

- `src/lib/site.ts` — name, role, and the short description used in the page title.
- `src/lib/site.ts` → `contactEmail` — set your address and the contact form opens the visitor’s mail app. Leave it empty and the form copies the note to the clipboard instead.
- `src/lib/projects.ts` — the studies.
- `src/lib/practice.ts` — the three working rules.
- `src/lib/engagements.ts` — pricing and process steps.
- `src/lib/conversation.ts` — the sample DM thread.
- `src/app/about/page.tsx` — the longer note.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
