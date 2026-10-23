export type ProjectKind = "Interface" | "Systems" | "Tool";

export type Project = {
  slug: string;
  index: string;
  title: string;
  kind: ProjectKind;
  stack: string[];
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
 * Studies stand in for shipped work. Replace an entry here when a real
 * project is ready — keep the same shape and the pages will follow.
 */
export const projects: Project[] = [
  {
    slug: "ledger",
    index: "01",
    title: "Ledger",
    kind: "Tool",
    stack: ["TypeScript", "SQLite"],
    summary:
      "A personal ledger that keeps every amount as whole cents and every change as a line you can read back.",
    problem:
      "Spreadsheets hide the moment a number stopped being true. A cell gets overwritten, a formula drifts, and the total still looks confident.",
    kept: [
      "Amounts are integers in minor units. No floating point on the path that adds money.",
      "Entries are append-only. A correction is a new line, not an edit that erases the old one.",
      "The balance is a fold over the log. It is never a stored column that can drift away from the entries.",
    ],
    leftOut: [
      "Bank connections, budgets, and charts. Those can wait until the record itself is trustworthy.",
      "Multiple currencies in the first version. One unit, named out loud, is enough to prove the model.",
    ],
  },
  {
    slug: "quiet",
    index: "02",
    title: "Quiet",
    kind: "Interface",
    stack: ["React", "CSS"],
    summary:
      "A reading surface with one column, a type size you set once, and progress that does not announce itself.",
    problem:
      "Reading on a screen is usually a negotiation with chrome. The text shares the room with badges, recommendations, and a bar that wants credit for your attention.",
    kept: [
      "A measure of about sixty-six characters, a short type ramp, and margins that stay wide when the window gets large.",
      "Position stored with the document, not in an account. Close the tab, come back, and the sentence is where you left it.",
      "Controls that appear when you ask and leave when you are reading.",
    ],
    leftOut: [
      "Highlights that turn into a feed, recommendations, and accounts. The page is for the text in front of you.",
    ],
  },
  {
    slug: "trace",
    index: "03",
    title: "Trace",
    kind: "Systems",
    stack: ["Go", "Terminal"],
    summary:
      "A log viewer that opens on the failing span and keeps the rest of the firehose folded until you mean to read it.",
    problem:
      "When a request fails, the useful lines sit next to thousands that are not. Most viewers make you scroll, or they make you learn a query language before you can see the error.",
    kept: [
      "Group by request. The failing span starts expanded, with the few lines before it still attached.",
      "Filters you can say out loud: service, status, since. If a filter needs a manual, it does not ship.",
      "A terminal view and a plain-text export, so a trace can be pasted into a note without a screenshot.",
    ],
    leftOut: [
      "A query language that wants to be SQL, dashboards, and alerting. Trace is for the minute something is already broken.",
    ],
  },
  {
    slug: "field",
    index: "04",
    title: "Field",
    kind: "Tool",
    stack: ["TypeScript", "Markdown"],
    summary:
      "Notes that are a folder of Markdown. Search walks the files. Sync is whatever you already use for the rest of your disk.",
    problem:
      "A notes app that needs an account has turned your sentences into someone else's database. Leaving means an export, and the export is usually the moment you find out what you do not own.",
    kept: [
      "One file per note. The name is a date plus a slug, so the folder sorts itself.",
      "A search that reads the files. No index you have to rebuild before the note you just wrote shows up.",
      "An editor that is a textarea and a preview. The file on disk is the product, not a cache of it.",
    ],
    leftOut: [
      "Collaboration, live cursors, and a custom sync engine. If the folder syncs, the notes sync.",
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
