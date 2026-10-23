"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Magnetic } from "@/components/magnetic";
import { useLanguage } from "@/components/language-provider";
import { Button } from "@/components/ui/button";
import { ProjectFigure } from "@/components/project-figure";
import { projects } from "@/lib/projects";

const filterKeys = ["all", "interface", "tool"] as const;
type FilterKey = (typeof filterKeys)[number];

export function WorkBento() {
  const { dictionary } = useLanguage();
  const [filter, setFilter] = useState<FilterKey>("all");

  const items = useMemo(() => {
    return projects.map((project) => {
      const copy = dictionary.projects[project.slug];
      return {
        slug: project.slug,
        index: project.index,
        title: dictionary.projectTitles[project.slug] ?? project.title,
        kind: copy?.kind ?? project.kind,
        summary: copy?.summary ?? project.summary,
        stack: project.stack,
        repo: project.repo,
        kindKey: project.kind.toLowerCase() as "interface" | "systems" | "tool",
      };
    });
  }, [dictionary]);

  const visible =
    filter === "all" ? items : items.filter((item) => item.kindKey === filter);

  const labels = {
    all: dictionary.work.filters.all,
    interface: dictionary.work.filters.interface,
    tool: dictionary.work.filters.tool,
  };

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div
          role="tablist"
          aria-label={dictionary.work.filters.all}
          className="inline-flex flex-wrap gap-1 rounded-full border border-white/15 bg-[#201723] p-1"
        >
          {filterKeys.map((item) => {
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
                  selected ? "bg-[#ff385b] text-[#fff4ec]" : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setFilter(item)}
              >
                {labels[item]}
              </Button>
            );
          })}
        </div>
        <Link
          href="/languages"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {dictionary.work.viewLanguages} <span aria-hidden="true">↗</span>
        </Link>
      </div>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-border bg-card px-6 py-16 text-lg">
          {dictionary.work.empty}
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {visible.map((project, index) => (
            <Magnetic key={project.slug} strength={10}>
              <Link
                href={`/work/${project.slug}`}
                className="bento-card group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                <ProjectFigure
                  slug={project.slug}
                  className="rounded-none border-0 border-b border-border"
                />
                <div className="flex flex-1 items-start justify-between gap-4 p-5">
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
            </Magnetic>
          ))}
        </div>
      )}
    </div>
  );
}
