"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import { site } from "@/lib/site";

export default function AboutPage() {
  const { dictionary } = useLanguage();
  const t = dictionary.aboutPage;

  return (
    <Container className="py-20 sm:py-28">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          02 / {t.kicker}
        </p>
        <h1 className="mt-4 font-display text-[clamp(3rem,7vw,5.5rem)] leading-[0.92] font-bold tracking-tight uppercase">
          {t.title}
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          {site.handle} ·{" "}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-foreground/30 underline-offset-4 hover:decoration-signal"
          >
            {site.github.replace("https://", "")}
          </a>
        </p>
      </Reveal>

      <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-pretty">
        {[t.p1, t.p2, t.p3, t.p4].map((paragraph, index) => (
          <Reveal key={paragraph.slice(0, 24)} delay={index * 80}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200} className="mt-16 max-w-2xl">
        <h2 className="font-display text-3xl tracking-tight uppercase">{t.toolsTitle}</h2>
        <dl className="mt-6 divide-y divide-border border-y border-border">
          {t.tools.map((tool) => (
            <div key={tool.name} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="font-medium">{tool.name}</dt>
              <dd className="text-muted-foreground">{tool.detail}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={260} className="mt-16 max-w-3xl">
        <figure>
          <pre
            tabIndex={0}
            aria-label={t.ruleCaption}
            className="overflow-x-auto rounded-2xl border border-border bg-[#241526] p-5 font-mono text-sm leading-7 text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet sm:p-8"
          >
            <code>
              <span className="text-coral">function</span>
              {" leaveItReadable(change) {\n  "}
              <span className="text-coral">return</span>
              {" {\n    name: change.name,       "}
              <span className="text-muted-foreground">{"// what it is"}</span>
              {"\n    reason: change.reason,   "}
              <span className="text-muted-foreground">{"// why it exists"}</span>
              {"\n    failure: change.failure, "}
              <span className="text-muted-foreground">{"// how it breaks"}</span>
              {"\n  }\n}"}
            </code>
          </pre>
          <figcaption className="mt-3 font-mono text-xs tracking-[0.14em] text-muted-foreground uppercase">
            {t.ruleCaption}
          </figcaption>
        </figure>
      </Reveal>

      <p className="mt-12 flex flex-col gap-3 font-mono text-xs tracking-[0.16em] uppercase sm:flex-row sm:gap-8">
        <Link
          href="/#work"
          className="underline decoration-foreground/30 underline-offset-[0.25em] hover:decoration-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          {t.seeWork}
        </Link>
        <Link
          href="/languages"
          className="underline decoration-foreground/30 underline-offset-[0.25em] hover:decoration-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          {dictionary.nav.languages}
        </Link>
        <Link
          href="/#contact"
          className="underline decoration-foreground/30 underline-offset-[0.25em] hover:decoration-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          {t.writeNote}
        </Link>
      </p>
    </Container>
  );
}
