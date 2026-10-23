import { cn } from "@/lib/utils";

function LedgerMark() {
  const rows = [
    { y: 78, label: "001", amount: "1,200", hot: false },
    { y: 138, label: "002", amount: "450", hot: false },
    { y: 198, label: "003", amount: "8,000", hot: true },
    { y: 258, label: "004", amount: "1,820", hot: false },
    { y: 318, label: "005", amount: "90", hot: false },
  ];

  return (
    <svg viewBox="0 0 800 400" className="h-full w-full font-mono">
      {rows.map((row) => (
        <g key={row.label}>
          {row.hot ? (
            <rect x="40" y={row.y - 28} width="720" height="52" fill="var(--signal)" />
          ) : null}
          <text
            x="64"
            y={row.y}
            fill={row.hot ? "var(--background)" : "currentColor"}
            opacity={row.hot ? 1 : 0.55}
            fontSize="14"
          >
            {row.label}
          </text>
          <line
            x1="140"
            y1={row.y - 4}
            x2="600"
            y2={row.y - 4}
            stroke={row.hot ? "var(--background)" : "currentColor"}
            strokeOpacity={row.hot ? 0.65 : 0.35}
          />
          <text
            x="736"
            y={row.y}
            textAnchor="end"
            fill={row.hot ? "var(--background)" : "currentColor"}
            opacity={row.hot ? 1 : 0.9}
            fontSize="14"
          >
            {row.amount}
          </text>
        </g>
      ))}
    </svg>
  );
}

function QuietMark() {
  const lines = [168, 132, 196, 104, 156, 72];

  return (
    <svg viewBox="0 0 800 400" className="h-full w-full">
      <rect
        x="268"
        y="56"
        width="264"
        height="288"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.22"
      />
      {lines.map((width, index) => (
        <rect
          key={`${index}-${width}`}
          x={400 - width / 2}
          y={100 + index * 36}
          width={width}
          height="7"
          fill={index === 3 ? "var(--signal)" : "currentColor"}
          opacity={index === 3 ? 1 : 0.4}
        />
      ))}
    </svg>
  );
}

function TraceMark() {
  const rows = [
    { y: 56, w: 440, h: 14, hot: false },
    { y: 86, w: 260, h: 14, hot: false },
    { y: 116, w: 660, h: 96, hot: true },
    { y: 228, w: 340, h: 14, hot: false },
    { y: 258, w: 200, h: 14, hot: false },
    { y: 288, w: 390, h: 14, hot: false },
    { y: 318, w: 150, h: 14, hot: false },
  ];

  return (
    <svg viewBox="0 0 800 400" className="h-full w-full">
      {rows.map((row) => (
        <g key={row.y}>
          <circle
            cx="52"
            cy={row.y + row.h / 2}
            r="3.5"
            fill={row.hot ? "var(--signal)" : "currentColor"}
            opacity={row.hot ? 1 : 0.4}
          />
          <rect
            x="76"
            y={row.y}
            width={row.w}
            height={row.h}
            fill={row.hot ? "var(--signal)" : "currentColor"}
            opacity={row.hot ? 0.95 : 0.16}
          />
          {row.hot ? (
            <g>
              <rect x="98" y={row.y + 22} width="210" height="8" fill="var(--background)" opacity="0.9" />
              <rect x="98" y={row.y + 44} width="430" height="8" fill="var(--background)" opacity="0.55" />
              <rect x="98" y={row.y + 66} width="150" height="8" fill="var(--background)" opacity="0.55" />
            </g>
          ) : null}
        </g>
      ))}
    </svg>
  );
}

function FieldMark() {
  const lines = [430, 360, 470, 250];

  return (
    <svg viewBox="0 0 800 400" className="h-full w-full" fill="none">
      <path
        d="M64 108h168l22 28h482v196H64V108z"
        stroke="currentColor"
        strokeOpacity="0.85"
        strokeWidth="2"
      />
      <path d="M64 136h672" stroke="currentColor" strokeOpacity="0.3" />
      {lines.map((width, index) => (
        <rect
          key={`${index}-${width}`}
          x="104"
          y={168 + index * 36}
          width={width}
          height="8"
          fill={index === lines.length - 1 ? "var(--signal)" : "currentColor"}
          opacity={index === lines.length - 1 ? 1 : 0.45}
        />
      ))}
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
  ledger: LedgerMark,
  quiet: QuietMark,
  trace: TraceMark,
  field: FieldMark,
  mark: MarkPlate,
};

export function ProjectFigure({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Mark = marks[slug as keyof typeof marks] ?? LedgerMark;

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
