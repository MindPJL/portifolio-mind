import Link from "next/link";
import { Container } from "@/components/container";
import { WorkList } from "@/components/work-list";
import { practice } from "@/lib/practice";
import { projectSummaries } from "@/lib/projects";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Container className="pt-12 sm:pt-20">
        <p className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
          {site.role}
        </p>
        <h1 className="mt-4 font-serif text-[clamp(5.25rem,16vw,9.25rem)] leading-[0.82] tracking-[-0.045em] italic">
          {site.name}
        </h1>

        <div className="mt-12 grid gap-10 border-t border-border pt-10 lg:grid-cols-[minmax(0,1.4fr)_17rem] lg:gap-0">
          <p className="max-w-xl text-xl leading-relaxed text-pretty sm:text-2xl sm:leading-snug">
            I write software that still makes sense when I open it later. Clear
            names, small parts, and errors that tell you what to do next.
          </p>
          <dl className="flex flex-col gap-6 border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-1 lg:pl-10">
            <div>
              <dt className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                Focus
              </dt>
              <dd className="mt-1 text-base leading-relaxed">
                Interfaces, systems, and the tools around them
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                Daily
              </dt>
              <dd className="mt-1 text-base leading-relaxed">
                TypeScript, the browser, SQL, the terminal
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                This site
              </dt>
              <dd className="mt-1 text-base leading-relaxed">
                Studies, until shipped work is ready to take their place
              </dd>
            </div>
          </dl>
        </div>
      </Container>

      <Container className="py-16 sm:py-24">
        <section aria-labelledby="studies-label">
          <div className="mb-8 flex items-baseline justify-between gap-4 border-t border-border pt-8">
            <p
              id="studies-label"
              className="font-mono text-xs tracking-[0.16em] uppercase"
            >
              <span className="text-signal">01</span>
              <span className="px-2 text-border" aria-hidden="true">
                /
              </span>
              Studies
            </p>
            <Link
              href="/work"
              className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase underline-offset-4 hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              Index
            </Link>
          </div>
          <WorkList projects={projectSummaries()} />
        </section>
      </Container>

      <Container className="pb-16 sm:pb-24">
        <section aria-labelledby="practice-label">
          <h2
            id="practice-label"
            className="border-t border-border pt-8 font-mono text-xs tracking-[0.16em] uppercase"
          >
            <span className="text-signal">02</span>
            <span className="px-2 text-border" aria-hidden="true">
              /
            </span>
            Practice
          </h2>
          <div className="mt-8 grid gap-10 lg:grid-cols-3">
            {practice.map((item) => (
              <article key={item.index}>
                <p className="font-mono text-xs text-signal">{item.index}</p>
                <h3 className="mt-3 font-serif text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-pretty text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-10">
            <Link
              href="/about"
              className="font-mono text-xs tracking-[0.16em] uppercase underline decoration-foreground/30 underline-offset-[0.25em] hover:decoration-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              Read the longer note
            </Link>
          </p>
        </section>
      </Container>

      <section className="bg-ink text-background">
        <Container className="py-16 sm:py-24">
          <h2 className="max-w-xl font-serif text-4xl tracking-tight text-balance sm:text-5xl">
            Have something that needs a careful reader?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 font-mono text-xs tracking-[0.16em] uppercase underline decoration-[var(--signal-soft)] decoration-2 underline-offset-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-background"
          >
            Write a note
            <span aria-hidden="true">→</span>
          </Link>
        </Container>
      </section>
    </>
  );
}
