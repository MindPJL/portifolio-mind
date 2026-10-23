# Mind

A portfolio site for Mind, a programmer. The front page is one scroll: a cursor-reactive mark, a bento of studies, a sample conversation, a gallery lightbox, and starting prices you can edit.

## Run it

```bash
npm install
npm run dev -- -p 43123
```

Open [http://localhost:43123](http://localhost:43123).

## Make it yours

- `src/lib/site.ts` — name, role, and the short description used in the page title.
- `src/lib/site.ts` → `contactEmail` — set your address and the contact form opens the visitor’s mail app. Leave it empty and the form copies the note to the clipboard instead. Nothing is stored on a server.
- `src/lib/projects.ts` — the studies. Keep the same fields (`slug`, `title`, `kind`, `stack`, `summary`, `problem`, `kept`, `leftOut`) and the index and detail pages follow.
- `src/lib/practice.ts` — the three working rules on the front page.
- `src/lib/engagements.ts` — the starting prices in the ways-to-work section.
- `src/lib/conversation.ts` — the sample thread in the notes section.
- `src/app/about/page.tsx` — the longer note.

`kind` is one of `Interface`, `Systems`, or `Tool`. That is what the filter on the work page uses.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
