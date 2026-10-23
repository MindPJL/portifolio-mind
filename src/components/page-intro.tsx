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
    <header className="max-w-2xl">
      <p className="font-mono text-xs tracking-[0.16em] text-muted-foreground uppercase">
        <span className="text-signal">{index}</span>
        <span className="px-2 text-border" aria-hidden="true">
          /
        </span>
        {kicker}
      </p>
      <h1 className="mt-4 font-serif text-5xl tracking-tight text-balance sm:text-6xl">
        {title}
      </h1>
      <div className="mt-6 text-lg leading-relaxed text-pretty text-muted-foreground">
        {children}
      </div>
    </header>
  );
}
