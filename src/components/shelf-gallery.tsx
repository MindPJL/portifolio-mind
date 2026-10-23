"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ProjectFigure } from "@/components/project-figure";

export type Plate = {
  slug: string;
  title: string;
  caption: string;
};

const zooms = [
  { id: "fit", label: "Fit" },
  { id: "100", label: "100%" },
  { id: "150", label: "150%" },
] as const;

type Zoom = (typeof zooms)[number]["id"];

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function ShelfGallery({ plates }: { plates: Plate[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState<Zoom>("fit");
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const open = openIndex !== null;
  const plate = openIndex === null ? null : plates[openIndex];

  useEffect(() => {
    if (!open) {
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenIndex(null);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setOpenIndex((current) =>
          current === null ? current : Math.min(plates.length - 1, current + 1),
        );
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setOpenIndex((current) => (current === null ? current : Math.max(0, current - 1)));
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, plates.length]);

  const width =
    zoom === "fit" ? "min(100%, 60rem)" : zoom === "100" ? "60rem" : "90rem";

  return (
    <>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {plates.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            className="bento-card border border-border bg-card text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            onClick={() => {
              setZoom("fit");
              setOpenIndex(index);
            }}
          >
            <ProjectFigure slug={item.slug} className="border-0 border-b" />
            <span className="flex items-baseline justify-between gap-3 p-4">
              <span className="font-serif text-2xl tracking-tight">{item.title}</span>
              <span className="font-mono text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                {pad(index + 1)} / {pad(plates.length)}
              </span>
            </span>
          </button>
        ))}
      </div>

      {plate && openIndex !== null ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          className="fixed inset-0 z-[60] flex flex-col bg-ink text-background outline-none"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-background/15 px-4 py-3 sm:px-6">
            <p className="font-mono text-xs tracking-[0.16em] uppercase">
              <span id={titleId}>{plate.title}</span>
              <span className="px-3 text-background/50" aria-hidden="true">
                /
              </span>
              <span>
                {pad(openIndex + 1)} / {pad(plates.length)}
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <div role="group" aria-label="Zoom" className="flex gap-1">
                {zooms.map((item) => (
                  <Button
                    key={item.id}
                    type="button"
                    size="sm"
                    variant={zoom === item.id ? "default" : "outline"}
                    aria-pressed={zoom === item.id}
                    className="h-9 cursor-pointer border-background/30 bg-transparent px-3 text-background hover:bg-background/10"
                    onClick={() => setZoom(item.id)}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
              <Button
                type="button"
                variant="outline"
                className="h-9 cursor-pointer border-background/30 bg-transparent text-background hover:bg-background/10"
                onClick={() => setOpenIndex(null)}
              >
                Close
              </Button>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center overflow-auto p-4 sm:p-8">
            <div style={{ width }} className="max-w-none shrink-0">
              <ProjectFigure slug={plate.slug} className="border-background/20" />
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-background/75">
                {plate.caption}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 border-t border-background/15 px-4 py-3">
            <Button
              type="button"
              variant="outline"
              className="h-10 cursor-pointer border-background/30 bg-transparent text-background hover:bg-background/10"
              disabled={openIndex === 0}
              onClick={() => setOpenIndex((current) => (current === null ? current : current - 1))}
            >
              Previous
            </Button>
            <p className="font-mono text-[0.7rem] tracking-[0.14em] text-background/60 uppercase">
              Esc to close · arrows to move
            </p>
            <Button
              type="button"
              variant="outline"
              className="h-10 cursor-pointer border-background/30 bg-transparent text-background hover:bg-background/10"
              disabled={openIndex === plates.length - 1}
              onClick={() => setOpenIndex((current) => (current === null ? current : current + 1))}
            >
              Next
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}
