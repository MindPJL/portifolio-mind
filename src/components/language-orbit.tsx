"use client";

import { useMemo, useRef, useState, type PointerEvent } from "react";
import { useLanguage } from "@/components/language-provider";
import { languages, type Language } from "@/lib/languages";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function LanguageOrbit() {
  const { dictionary } = useLanguage();
  const t = dictionary.languagesPage;
  const [activeId, setActiveId] = useState(languages[0]?.id ?? "typescript");
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const stageRef = useRef<HTMLDivElement>(null);

  const active = languages.find((item) => item.id === activeId) ?? languages[0];
  const detail = t.details[active.id];

  const nodes = useMemo(() => {
    const count = languages.length;
    return languages.map((lang, index) => {
      const angle = (index / count) * Math.PI * 2 - Math.PI / 2;
      const radius = 34 + (index % 2) * 4;
      return { lang, angle, radius };
    });
  }, []);

  function onMove(event: PointerEvent<HTMLDivElement>) {
    const rect = stageRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setPointer({ x: x * 18, y: y * 14 });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div
        ref={stageRef}
        onPointerMove={onMove}
        onPointerLeave={() => setPointer({ x: 0, y: 0 })}
        className="relative mx-auto aspect-square w-full max-w-[520px] select-none"
        role="listbox"
        aria-label={t.pick}
      >
        <div
          aria-hidden="true"
          className="absolute inset-[12%] rounded-full border border-white/10"
          style={{
            transform: `translate(${pointer.x * 0.15}px, ${pointer.y * 0.15}px)`,
            transition: "transform 200ms ease-out",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-[22%] rounded-full border border-[#ff385b33]"
          style={{
            transform: `translate(${pointer.x * 0.28}px, ${pointer.y * 0.28}px)`,
            transition: "transform 220ms ease-out",
          }}
        />
        <div
          className="orbit-core absolute top-1/2 left-1/2 grid size-[28%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#1a141fcc] shadow-[0_0_60px_#ff385b33] backdrop-blur-md"
          style={{
            transform: `translate(calc(-50% + ${pointer.x * 0.4}px), calc(-50% + ${pointer.y * 0.4}px))`,
            transition: "transform 180ms ease-out",
          }}
        >
          <span className="font-display text-4xl font-bold tracking-tight uppercase sm:text-5xl">
            {active.short}
          </span>
        </div>

        {nodes.map(({ lang, angle, radius }) => (
          <OrbitNode
            key={lang.id}
            lang={lang}
            angle={angle}
            radius={radius}
            active={lang.id === activeId}
            pointer={pointer}
            onSelect={() => setActiveId(lang.id)}
          />
        ))}
      </div>

      <div className="rounded-[28px] border border-white/15 bg-[#160f19] p-6 sm:p-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
          {t.level[active.level]}
        </p>
        <h3 className="mt-3 font-display text-5xl uppercase tracking-tight">
          {active.name}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {detail?.blurb}
        </p>
        <div className="mt-6">
          <p className="text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
            {t.focus}
          </p>
          <p className="mt-2 text-sm text-[#e6d7e8]">{detail?.use}</p>
        </div>
        <div className="mt-6">
          <p className="text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
            {t.sample}
          </p>
          <pre className="mt-3 overflow-x-auto rounded-2xl border border-white/10 bg-[#100d14] p-4 font-mono text-[12px] leading-relaxed text-[#ffd1ca] sm:text-[13px]">
            <code>{detail?.sample}</code>
          </pre>
        </div>
        <div className="mt-6">
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${active.weight}%`,
                background: `linear-gradient(90deg, ${active.accent}, #ff385b)`,
              }}
            />
          </div>
        </div>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex text-sm text-muted-foreground underline decoration-white/20 underline-offset-4 transition-colors hover:text-foreground hover:decoration-primary"
        >
          {t.githubNote}
        </a>
      </div>
    </div>
  );
}

function OrbitNode({
  lang,
  angle,
  radius,
  active,
  pointer,
  onSelect,
}: {
  lang: Language;
  angle: number;
  radius: number;
  active: boolean;
  pointer: { x: number; y: number };
  onSelect: () => void;
}) {
  const x = 50 + Math.cos(angle) * radius + pointer.x * 0.08;
  const y = 50 + Math.sin(angle) * radius + pointer.y * 0.08;

  return (
    <button
      type="button"
      role="option"
      aria-selected={active}
      onClick={onSelect}
      onFocus={onSelect}
      className={cn(
        "absolute z-10 flex size-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border text-center transition-all duration-300 sm:size-20",
        active
          ? "scale-110 border-primary bg-[#2a1624] shadow-[0_0_40px_#ff385b44]"
          : "border-white/15 bg-[#1a141fcc] hover:scale-105 hover:border-white/40",
      )}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        boxShadow: active ? `0 0 40px ${lang.accent}55` : undefined,
      }}
    >
      <span
        className="size-2 rounded-full"
        style={{ background: lang.accent }}
        aria-hidden="true"
      />
      <span className="mt-1 font-display text-sm uppercase tracking-tight sm:text-base">
        {lang.short}
      </span>
    </button>
  );
}
