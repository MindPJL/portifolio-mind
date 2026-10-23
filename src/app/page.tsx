"use client";

import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { ChatSim } from "@/components/chat-sim";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { HeroMark } from "@/components/hero-mark";
import { Marquee } from "@/components/marquee";
import { ProjectFigure } from "@/components/project-figure";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { ShelfGallery, type Plate } from "@/components/shelf-gallery";
import { WorkBento } from "@/components/work-bento";
import { useLanguage } from "@/components/language-provider";
import { projects } from "@/lib/projects";
import { contactEmail, contactHref, site } from "@/lib/site";

export default function Home() {
  const { dictionary } = useLanguage();
  const t = dictionary;

  const plates: Plate[] = [
    ...projects.map((project) => ({
      slug: project.slug,
      title: t.projectTitles[project.slug] ?? project.title,
      caption: t.projects[project.slug]?.summary ?? project.summary,
    })),
    {
      slug: "mark",
      title: t.projectTitles.mark,
      caption: t.shelf.markCaption,
    },
  ];

  return (
    <>
      <span id="top" />

      <section
        id="intro"
        data-section
        className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-[6%] pt-28 pb-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,#98274655,transparent_45%),radial-gradient(ellipse_at_20%_80%,#47328255,transparent_50%)]" />
        <div className="relative mx-auto flex w-full max-w-[900px] flex-col items-center text-center">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
              {site.name.toUpperCase()} / {t.role.toUpperCase()}
            </p>
          </Reveal>
          <Reveal delay={120} variant="scale" className="mt-6 w-full max-w-[520px]">
            <div className="rounded-[22px] border border-white/10 bg-[#1a141fcc] p-4 shadow-[0_30px_80px_#0008] backdrop-blur-sm sm:p-6">
              <HeroMark className="h-[240px] w-full touch-none sm:h-[320px]" />
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 text-xs tracking-[0.16em] text-[#e4bfcc] uppercase">
              {t.intro.caption}
            </p>
          </Reveal>
          <Reveal delay={280}>
            <h2 className="mt-3 font-display text-[clamp(3rem,8vw,5.5rem)] leading-[0.9] font-bold tracking-tight uppercase">
              {t.intro.title}
            </h2>
          </Reveal>
          <Reveal delay={340}>
            <p className="mt-3 text-muted-foreground">{t.intro.hint}</p>
          </Reveal>
          <Reveal delay={400}>
            <a
              href="#hero"
              className="mt-8 inline-flex items-center gap-3 text-[10px] tracking-[0.14em] text-muted-foreground uppercase"
            >
              {t.intro.scroll}
              <span
                aria-hidden="true"
                className="scroll-cue-dot relative h-6 w-3.5 rounded-full border border-muted-foreground"
              />
            </a>
          </Reveal>
        </div>
      </section>

      <section
        id="hero"
        data-section
        className="relative isolate overflow-hidden border-t border-border px-[6%] pt-28 pb-20 sm:min-h-[90svh] sm:pt-36"
      >
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_77%_50%,#98274660,transparent_42%),radial-gradient(ellipse_at_93%_13%,#47328275,transparent_46%),radial-gradient(ellipse_at_3%_90%,#b62f2321,transparent_50%)]" />
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(#ffffff06_1px,transparent_1px),linear-gradient(90deg,#ffffff06_1px,transparent_1px)] [background-size:100px_100px] [mask-image:linear-gradient(90deg,transparent_30%,#000)]"
          aria-hidden="true"
        />

        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div>
            <p className="hero-kicker soft-enter mb-6 flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] text-[#e4bfcc] uppercase">
              <span className="kicker-dot size-1.5 rounded-full bg-primary shadow-[0_0_16px_#ff385b80]" />
              {t.hero.kicker}
            </p>
            <h1 className="font-display text-[clamp(4.5rem,10.4vw,9.5rem)] leading-[0.85] font-bold tracking-[-0.021em] uppercase">
              <span className="hero-line">
                <span>{t.hero.line1}</span>
              </span>
              <span className="hero-line">
                <span>{t.hero.line2}</span>
              </span>
              <span className="hero-line">
                <span className="accent-text">{t.hero.line3}</span>
              </span>
            </h1>
            <p className="soft-enter mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              {t.hero.description1}
              <br />
              {t.hero.description2}
            </p>
            <div className="soft-enter-late mt-7 flex flex-col gap-3 sm:flex-row">
              <ArrowLink href="/#work">{t.hero.explore}</ArrowLink>
              <ArrowLink href="/#pricing" variant="outline">
                {t.hero.pricing}
              </ArrowLink>
            </div>
            <div className="soft-enter-late mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span>
                {t.hero.buildsFrom}{" "}
                <b className="font-medium text-[#e6d7e8]">$800</b>
              </span>
              <span aria-hidden="true" className="size-1 rounded-full bg-muted-foreground" />
              <span>
                {t.hero.clearScope} ·{" "}
                <b className="font-medium text-[#e6d7e8]">{t.hero.honestDelivery}</b>
              </span>
            </div>
          </div>

          <Reveal variant="scale" delay={180} className="relative mx-auto w-full max-w-[480px]">
            <div
              aria-hidden="true"
              className="absolute top-[8%] right-[4%] size-[78%] rounded-full border border-[#e3b3ff35] [transform:rotateX(55deg)_rotateY(-15deg)]"
            />
            <div
              aria-hidden="true"
              className="absolute top-[2%] right-[-2%] size-full rounded-full border border-[#ff8a8024] [transform:rotateX(38deg)_rotateY(45deg)]"
            />
            <div className="float-soft relative overflow-hidden rounded-[22px] border border-white/15 bg-[#1a141fcc] p-4 shadow-[0_30px_80px_#000a] backdrop-blur-sm sm:p-5">
              <HeroMark className="h-[260px] w-full touch-none sm:h-[340px]" />
            </div>
            <div className="float-soft-delay absolute top-[12%] right-0 rotate-12 rounded-[10px] border border-[#ffb7cb35] bg-[#2b172acc] px-4 py-3 text-xs tracking-[0.05em] text-[#ffdcd9] backdrop-blur-md">
              <span className="mr-2 inline-block size-1.5 rounded-full bg-coral" />
              {t.hero.standOut}
            </div>
            <div className="float-soft-delay absolute bottom-[8%] left-0 flex items-center gap-3 rounded-[10px] border border-[#ffb7cb35] bg-[#2b172acc] px-4 py-3 backdrop-blur-md [animation-delay:-2s]">
              <p className="font-display text-4xl font-bold leading-none">04</p>
              <p className="max-w-[7rem] text-[10px] leading-relaxed tracking-[0.08em] text-[#d9bdd5] uppercase">
                {t.hero.studiesShelf}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative z-10 mt-16 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.12em] text-[#99889f] uppercase">
          <span>
            {t.hero.independent} / {site.name}
          </span>
          <span className="inline-flex items-center gap-3">
            <span
              aria-hidden="true"
              className="scroll-cue-dot relative h-6 w-3.5 rounded-full border border-[#99889f]"
            />
            {t.hero.scroll}
          </span>
          <span className="hidden sm:inline">{t.hero.details}</span>
        </div>
      </section>

      <section
        id="snapshot"
        data-section
        className="border-y border-border bg-[#140f18] py-12"
      >
        <Container className="grid items-center gap-10 lg:grid-cols-[auto_1.2fr_1fr]">
          <Reveal>
            <p className="font-display text-[clamp(4rem,8vw,6rem)] leading-none font-bold">
              04<span className="text-primary">+</span>
            </p>
            <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              {t.snapshot.studies}
              <br />
              {t.snapshot.delivered}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              {t.snapshot.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] font-bold uppercase">
              {t.snapshot.title1}
              <br />
              {t.snapshot.title2}
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              {t.snapshot.stack}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["TypeScript", "React", "SQL", "Go", "Terminal"].map((item, index) => (
                <span
                  key={item}
                  className="chip-pop rounded-full border border-white/15 bg-[#201723] px-4 py-2 text-sm"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="work" data-section className="scroll-mt-28 py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionLabel
              index={t.work.index}
              title={t.work.title}
              accent={t.work.accent}
              lede={t.work.lede}
            />
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <WorkBento />
          </Reveal>
          <Reveal delay={200} className="mt-8 flex flex-col justify-between gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center">
            <p>{t.work.foot}</p>
            <p className="tracking-[0.12em] uppercase">{t.work.kinds}</p>
          </Reveal>
        </Container>
      </section>

      <section
        id="results"
        data-section
        className="scroll-mt-28 border-t border-border bg-gradient-to-b from-[#17101d] to-background pb-20 sm:pb-28"
      >
        <div className="pt-8">
          <Marquee />
        </div>
        <Container className="pt-16 sm:pt-20">
          <Reveal>
            <SectionLabel
              index={t.results.index}
              title={t.results.title}
              accent={t.results.accent}
              lede={t.results.lede}
            />
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <Reveal variant="scale">
              <article className="bento-card rounded-2xl border border-[#ffb8d029] bg-gradient-to-br from-[#241624] to-[#1a1420] p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {t.results.numbers}
                  </p>
                  <p className="rounded-full border border-white/15 px-3 py-1 text-xs">
                    {t.results.pause}
                  </p>
                </div>
                <div className="mt-8 grid gap-6 sm:grid-cols-3">
                  {[
                    { value: "04", label: t.results.shelf },
                    { value: "03", label: t.results.rules },
                    { value: "05", label: t.results.tools },
                  ].map((item) => (
                    <div key={item.label}>
                      <p className="font-display text-6xl font-bold leading-none">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 overflow-hidden rounded-xl border border-border">
                  <ProjectFigure slug="trace" className="border-0" />
                </div>
                <p className="mt-4 text-xs text-muted-foreground">{t.results.note}</p>
              </article>
            </Reveal>
            <div className="grid gap-4">
              {t.practice.map((item, index) => (
                <Reveal key={item.index} delay={index * 90} variant="left">
                  <article className="bento-card rounded-2xl border border-border bg-card p-6">
                    <p className="text-xs tracking-[0.14em] text-primary uppercase">
                      {item.index} /
                    </p>
                    <h3 className="mt-3 font-display text-3xl uppercase">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="process" data-section className="scroll-mt-28 border-t border-border py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionLabel
              index={t.process.index}
              title={t.process.title}
              accent={t.process.accent}
              lede={t.process.lede}
            />
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {t.processSteps.map((step, index) => (
              <Reveal key={step.index} delay={index * 80}>
                <article className="bento-card rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs tracking-[0.14em] text-primary uppercase">
                    {step.index}
                  </p>
                  <h3 className="mt-3 font-display text-2xl uppercase">
                    {step.title} <span aria-hidden="true">↗</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <Reveal variant="left">
              <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                {t.process.preview}
              </p>
              <h3 className="mt-3 font-display text-4xl uppercase">{t.process.notesTitle}</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">{t.process.notesBody}</p>
              <ArrowLink href={contactHref} className="mt-6">
                {t.process.talkProduct}
              </ArrowLink>
            </Reveal>
            <Reveal delay={140} variant="scale">
              <ChatSim />
            </Reveal>
          </div>
        </Container>
      </section>

      <section id="shelf" data-section className="scroll-mt-28 border-t border-border py-20 sm:py-28">
        <Container>
          <Reveal>
            <SectionLabel
              index={t.shelf.index}
              title={t.shelf.title}
              accent={t.shelf.accent}
              lede={t.shelf.lede}
            />
          </Reveal>
          <Reveal delay={120} className="mt-12">
            <ShelfGallery plates={plates} />
          </Reveal>
        </Container>
      </section>

      <section id="pricing" data-section className="scroll-mt-28 border-t border-border py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <Reveal className="flex-1">
              <SectionLabel
                index={t.pricing.index}
                title={t.pricing.title}
                accent={t.pricing.accent}
                lede={t.pricing.lede}
              />
            </Reveal>
            <Reveal delay={120}>
              <div className="flex items-center gap-4 rounded-2xl border border-[#ffad9570] bg-card px-5 py-4">
                <span
                  aria-hidden="true"
                  className="relative size-11 rounded-full border border-[#ffad9570] before:absolute before:top-2.5 before:left-5 before:h-3 before:w-2.5 before:border-b-2 before:border-l-2 before:border-coral"
                />
                <div>
                  <p className="text-lg font-semibold">{t.pricing.clearTitle}</p>
                  <p className="text-sm text-muted-foreground">{t.pricing.clearBody}</p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {t.engagements.map((item, index) => (
              <Reveal key={item.name} delay={index * 100}>
                <article
                  className={`bento-card relative flex h-full flex-col overflow-hidden rounded-2xl border p-7 ${
                    item.featured
                      ? "border-primary bg-gradient-to-b from-[#2a1624] to-card"
                      : "border-border bg-card"
                  }`}
                >
                  {item.featured ? (
                    <p className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-primary-foreground uppercase">
                      {t.pricing.mostChosen}
                    </p>
                  ) : null}
                  <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {item.length}
                  </p>
                  <h3 className="mt-3 font-display text-4xl uppercase">{item.name}</h3>
                  <p className="mt-4 font-display text-5xl font-bold">{item.price}</p>
                  <p className="mt-1 text-xs tracking-[0.12em] text-muted-foreground uppercase">
                    {item.unit}
                  </p>
                  <dl className="mt-6 flex flex-1 flex-col gap-4 border-t border-border pt-5 text-sm">
                    <div>
                      <dt className="text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                        {t.pricing.youGet}
                      </dt>
                      <dd className="mt-1">{item.get}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                        {t.pricing.leftOut}
                      </dt>
                      <dd className="mt-1 text-muted-foreground">{item.leave}</dd>
                    </div>
                  </dl>
                  <ArrowLink
                    href={contactHref}
                    variant={item.featured ? "solid" : "outline"}
                    className="mt-6 w-full"
                  >
                    {t.pricing.startNote}
                  </ArrowLink>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-6 rounded-2xl border border-dashed border-white/20 bg-[#201723]/60 px-5 py-4 text-sm text-muted-foreground">
              {t.pricing.bulk}
            </p>
          </Reveal>
        </Container>
      </section>

      <section
        id="contact"
        data-section
        className="scroll-mt-28 relative isolate overflow-hidden border-t border-[#ff9cb130] bg-[radial-gradient(ellipse_at_100%_100%,#8c368b80,transparent_60%),linear-gradient(125deg,#92142d,#d12c4d_60%,#b84861)]"
      >
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_var(--mx)_var(--my),#ffad7340,transparent_55%)]"
          aria-hidden="true"
        />
        <Container className="py-20 sm:py-28">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.14em] text-[#ffd1ca] uppercase">
              {t.contact.index}
            </p>
            <h2 className="mt-6 font-display text-[clamp(4.5rem,12vw,12rem)] leading-[0.84] font-bold tracking-[-0.015em] uppercase">
              {t.contact.title1}
              <br />
              <em className="not-italic text-[#ffbea8]">{t.contact.title2}</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 border-t border-[#ffd6d13d] pt-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal variant="left">
              <div className="flex items-center gap-4">
                <span className="grid size-14 place-items-center rounded-full border-2 border-[#ffbdaa] bg-[#2a0f1d] font-display text-2xl -rotate-6">
                  M
                </span>
                <div>
                  <p className="text-2xl font-semibold tracking-tight">{site.name}</p>
                  <p className="text-sm text-[#ffd1ca]">{t.role}</p>
                </div>
              </div>
              <p className="mt-6 max-w-sm text-[#ffd1ca]">{t.contact.body}</p>
              <Link
                href="/about"
                className="mt-6 inline-flex text-sm underline decoration-[#ffd1ca]/50 underline-offset-4 hover:decoration-foreground"
              >
                {t.contact.longer}
              </Link>
            </Reveal>
            <Reveal delay={140} variant="scale">
              <div className="rounded-2xl border border-white/20 bg-[#160f19ee] p-5 sm:p-7">
                <ContactForm email={contactEmail} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
