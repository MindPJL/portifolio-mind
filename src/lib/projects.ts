export type ProjectKind = "Interface" | "Systems" | "Tool";

export type Project = {
  slug: string;
  index: string;
  title: string;
  kind: ProjectKind;
  stack: string[];
  repo?: string;
  summary: string;
  problem: string;
  kept: string[];
  leftOut: string[];
};

export type ProjectSummary = Pick<
  Project,
  "slug" | "index" | "title" | "kind" | "summary" | "stack"
>;

/**
 * Public work from github.com/MindPJL. Private projects stay off the shelf.
 */
export const projects: Project[] = [
  {
    slug: "docinho",
    index: "01",
    title: "Docinho",
    kind: "Interface",
    stack: ["TypeScript", "React"],
    repo: "https://github.com/MindPJL/Portifolio-Docinho",
    summary:
      "A portfolio surface for a real brand — layout, type, and motion that introduce someone before they say a word.",
    problem:
      "A portfolio that looks like a template disappears. The person behind it needs a first screen that feels specific.",
    kept: [
      "A clear hero and a path through the work without drowning the visitor in chrome.",
      "TypeScript end to end, so the structure stays honest as the pages grow.",
      "Motion that points at hierarchy instead of noise.",
    ],
    leftOut: [
      "A CMS, a blog engine, and account flows. The site is a face, not a product suite.",
    ],
  },
  {
    slug: "board",
    index: "02",
    title: "Board",
    kind: "Interface",
    stack: ["CSS", "HTML"],
    repo: "https://github.com/MindPJL/trello-cloned",
    summary:
      "A Trello-inspired board built to understand columns, cards, and the feel of dragging work across a day.",
    problem:
      "Kanban UIs look simple until you build one. Spacing, drag affordances, and readable cards are the whole product.",
    kept: [
      "Columns that read as lanes, not boxes stacked for decoration.",
      "CSS that carries most of the layout so the structure stays inspectable.",
      "A clone that teaches the interaction, not a pixel-perfect replica.",
    ],
    leftOut: [
      "Accounts, sync, and a backend. This is the board on the glass.",
    ],
  },
  {
    slug: "fluent",
    index: "03",
    title: "FluentMeet",
    kind: "Interface",
    stack: ["JavaScript"],
    repo: "https://github.com/MindPJL/FluentMeet",
    summary:
      "A meeting-room experiment in JavaScript — the flow of joining, waiting, and staying oriented in a call.",
    problem:
      "Call UIs hide their worst moments: waiting rooms, empty states, and the second you lose track of who is speaking.",
    kept: [
      "Plain JavaScript so the control flow stays readable.",
      "States named for what the person is doing, not what the socket said.",
      "A small surface that can grow without rewriting the story.",
    ],
    leftOut: [
      "A full WebRTC stack and production infra. FluentMeet is the interface story first.",
    ],
  },
  {
    slug: "hash",
    index: "04",
    title: "Crypto Hash",
    kind: "Tool",
    stack: ["TypeScript"],
    repo: "https://github.com/MindPJL/cypto-hash",
    summary:
      "A TypeScript hashing playground — feed a string, see the digest, keep the path short enough to trust.",
    problem:
      "Hash tools online are either a black box or a wall of options. I wanted a thin path from input to digest.",
    kept: [
      "TypeScript types around the inputs so mistakes show up early.",
      "A short surface: pick an algorithm, paste text, read the result.",
      "No account, no history server — the work stays on the device.",
    ],
    leftOut: [
      "Password managers, key storage, and anything that pretends to be a vault.",
    ],
  },
];

export function projectSummaries(items: Project[] = projects): ProjectSummary[] {
  return items.map(({ slug, index, title, kind, summary, stack }) => ({
    slug,
    index,
    title,
    kind,
    summary,
    stack,
  }));
}

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const current = projects.findIndex((project) => project.slug === slug);
  if (current === -1 || projects.length < 2) {
    return undefined;
  }
  return projects[(current + 1) % projects.length];
}
