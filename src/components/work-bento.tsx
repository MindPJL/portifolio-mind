"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ProjectFigure } from "@/components/project-figure";
import type { ProjectSummary } from "@/lib/projects";

const filters = ["All", "Interface", "Systems", "Tool"] as const;
type Filter = (typeof filters)[number];

export function WorkBento({ projects }: { projects: ProjectSummary[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.kind === filter);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" aria-label="Filter studies" className="flex flex-wrap gap-2">
          {filters.map((item) => {
            const selected = filter === item;
            return (
              <Button
                key={item}
                type="button"
                role="tab"
                size="sm"
                variant={selected ? "default" : "outline"}
                aria-selected={selected}
                className="h-10 cursor-pointer px-3"
                onClick={() => setFilter(item)}
              >
                {item}
              </Button>
            );
          })}
        </div>
        <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {visible.length === 0
            ? "Nothing filed here"
            : visible.length === 1
              ? "1 study"
              : `${visible.length} studies`}
        </p>
      </div>

      {visible.length === 0 ? (
        <p className="border border-border px-6 py-16 text-lg">
          {filter === "All"
            ? "Nothing on the shelf yet."
            : `Nothing filed under ${filter} yet.`}
        </p>
      ) : (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {visible.map((project, index) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`bento-card group flex flex-col border border-border bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal ${
                index === 0 && filter === "All" ? "xl:col-span-2" : ""
              }`}
            >
              <ProjectFigure slug={project.slug} className="border-0 border-b" />
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-mono text-xs text-signal">{project.index}</span>
                  <span className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                    {project.kind}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-3xl tracking-tight">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {project.summary}
                </p>
                <p className="mt-5 flex items-center justify-between gap-3 font-mono text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                  <span>{project.stack.join(" · ")}</span>
                  <span
                    aria-hidden="true"
                    className="text-base text-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-none"
                  >
                    ↗
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
