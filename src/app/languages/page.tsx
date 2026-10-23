"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { LanguageOrbit } from "@/components/language-orbit";
import { Reveal } from "@/components/reveal";
import { useLanguage } from "@/components/language-provider";
import { site } from "@/lib/site";

export default function LanguagesPage() {
  const { dictionary } = useLanguage();
  const t = dictionary.languagesPage;

  return (
    <Container className="py-20 sm:py-28">
      <Reveal>
        <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
          {t.kicker}
        </p>
        <h1 className="mt-4 font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] font-bold tracking-tight uppercase">
          {t.title}
          <em className="accent-text mt-2 block not-italic">{t.accent}</em>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {t.lede}
        </p>
      </Reveal>

      <Reveal delay={140} className="mt-14">
        <LanguageOrbit />
      </Reveal>

      <Reveal delay={220} className="mt-14 flex flex-wrap gap-6 text-sm">
        <Link
          href="/#work"
          className="underline decoration-foreground/30 underline-offset-4 hover:decoration-signal"
        >
          {dictionary.aboutPage.seeWork}
        </Link>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="underline decoration-foreground/30 underline-offset-4 hover:decoration-signal"
        >
          {dictionary.onGithub}
        </a>
        <Link
          href="/#contact"
          className="underline decoration-foreground/30 underline-offset-4 hover:decoration-signal"
        >
          {dictionary.aboutPage.writeNote}
        </Link>
      </Reveal>
    </Container>
  );
}
