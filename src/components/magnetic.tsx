"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Magnetic({
  children,
  className,
  strength = 12,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(event: PointerEvent<HTMLDivElement>) {
    const node = ref.current;
    if (!node) {
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      return;
    }
    const rect = node.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * strength;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * strength;
    node.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${-y * 0.35}deg) rotateY(${x * 0.35}deg)`;
  }

  function onLeave() {
    const node = ref.current;
    if (!node) {
      return;
    }
    node.style.transform = "translate3d(0,0,0) rotateX(0) rotateY(0)";
  }

  return (
    <div className={cn("[perspective:900px]", className)}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        className="magnetic-surface h-full transition-transform duration-200 ease-out will-change-transform"
      >
        {children}
      </div>
    </div>
  );
}
