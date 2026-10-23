import type { ReactNode } from "react";

export function SectionLabel({
  index,
  title,
  accent,
  lede,
}: {
  index: string;
  title: ReactNode;
  accent?: string;
  lede: string;
}) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <p className="mb-5 text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
          {index}
        </p>
        <h2 className="text-[clamp(3.5rem,6.8vw,6.5rem)] leading-[0.91] font-bold tracking-[-0.018em] uppercase">
          <span className="block">{title}</span>
          {accent ? <em className="accent-text mt-1 block not-italic">{accent}</em> : null}
        </h2>
      </div>
      <p className="max-w-sm text-base leading-relaxed text-pretty text-muted-foreground lg:text-[17px]">
        {lede}
      </p>
    </div>
  );
}
