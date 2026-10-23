export type Language = {
  id: string;
  name: string;
  short: string;
  accent: string;
  level: "core" | "strong" | "solid";
  weight: number;
};

/** Principal languages Mind works in — ordered by focus. */
export const languages: Language[] = [
  {
    id: "typescript",
    name: "TypeScript",
    short: "TS",
    accent: "#3178c6",
    level: "core",
    weight: 96,
  },
  {
    id: "javascript",
    name: "JavaScript",
    short: "JS",
    accent: "#f7df1e",
    level: "core",
    weight: 90,
  },
  {
    id: "lua",
    name: "Lua",
    short: "Lua",
    accent: "#000080",
    level: "strong",
    weight: 78,
  },
  {
    id: "css",
    name: "CSS",
    short: "CSS",
    accent: "#264de4",
    level: "strong",
    weight: 74,
  },
  {
    id: "html",
    name: "HTML",
    short: "HTML",
    accent: "#e34f26",
    level: "solid",
    weight: 70,
  },
];
