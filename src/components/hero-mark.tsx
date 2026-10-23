"use client";

import { useEffect, useRef } from "react";

type Particle = {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  stroke: number;
  index: number;
  signal: boolean;
};

const strokes = [
  [
    [0.14, 0.82],
    [0.14, 0.16],
  ],
  [
    [0.14, 0.16],
    [0.5, 0.56],
  ],
  [
    [0.5, 0.56],
    [0.86, 0.16],
  ],
  [
    [0.86, 0.16],
    [0.86, 0.82],
  ],
] as const;

function buildParticles(width: number, height: number) {
  const particles: Particle[] = [];
  const samples = 28;

  strokes.forEach((stroke, strokeIndex) => {
    const [start, end] = stroke;
    for (let copy = 0; copy < 2; copy += 1) {
      const offset = copy === 0 ? 0 : 0.03;
      for (let step = 0; step < samples; step += 1) {
        const t = step / (samples - 1);
        const nx = start[0] + (end[0] - start[0]) * t + offset;
        const ny = start[1] + (end[1] - start[1]) * t;
        const x = nx * width;
        const y = ny * height;
        particles.push({
          homeX: x,
          homeY: y,
          x,
          y,
          stroke: strokeIndex * 2 + copy,
          index: step,
          signal: step % 6 === 0,
        });
      }
    }
  });

  return particles;
}

export function HeroMark({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const pointer = { x: 0, y: 0, inside: false };
    let particles: Particle[] = [];
    let frame = 0;
    let running = true;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const radius = 130;

    const layout = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      particles = buildParticles(rect.width, rect.height);
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const ink = "#fff4ec";
      const signal = "#ff385b";
      const coral = "#ff976b";
      context.clearRect(0, 0, rect.width, rect.height);

      for (const particle of particles) {
        let influence = 0;
        if (!reduce && pointer.inside) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy) || 1;
          if (distance < radius) {
            influence = (radius - distance) / radius;
            const push = influence * influence * 70;
            particle.x += (dx / distance) * push;
            particle.y += (dy / distance) * push;
            particle.x += (Math.random() - 0.5) * influence * 32;
            particle.y += (Math.random() - 0.5) * influence * 32;
          }
        }
        particle.x += (particle.homeX - particle.x) * 0.08;
        particle.y += (particle.homeY - particle.y) * 0.08;

        const next = particles.find(
          (item) => item.stroke === particle.stroke && item.index === particle.index + 1,
        );
        if (next && influence < 0.35) {
          const gap = Math.hypot(next.x - particle.x, next.y - particle.y);
          if (gap < 22) {
            context.globalAlpha = (1 - influence) * 0.55;
            context.strokeStyle = particle.signal ? signal : ink;
            context.lineWidth = 1.4;
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(next.x, next.y);
            context.stroke();
          }
        }

        context.globalAlpha = 0.35 + (1 - influence) * 0.65;
        context.fillStyle = particle.signal ? (influence > 0.2 ? coral : signal) : ink;
        context.beginPath();
        context.arc(particle.x, particle.y, 2 * (1 - influence * 0.4), 0, Math.PI * 2);
        context.fill();
      }
      context.globalAlpha = 1;
    };

    const loop = () => {
      if (!running) {
        return;
      }
      draw();
      frame = window.requestAnimationFrame(loop);
    };

    layout();
    if (reduce) {
      draw();
    } else {
      loop();
    }

    const observer = new ResizeObserver(() => {
      layout();
      if (reduce) {
        draw();
      }
    });
    observer.observe(canvas);

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.inside = true;
    };
    const onLeave = () => {
      pointer.inside = false;
    };

    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "h-[280px] w-full touch-none sm:h-[380px]"}
      aria-hidden="true"
    />
  );
}
