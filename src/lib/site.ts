export const site = {
  name: "Mind",
  role: "Programmer",
  title: "Mind — Make the first impression count.",
  description:
    "Mind is a programmer. Interfaces, systems, and tools that still make sense when you open them later.",
} as const;

/**
 * Set this to your email and the contact form opens the visitor's mail app.
 * Leave it empty and the form copies the note to the clipboard instead.
 */
export const contactEmail: string = "";

export const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#results", label: "Results" },
  { href: "/#process", label: "Process" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
] as const;

export const contactHref = "/#contact";
