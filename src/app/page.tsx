import Link from "next/link";
import { ArrowLink } from "@/components/arrow-link";
import { ChatSim } from "@/components/chat-sim";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { HeroMark } from "@/components/hero-mark";
import { Marquee } from "@/components/marquee";
import { ProjectFigure } from "@/components/project-figure";
import { SectionLabel } from "@/components/section-label";
import { ShelfGallery, type Plate } from "@/components/shelf-gallery";
import { WorkBento } from "@/components/work-bento";
import { engagements, processSteps } from "@/lib/engagements";
import { practice } from "@/lib/practice";
import { projectSummaries, projects } from "@/lib/projects";
import { contactEmail, contactHref, site } from "@/lib/site";

const plates: Plate[] = [
  ...projects.map((project) => ({
    slug: project.slug,
    title: project.title,
    caption: project.summary,
  })),
  {
    slug: "mark",
    title: "Mark",
    caption: "The M on the front door. Pass a cursor across it and it comes apart.",
  },
];

export default function Home() {
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
          <p className="text-xs font-semibold tracking-[0.16em] text-muted-foreground uppercase">
            {site.name.toUpperCase()} / {site.role.toUpperCase()}
          </p>
          <div className="mt-6 w-full max-w-[520px] rounded-[22px] border border-white/10 bg-[#1a141fcc] p-4 shadow-[0_30px_80px_#0008] backdrop-blur-sm sm:p-6">
            <HeroMark className="h-[240px] w-full touch-none sm:h-[320px]" />
          </div>
          <p className="mt-8 text-xs tracking-[0.16em] text-[#e4bfcc] uppercase">
            A different first impression.
          </p>
          <h2 className="mt-3 font-display text-[clamp(3rem,8vw,5.5rem)] leading-[0.9] font-bold tracking-tight uppercase">
            Made to be noticed.
          </h2>
          <p className="mt-3 text-muted-foreground">Move your cursor through the mark.</p>
          <a
            href="#hero"
            className="mt-8 inline-flex items-center gap-3 text-[10px] tracking-[0.14em] text-muted-foreground uppercase"
          >
            Scroll to explore
            <span
              aria-hidden="true"
              className="scroll-cue-dot relative h-6 w-3.5 rounded-full border border-muted-foreground"
            />
          </a>
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
              <span className="size-1.5 rounded-full bg-primary shadow-[0_0_16px_#ff385b80]" />
              Interfaces · Systems · Tools
            </p>
            <h1 className="font-display text-[clamp(4.5rem,10.4vw,9.5rem)] leading-[0.85] font-bold tracking-[-0.021em] uppercase">
              <span className="hero-line">
                <span>Your product.</span>
              </span>
              <span className="hero-line">
                <span>Their next</span>
              </span>
              <span className="hero-line">
                <span className="accent-text">obsession.</span>
              </span>
            </h1>
            <p className="soft-enter mt-6 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
              Big ideas deserve software that still makes sense later.
              <br />
              Let’s make yours impossible to abandon.
            </p>
            <div className="soft-enter-late mt-7 flex flex-col gap-3 sm:flex-row">
              <ArrowLink href="/#work">Explore my work</ArrowLink>
              <ArrowLink href="/#pricing" variant="outline">
                See pricing
              </ArrowLink>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
              <span>
                Builds from <b className="font-medium text-[#e6d7e8]">$800</b>
              </span>
              <span aria-hidden="true" className="size-1 rounded-full bg-muted-foreground" />
              <span>
                Clear scope · <b className="font-medium text-[#e6d7e8]">honest delivery</b>
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[480px]">
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
            <div className="absolute top-[12%] right-0 rotate-12 rounded-[10px] border border-[#ffb7cb35] bg-[#2b172acc] px-4 py-3 text-xs tracking-[0.05em] text-[#ffdcd9] backdrop-blur-md">
              <span className="mr-2 inline-block size-1.5 rounded-full bg-coral" />
              Made to stand out
            </div>
            <div className="absolute bottom-[8%] left-0 flex items-center gap-3 rounded-[10px] border border-[#ffb7cb35] bg-[#2b172acc] px-4 py-3 backdrop-blur-md [animation-delay:-2s]">
              <p className="font-display text-4xl font-bold leading-none">04</p>
              <p className="max-w-[7rem] text-[10px] leading-relaxed tracking-[0.08em] text-[#d9bdd5] uppercase">
                Studies on the shelf
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-16 flex flex-wrap items-center justify-between gap-4 text-[10px] tracking-[0.12em] text-[#99889f] uppercase">
          <span>Independent programmer / {site.name}</span>
          <span className="inline-flex items-center gap-3">
            <span
              aria-hidden="true"
              className="scroll-cue-dot relative h-6 w-3.5 rounded-full border border-[#99889f]"
            />
            Scroll to explore
          </span>
          <span className="hidden sm:inline">Built in the details</span>
        </div>
      </section>

      <section
        id="snapshot"
        data-section
        className="border-y border-border bg-[#140f18] py-12"
      >
        <Container className="grid items-center gap-10 lg:grid-cols-[auto_1.2fr_1fr]">
          <div>
            <p className="font-display text-[clamp(4rem,8vw,6rem)] leading-none font-bold">
              04<span className="text-primary">+</span>
            </p>
            <p className="mt-2 text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Studies
              <br />
              delivered
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Big systems. Small details.
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] font-bold uppercase">
              Worked across products
              <br />
              people actually open.
            </h2>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
              Daily stack
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["TypeScript", "React", "SQL", "Go", "Terminal"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-[#201723] px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="work" data-section className="scroll-mt-28 py-20 sm:py-28">
        <Container>
          <SectionLabel
            index="01 / The first impression"
            title="Small frame."
            accent="Big energy."
            lede="Your product has a story. Give people a reason to step inside — and a way to stay."
          />
          <div className="mt-12">
            <WorkBento projects={projectSummaries()} />
          </div>
          <div className="mt-8 flex flex-col justify-between gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center">
            <p>Thumbnails of the work. Open any study for the full note.</p>
            <p className="tracking-[0.12em] uppercase">Studies / Interfaces / Systems / Tools</p>
          </div>
        </Container>
      </section>

      <section id="results" data-section className="scroll-mt-28 border-t border-border bg-gradient-to-b from-[#17101d] to-background pb-20 sm:pb-28">
        <div className="pt-8">
          <Marquee />
        </div>
        <Container className="pt-16 sm:pt-20">
          <SectionLabel
            index="02 / More than a good look"
            title="Make the click."
            accent="Move the needle."
            lede="A better first impression. A stronger reason to keep building — and to come back."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            <article className="bento-card rounded-2xl border border-[#ffb8d029] bg-gradient-to-br from-[#241624] to-[#1a1420] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                  The numbers behind the work
                </p>
                <p className="rounded-full border border-white/15 px-3 py-1 text-xs">
                  Pause results
                </p>
              </div>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {[
                  { value: "04", label: "Studies on the shelf" },
                  { value: "03", label: "Rules I keep" },
                  { value: "05", label: "Tools I reach for" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="font-display text-6xl font-bold leading-none">{item.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 overflow-hidden rounded-xl border border-border">
                <ProjectFigure slug="trace" className="border-0" />
              </div>
              <p className="mt-4 text-xs text-muted-foreground">
                Results from this site’s own shelf. The curve is a comparison, not a promise.
              </p>
            </article>
            <div className="grid gap-4">
              {practice.map((item) => (
                <article
                  key={item.index}
                  className="bento-card rounded-2xl border border-border bg-card p-6"
                >
                  <p className="text-xs tracking-[0.14em] text-primary uppercase">
                    {item.index} /
                  </p>
                  <h3 className="mt-3 font-display text-3xl uppercase">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="process" data-section className="scroll-mt-28 border-t border-border py-20 sm:py-28">
        <Container>
          <SectionLabel
            index="03 / Simple from start to finish"
            title="Your next build."
            accent="One conversation away."
            lede="Share the idea. See the concept. Love the final. We’ll make it happen together."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article
                key={step.index}
                className="bento-card rounded-2xl border border-border bg-card p-5"
              >
                <p className="text-xs tracking-[0.14em] text-primary uppercase">{step.index}</p>
                <h3 className="mt-3 font-display text-2xl uppercase">
                  {step.title} <span aria-hidden="true">↗</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                A little preview of working together
              </p>
              <h3 className="mt-3 font-display text-4xl uppercase">Notes in the thread.</h3>
              <p className="mt-3 max-w-sm text-muted-foreground">
                A sample conversation — not a live chat. Messages arrive, files land, typing stays when the thought isn’t finished.
              </p>
              <ArrowLink href={contactHref} className="mt-6">
                Let’s talk about your product
              </ArrowLink>
            </div>
            <ChatSim />
          </div>
        </Container>
      </section>

      <section id="shelf" data-section className="scroll-mt-28 border-t border-border py-20 sm:py-28">
        <Container>
          <SectionLabel
            index="04 / A closer look"
            title="The shelf."
            accent="Open anything."
            lede="Click a plate. Esc closes it. Arrow keys move. Fit, 100%, or 150% when you want scale."
          />
          <div className="mt-12">
            <ShelfGallery plates={plates} />
          </div>
        </Container>
      </section>

      <section id="pricing" data-section className="scroll-mt-28 border-t border-border py-20 sm:py-28">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionLabel
              index="05 / Good work. Clear prices."
              title="Big impact."
              accent="No guesswork."
              lede="From idea to a build you can open later. Starting points — the real number depends on the shape of the work."
            />
            <div className="flex items-center gap-4 rounded-2xl border border-[#ffad9570] bg-card px-5 py-4">
              <span
                aria-hidden="true"
                className="relative size-11 rounded-full border border-[#ffad9570] before:absolute before:top-2.5 before:left-5 before:h-3 before:w-2.5 before:border-b-2 before:border-l-2 before:border-coral"
              />
              <div>
                <p className="text-lg font-semibold">Clear from the start.</p>
                <p className="text-sm text-muted-foreground">
                  Scope, timing, and what’s left out — said out loud.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {engagements.map((item) => (
              <article
                key={item.name}
                className={`bento-card relative flex flex-col overflow-hidden rounded-2xl border p-7 ${
                  item.featured
                    ? "border-primary bg-gradient-to-b from-[#2a1624] to-card"
                    : "border-border bg-card"
                }`}
              >
                {item.featured ? (
                  <p className="absolute top-4 right-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-primary-foreground uppercase">
                    Most chosen
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
                      You get
                    </dt>
                    <dd className="mt-1">{item.get}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                      Left out
                    </dt>
                    <dd className="mt-1 text-muted-foreground">{item.leave}</dd>
                  </div>
                </dl>
                <ArrowLink
                  href={contactHref}
                  variant={item.featured ? "solid" : "outline"}
                  className="mt-6 w-full"
                >
                  Start with a note
                </ArrowLink>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-2xl border border-dashed border-white/20 bg-[#201723]/60 px-5 py-4 text-sm text-muted-foreground">
            Save time when ordering more than one pass. Mix a read and a build however you like — we’ll confirm brief, timing, and availability in a note.
          </p>
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
          <p className="text-xs font-semibold tracking-[0.14em] text-[#ffd1ca] uppercase">
            06 / Your next level starts here
          </p>
          <h2 className="mt-6 font-display text-[clamp(4.5rem,12vw,12rem)] leading-[0.84] font-bold tracking-[-0.015em] uppercase">
            Let’s make
            <br />
            <em className="not-italic text-[#ffbea8]">them look.</em>
          </h2>
          <div className="mt-12 grid gap-10 border-t border-[#ffd6d13d] pt-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="grid size-14 place-items-center rounded-full border-2 border-[#ffbdaa] bg-[#2a0f1d] font-display text-2xl -rotate-6">
                  M
                </span>
                <div>
                  <p className="text-2xl font-semibold tracking-tight">{site.name}</p>
                  <p className="text-sm text-[#ffd1ca]">{site.role}</p>
                </div>
              </div>
              <p className="mt-6 max-w-sm text-[#ffd1ca]">
                Your idea. My next project. A short note is enough — tell me what you’re building or what broke.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex text-sm underline decoration-[#ffd1ca]/50 underline-offset-4 hover:decoration-foreground"
              >
                Read the longer note
              </Link>
            </div>
            <div className="rounded-2xl border border-white/20 bg-[#160f19ee] p-5 sm:p-7">
              <ContactForm email={contactEmail} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
