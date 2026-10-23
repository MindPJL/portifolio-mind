export function SectionLabel({
  index,
  title,
  lede,
}: {
  index: string;
  title: string;
  lede: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs tracking-[0.18em] text-signal uppercase">
        {index} /
      </p>
      <h2 className="mt-3 font-serif text-4xl tracking-tight text-balance sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
        {lede}
      </p>
    </div>
  );
}
