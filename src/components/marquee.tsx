const items = [
  "Clear names",
  "Small parts",
  "Honest errors",
  "Plain files",
  "A way out",
  "Empty, wrong, waiting",
];

export function Marquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-ink text-background">
      <div className="marquee-track flex w-max" aria-hidden="true">
        {[0, 1].map((copy) => (
          <p
            key={copy}
            className="flex shrink-0 items-center gap-8 py-4 pr-8 font-mono text-xs tracking-[0.18em] uppercase"
          >
            {items.map((item) => (
              <span key={`${copy}-${item}`} className="flex items-center gap-8">
                <span>{item}</span>
                <span aria-hidden="true" className="text-signal-soft">
                  ✶
                </span>
              </span>
            ))}
          </p>
        ))}
      </div>
    </div>
  );
}
