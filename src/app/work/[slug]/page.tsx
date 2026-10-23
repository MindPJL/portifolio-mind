import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ProjectFigure } from "@/components/project-figure";
import { getNextProject, getProject, projects } from "@/lib/projects";

export const instant = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Work" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const next = getNextProject(project.slug);

  return (
    <Container className="py-20 sm:py-28">
      <Link
        href="/#work"
        className="text-xs tracking-[0.16em] text-muted-foreground uppercase underline-offset-4 hover:text-foreground hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
      >
        ← All work
      </Link>

      <p className="mt-10 text-xs tracking-[0.16em] text-muted-foreground uppercase">
        <span className="text-signal">Project</span>
        <span className="px-2 text-border" aria-hidden="true">
          /
        </span>
        {project.kind}
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-tight uppercase text-balance sm:text-7xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-2xl text-xl leading-relaxed text-pretty text-muted-foreground">
        {project.summary}
      </p>

      {project.repo ? (
        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex text-sm underline decoration-foreground/30 underline-offset-4 hover:decoration-signal"
        >
          Open on GitHub ↗
        </a>
      ) : null}

      <div className="mt-10">
        <ProjectFigure slug={project.slug} />
      </div>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Stack">
        {project.stack.map((item) => (
          <li
            key={item}
            className="border border-border px-2.5 py-1 font-mono text-[0.7rem] tracking-[0.14em] uppercase"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-14 grid max-w-2xl gap-12">
        <section>
          <h2 className="font-display text-3xl tracking-tight uppercase">The problem</h2>
          <p className="mt-4 text-lg leading-relaxed text-pretty">{project.problem}</p>
        </section>
        <section>
          <h2 className="font-display text-3xl tracking-tight uppercase">What I kept</h2>
          <ul className="mt-4 flex flex-col gap-4">
            {project.kept.map((item) => (
              <li key={item} className="border-l border-signal pl-4 text-base leading-relaxed">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-3xl tracking-tight uppercase">What I left out</h2>
          <ul className="mt-4 flex flex-col gap-4">
            {project.leftOut.map((item) => (
              <li
                key={item}
                className="border-l border-foreground/25 pl-4 text-base leading-relaxed text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {next ? (
        <Link
          href={`/work/${next.slug}`}
          className="group mt-16 flex items-end justify-between gap-6 border-t border-border pt-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
        >
          <span>
            <span className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
              Next project
            </span>
            <span className="mt-2 block font-display text-4xl tracking-tight uppercase sm:text-5xl">
              {next.title}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="pb-1 text-2xl text-muted-foreground transition-transform group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          >
            →
          </span>
        </Link>
      ) : null}
    </Container>
  );
}
