"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { ProjectSummary } from "@/lib/projects";

const filters = ["All", "Interface", "Tool"] as const;
type Filter = (typeof filters)[number];

export function WorkList({
  projects,
  showFilter = false,
}: {
  projects: ProjectSummary[];
  showFilter?: boolean;
}) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.kind === filter);

  const countLabel =
    visible.length === 1 ? "1 project" : `${visible.length} projects`;

  return (
    <div>
      {showFilter ? (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {filters.map((item) => {
              const selected = filter === item;
              return (
                <Button
                  key={item}
                  type="button"
                  size="sm"
                  variant={selected ? "default" : "outline"}
                  aria-pressed={selected}
                  className="h-10 cursor-pointer px-3"
                  onClick={() => setFilter(item)}
                >
                  {item}
                </Button>
              );
            })}
          </div>
          <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
            {visible.length === 0 ? "Nothing filed here" : countLabel}
          </p>
        </div>
      ) : null}

      {visible.length === 0 ? (
        <p className="border-y border-border py-16 text-lg text-pretty">
          {filter === "All"
            ? "Nothing on the shelf yet."
            : `Nothing filed under ${filter} yet.`}
        </p>
      ) : (
        <div className="border-b border-border">
          {visible.map((project) => (
            <StudyRow key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
}

function StudyRow({ project }: { project: ProjectSummary }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group -mx-5 block border-t border-border px-5 py-8 transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-signal sm:-mx-8 sm:px-8"
    >
      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-xs text-signal">{project.index}</span>
        <span className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
          {project.kind}
        </span>
      </div>
      <h2 className="mt-3 flex items-baseline justify-between gap-4 font-display text-3xl tracking-tight uppercase sm:text-4xl">
        <span>{project.title}</span>
        <span
          aria-hidden="true"
          className="text-muted-foreground transition-transform group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
        >
          →
        </span>
      </h2>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground">
        {project.summary}
      </p>
      <p className="mt-4 font-mono text-xs tracking-wide text-muted-foreground">
        {project.stack.join(" · ")}
      </p>
    </Link>
  );
}
