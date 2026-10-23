import type { ReactNode } from "react";

export function PageIntro({
  index,
  kicker,
  title,
  children,
}: {
  index: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="max-w-2xl pt-16">
      <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
        <span className="text-signal">{index}</span>
        <span className="px-2 text-border" aria-hidden="true">
          /
        </span>
        {kicker}
      </p>
      <h1 className="mt-4 font-display text-[clamp(3.5rem,8vw,5.5rem)] leading-[0.9] font-bold tracking-tight uppercase">
        {title}
      </h1>
      <div className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
        {children}
      </div>
    </header>
  );
}
