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
        <div
          role="tablist"
          aria-label="Filter studies"
          className="inline-flex flex-wrap gap-1 rounded-full border border-white/15 bg-[#201723] p-1"
        >
          {filters.map((item) => {
            const selected = filter === item;
            return (
              <Button
                key={item}
                type="button"
                role="tab"
                size="sm"
                variant={selected ? "default" : "ghost"}
                aria-selected={selected}
                className={`h-10 cursor-pointer rounded-full px-4 ${
                  selected ? "" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setFilter(item)}
              >
                {item === "All" ? "Studies" : item}
              </Button>
            );
          })}
        </div>
        <Link
          href="/#pricing"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View pricing <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-border bg-card px-6 py-16 text-lg">
          Nothing filed under {filter} yet.
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="bento-card group overflow-hidden rounded-2xl border border-border bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
            >
              <ProjectFigure slug={project.slug} className="rounded-none border-0 border-b border-border" />
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {project.index} / {project.kind}
                  </p>
                  <h3 className="mt-2 font-display text-3xl tracking-tight uppercase">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="mt-1 text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
