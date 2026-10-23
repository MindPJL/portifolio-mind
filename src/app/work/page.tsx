import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { WorkList } from "@/components/work-list";
import { projectSummaries } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Public projects from MindPJL — interfaces and tools you can open on GitHub.",
};

export default function WorkPage() {
  return (
    <Container className="py-20 sm:py-28">
      <PageIntro index="01" kicker="Work" title="Public projects.">
        <p>
          Pieces from{" "}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-foreground/30 underline-offset-4 hover:decoration-signal"
          >
            github.com/{site.githubUser}
          </a>
          . Most of my work stays private — these are the ones on the shelf.
        </p>
      </PageIntro>
      <div className="mt-14">
        <WorkList projects={projectSummaries()} showFilter />
      </div>
    </Container>
  );
}
