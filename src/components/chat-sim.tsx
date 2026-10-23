"use client";

import { useEffect, useRef, useState } from "react";
import { conversation, type ChatLine } from "@/lib/conversation";
import { cn } from "@/lib/utils";

function Avatar({ from }: { from: ChatLine["from"] }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-8 shrink-0 place-items-center rounded-full text-xs font-bold",
        from === "mind" ? "bg-primary text-primary-foreground" : "bg-violet text-background",
      )}
    >
      {from === "mind" ? "M" : "Y"}
    </span>
  );
}

function TypingBubble() {
  return (
    <div className="flex items-end gap-3">
      <Avatar from="mind" />
      <div className="rounded-2xl border border-border bg-card px-4 py-3">
        <span className="sr-only">Mind is typing</span>
        <span aria-hidden="true" className="flex items-center gap-1.5">
          <span className="typing-dot size-1.5 rounded-full bg-foreground" />
          <span className="typing-dot size-1.5 rounded-full bg-foreground" />
          <span className="typing-dot size-1.5 rounded-full bg-foreground" />
        </span>
      </div>
    </div>
  );
}

export function ChatSim() {
  const [shown, setShown] = useState(0);
  const [typing, setTyping] = useState(true);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let timer = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const reveal = (count: number) => {
      if (cancelled) {
        return;
      }
      if (reduce) {
        setShown(conversation.length);
        setTyping(true);
        return;
      }
      setTyping(true);
      timer = window.setTimeout(() => {
        if (cancelled) {
          return;
        }
        const next = count + 1;
        setShown(next);
        setTyping(true);
        if (next < conversation.length) {
          timer = window.setTimeout(() => reveal(next), 700);
        }
      }, 900);
    };

    timer = window.setTimeout(() => reveal(0), 0);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const log = logRef.current;
    if (!log) {
      return;
    }
    log.scrollTop = log.scrollHeight;
  }, [shown, typing]);

  const visible = conversation.slice(0, shown);

  return (
    <div className="flex h-full min-h-[32rem] flex-col overflow-hidden rounded-2xl border border-border bg-[#19111d]">
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <div>
          <p className="text-sm font-semibold">Mind</p>
          <p className="text-xs text-muted-foreground">@mind · DM</p>
        </div>
        <p className="text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
          Live sample
        </p>
      </div>
      <div ref={logRef} className="flex flex-1 flex-col gap-4 overflow-y-auto p-4">
        {visible.map((line) => (
          <div
            key={line.id}
            className={cn("flex items-end gap-3", line.from === "visitor" && "flex-row-reverse")}
          >
            <Avatar from={line.from} />
            <div
              className={cn(
                "max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed",
                line.from === "mind"
                  ? "bg-[#2a1628] text-foreground"
                  : "border border-border bg-card",
              )}
            >
              {line.time ? (
                <p className="mb-1 text-[0.65rem] tracking-[0.12em] text-muted-foreground uppercase">
                  {line.time}
                </p>
              ) : null}
              <p>{line.text}</p>
              {line.attachment ? (
                <div className="mt-3 rounded-xl border border-white/15 bg-black/20 p-3">
                  <p className="text-[0.7rem] tracking-[0.14em] uppercase">
                    {line.attachment.name} ↗
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{line.attachment.detail}</p>
                </div>
              ) : null}
            </div>
          </div>
        ))}
        {typing ? <TypingBubble /> : null}
      </div>
      <div className="border-t border-border px-4 py-3 text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
        A sample thread. Nothing here is sent.
      </div>
    </div>
  );
}
