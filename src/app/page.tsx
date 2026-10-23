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
import { engagements } from "@/lib/engagements";
import { practice } from "@/lib/practice";
import { projectSummaries, projects } from "@/lib/projects";
import { contactEmail, contactHref, site } from "@/lib/site";

const stats = [
  {
    figure: "04",
    label: "Studies on the shelf",
    note: "Stand-ins, ready for shipped work to take their place.",
  },
  {
    figure: "03",
    label: "Rules I keep",
    note: "Names you can trust, one place to fail, a way out.",
  },
  {
    figure: "05",
    label: "Tools I reach for",
    note: "TypeScript, the browser, SQL, the terminal, plain files.",
  },
  {
    figure: "01",
    label: "Front door",
    note: "This page. No account sitting behind it.",
  },
];

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
      <section id="hero" data-section className="scroll-mt-24 border-b border-border">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:py-20">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] text-signal uppercase">01 /</p>
            <p className="mt-4 font-mono text-xs tracking-[0.18em] uppercase">{site.role}</p>
            <h1 className="mt-3 font-serif text-[clamp(4.5rem,12vw,8rem)] leading-[0.84] tracking-[-0.045em] italic">
              {site.name}
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-pretty sm:text-2xl">
              I write software that still makes sense when I open it later. Clear
              names, small parts, and errors that tell you what to do next.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ArrowLink href="/#work">See the studies</ArrowLink>
              <ArrowLink href={contactHref} variant="outline">
                Write a note
              </ArrowLink>
            </div>
          </div>
          <div className="border border-border bg-card p-4 sm:p-6">
            <HeroMark />
            <p className="mt-3 font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
              Pass the cursor across the mark
            </p>
          </div>
        </Container>
      </section>

      <section id="work" data-section className="scroll-mt-24 py-16 sm:py-24">
        <Container>
          <SectionLabel
            index="02"
            title="Studies, not a résumé."
            lede="Four pieces in the shape of software I want to be known for. The tabs swap the grid in place."
          />
          <div className="mt-10">
            <WorkBento projects={projectSummaries()} />
          </div>
        </Container>
      </section>

      <section id="practice" data-section className="scroll-mt-24 border-t border-border py-16 sm:py-24">
        <Container>
          <SectionLabel
            index="03"
            title="How a change gets made."
            lede="Three rules, then the longer note if you want the reasoning and not only the steps."
          />
          <div className="mt-10 grid gap-3 lg:grid-cols-3">
            {practice.map((item) => (
              <article key={item.index} className="bento-card border border-border bg-card p-6">
                <p className="font-mono text-xs text-signal">{item.index} /</p>
                <h3 className="mt-4 font-serif text-3xl tracking-tight">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-pretty text-muted-foreground">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/about"
              className="font-mono text-xs tracking-[0.16em] uppercase underline decoration-foreground/30 underline-offset-[0.25em] hover:decoration-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
            >
              Read the longer note
            </Link>
          </p>
        </Container>
      </section>

      <section id="snapshot" data-section className="scroll-mt-24 border-t border-border py-16 sm:py-24">
        <Container>
          <SectionLabel
            index="04"
            title="A snapshot."
            lede="Counts from this site, not a growth chart. The preview beside them is Ledger, the first study."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <article key={stat.label} className="bento-card border border-border bg-card p-6">
                <p className="font-serif text-5xl tracking-tight">{stat.figure}</p>
                <h3 className="mt-4 font-medium">{stat.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-muted-foreground">
                  {stat.note}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
            <article className="bento-card border border-border bg-card">
              <ProjectFigure slug="ledger" className="border-0" />
              <div className="border-t border-border p-5">
                <p className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  Media preview
                </p>
                <h3 className="mt-2 font-serif text-3xl tracking-tight">Ledger</h3>
              </div>
            </article>
            <article className="bento-card border border-border bg-card p-6">
              <p className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                A pass, in order
              </p>
              <ol className="mt-5 flex flex-col">
                {practice.map((item, index) => (
                  <li
                    key={item.index}
                    className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-border py-4 first:border-t-0"
                  >
                    <span className="font-mono text-xs text-signal">0{index + 1}</span>
                    <span>
                      <span className="block font-medium">{item.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </article>
          </div>
        </Container>
      </section>

      <Marquee />

      <section id="notes" data-section className="scroll-mt-24 py-16 sm:py-24">
        <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <SectionLabel
            index="05"
            title="A conversation."
            lede="A sample thread, not a live chat. Messages arrive, a note gets attached, and the typing mark stays when the thought is not finished."
          />
          <ChatSim />
        </Container>
      </section>

      <section id="shelf" data-section className="scroll-mt-24 border-t border-border py-16 sm:py-24">
        <Container>
          <SectionLabel
            index="06"
            title="The shelf."
            lede="Open any plate. Esc closes it, the arrow keys move through the set, and the scale can sit at fit, 100%, or 150%."
          />
          <div className="mt-10">
            <ShelfGallery plates={plates} />
          </div>
        </Container>
      </section>

      <section id="engage" data-section className="scroll-mt-24 border-t border-border py-16 sm:py-24">
        <Container>
          <SectionLabel
            index="07"
            title="Ways to work."
            lede="Starting points, not a quote. The real number depends on the shape of the work, and these figures are easy to change."
          />
          <div className="mt-10 grid gap-3 lg:grid-cols-3">
            {engagements.map((item, index) => (
              <article
                key={item.name}
                className={`bento-card flex flex-col border bg-card p-6 ${
                  index === 1 ? "border-signal" : "border-border"
                }`}
              >
                <p className="font-mono text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
                  0{index + 1} /
                </p>
                <h3 className="mt-3 font-serif text-4xl tracking-tight">{item.name}</h3>
                <p className="mt-4 font-serif text-4xl tracking-tight">{item.price}</p>
                <p className="mt-1 font-mono text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                  {item.unit}
                </p>
                <dl className="mt-6 flex flex-1 flex-col gap-4 border-t border-border pt-5 text-sm leading-relaxed">
                  <div>
                    <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                      Length
                    </dt>
                    <dd className="mt-1">{item.length}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                      You get
                    </dt>
                    <dd className="mt-1">{item.get}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[0.7rem] tracking-[0.14em] text-muted-foreground uppercase">
                      Left out
                    </dt>
                    <dd className="mt-1 text-muted-foreground">{item.leave}</dd>
                  </div>
                </dl>
                <ArrowLink href={contactHref} variant={index === 1 ? "solid" : "outline"} className="mt-6 w-full">
                  Start with a note
                </ArrowLink>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" data-section className="scroll-mt-24 border-t border-border py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <SectionLabel
            index="08"
            title="Write a note."
            lede="A short one is enough. Tell me what you are building, what broke, or what you want a second pair of eyes on."
          />
          <ContactForm email={contactEmail} />
        </Container>
      </section>
    </>
  );
}
