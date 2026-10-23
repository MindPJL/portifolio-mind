# Mind

A portfolio site for Mind, a programmer. Paper, ink, and a short shelf of studies — stand-ins you can replace with work you have actually shipped.

## Run it

```bash
npm install
npm run dev -- -p 43123
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Make it yours

- `src/lib/site.ts` — name, role, and the short description used in the page title.
- `src/lib/site.ts` → `contactEmail` — set your address and the contact form opens the visitor’s mail app. Leave it empty and the form copies the note to the clipboard instead. Nothing is stored on a server.
- `src/lib/projects.ts` — the studies. Keep the same fields (`slug`, `title`, `kind`, `stack`, `summary`, `problem`, `kept`, `leftOut`) and the index and detail pages follow.
- `src/lib/practice.ts` — the three working rules on the front page.
- `src/app/about/page.tsx` — the longer note.

`kind` is one of `Interface`, `Systems`, or `Tool`. That is what the filter on the work page uses.

## Stack

Next.js, TypeScript, Tailwind CSS, and shadcn/ui.
