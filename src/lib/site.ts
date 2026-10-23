export const site = {
  name: "Mind",
  role: "Programmer",
  title: "Mind — Programmer",
  description:
    "Mind is a programmer. A front door for studies in interfaces, systems, and tools, and a place to write a note.",
} as const;

/**
 * Set this to your email and the contact form opens the visitor's mail app.
 * Leave it empty and the form copies the note to the clipboard instead.
 */
export const contactEmail: string = "";

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#practice", label: "Practice" },
  { href: "/#notes", label: "Notes" },
  { href: "/#shelf", label: "Shelf" },
  { href: "/#engage", label: "Engage" },
] as const;

export const contactHref = "/#contact";
