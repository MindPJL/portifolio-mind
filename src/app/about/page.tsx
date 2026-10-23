import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = {
  title: "About",
  description:
    "How Mind likes to work: names you can trust, failures that explain themselves, and software you can leave.",
};

const tools = [
  {
    name: "TypeScript",
    detail: "When people and other programs both have to trust the same code.",
  },
  {
    name: "The browser",
    detail: "Layout, type, and the states a screen usually forgets: empty, wrong, and waiting.",
  },
  {
    name: "SQL",
    detail: "When the truth is a set of rows and the question should be readable.",
  },
  {
    name: "The terminal",
    detail: "For the work that does not need a window.",
  },
  {
    name: "Plain files",
    detail: "So the thing can outlive the application that wrote it.",
  },
];

export default function AboutPage() {
  return (
    <Container className="py-14 sm:py-20">
      <PageIntro index="02" kicker="About" title="How I like to work.">
        <p>I am Mind. I program.</p>
      </PageIntro>

      <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-pretty">
        <p>
          The part of the work I trust is the part you can open in an editor. A
          function whose name matches what it does. A test that fails for a
          reason you can say out loud. An interface that does not ask you to
          keep a legend in your head.
        </p>
        <p>
          I like the middle of a system. Not the pitch, and not the last coat
          of paint. The place where a request becomes a record. Where an error
          has to decide whether it is your problem or mine. Where a name chosen
          on a Tuesday still has to make sense a year later.
        </p>
        <p>
          TypeScript is where I spend most days, because a program often has to
          be both a thing a person touches and a thing another program can
          trust. The tool changes. The standard does not: could someone else
          follow this without me in the room?
        </p>
        <p>
          The projects here are studies. They are the shape of software I want
          to be known for. When a shipped piece is ready, it replaces a study.
          The page should get more specific over time, not louder.
        </p>
      </div>

      <section className="mt-16 max-w-2xl">
        <h2 className="font-serif text-3xl tracking-tight">What I reach for</h2>
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {tools.map((tool) => (
            <div key={tool.name} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="font-medium">{tool.name}</dt>
              <dd className="text-muted-foreground">{tool.detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <figure className="mt-16 max-w-3xl">
        <pre
          tabIndex={0}
          aria-label="A function that names a change"
          className="overflow-x-auto bg-ink p-5 font-mono text-sm leading-7 text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal sm:p-8"
        >
          <code>
            <span className="text-signal-soft">function</span>
            {" leaveItReadable(change) {\n  "}
            <span className="text-signal-soft">return</span>
            {" {\n    name: change.name,       "}
            <span className="text-background/50">{"// what it is"}</span>
            {"\n    reason: change.reason,   "}
            <span className="text-background/50">{"// why it exists"}</span>
            {"\n    failure: change.failure, "}
            <span className="text-background/50">{"// how it breaks"}</span>
            {"\n  }\n}"}
          </code>
        </pre>
        <figcaption className="mt-3 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
          A rule I keep close to the editor
        </figcaption>
      </figure>

      <p className="mt-12 flex flex-col gap-3 font-mono text-xs tracking-[0.16em] uppercase sm:flex-row sm:gap-8">
        <Link
          href="/work"
          className="underline decoration-foreground/30 underline-offset-[0.25em] hover:decoration-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          See the studies
        </Link>
        <Link
          href="/contact"
          className="underline decoration-foreground/30 underline-offset-[0.25em] hover:decoration-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          Write a note
        </Link>
      </p>
    </Container>
  );
}
