import { cn } from "@/lib/utils";

function DocinhoMark() {
  return (
    <svg viewBox="0 0 800 400" className="h-full w-full" fill="none">
      <rect x="80" y="64" width="280" height="272" rx="24" stroke="currentColor" strokeOpacity="0.35" />
      <rect x="120" y="110" width="160" height="18" rx="4" fill="var(--signal)" />
      <rect x="120" y="150" width="200" height="10" rx="3" fill="currentColor" opacity="0.35" />
      <rect x="120" y="176" width="170" height="10" rx="3" fill="currentColor" opacity="0.25" />
      <circle cx="560" cy="200" r="110" stroke="var(--signal)" strokeWidth="3" opacity="0.9" />
      <circle cx="560" cy="200" r="70" stroke="currentColor" strokeOpacity="0.25" />
      <path d="M520 220 L560 150 L600 220 Z" fill="var(--signal)" opacity="0.85" />
    </svg>
  );
}

function BoardMark() {
  const cols = [180, 360, 540];
  return (
    <svg viewBox="0 0 800 400" className="h-full w-full" fill="none">
      {cols.map((x, index) => (
        <g key={x}>
          <rect x={x} y="70" width="140" height="260" rx="16" stroke="currentColor" strokeOpacity="0.3" />
          <rect
            x={x + 16}
            y="96"
            width="108"
            height="54"
            rx="10"
            fill={index === 1 ? "var(--signal)" : "currentColor"}
            opacity={index === 1 ? 0.95 : 0.18}
          />
          <rect x={x + 16} y="168" width="108" height="54" rx="10" fill="currentColor" opacity="0.14" />
          <rect x={x + 16} y="240" width="108" height="54" rx="10" fill="currentColor" opacity="0.1" />
        </g>
      ))}
    </svg>
  );
}

function FluentMark() {
  return (
    <svg viewBox="0 0 800 400" className="h-full w-full" fill="none">
      <rect x="120" y="70" width="560" height="260" rx="28" stroke="currentColor" strokeOpacity="0.3" />
      <circle cx="280" cy="200" r="54" fill="currentColor" opacity="0.18" />
      <circle cx="400" cy="200" r="54" fill="var(--signal)" opacity="0.9" />
      <circle cx="520" cy="200" r="54" fill="currentColor" opacity="0.18" />
      <rect x="250" y="280" width="300" height="18" rx="9" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

function HashMark() {
  return (
    <svg viewBox="0 0 800 400" className="h-full w-full font-mono">
      <rect x="100" y="90" width="600" height="70" rx="14" fill="currentColor" opacity="0.12" />
      <text x="130" y="135" fill="currentColor" opacity="0.55" fontSize="22">
        input →
      </text>
      <text x="280" y="135" fill="var(--signal)" fontSize="22">
        sha256(...)
      </text>
      <rect x="100" y="200" width="600" height="90" rx="14" stroke="var(--signal)" strokeWidth="2" />
      <text x="130" y="255" fill="currentColor" fontSize="18">
        7f3a9c…e21b
      </text>
    </svg>
  );
}

function MarkPlate() {
  return (
    <svg viewBox="0 0 800 400" className="h-full w-full" fill="none">
      <path
        d="M170 310 V96 L400 250 L630 96 V310"
        stroke="currentColor"
        strokeWidth="16"
        strokeLinejoin="miter"
      />
      <path
        d="M170 310 V96 L400 250 L630 96 V310"
        stroke="var(--signal)"
        strokeWidth="3"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

const marks = {
  docinho: DocinhoMark,
  board: BoardMark,
  fluent: FluentMark,
  hash: HashMark,
  mark: MarkPlate,
};

export function ProjectFigure({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Mark = marks[slug as keyof typeof marks] ?? DocinhoMark;

  return (
    <div
      className={cn(
        "aspect-[2/1] w-full overflow-hidden border border-border bg-[#241526] text-foreground",
        className,
      )}
      aria-hidden="true"
    >
      <Mark />
    </div>
  );
}
