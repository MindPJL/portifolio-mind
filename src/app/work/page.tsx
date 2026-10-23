import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { WorkList } from "@/components/work-list";
import { projectSummaries } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Studies in interfaces, systems, and tools. Each one is a piece Mind can explain without a slide.",
};

export default function WorkPage() {
  return (
    <Container className="py-20 sm:py-28">
      <PageIntro index="01" kicker="Work" title="Studies, not a résumé.">
        <p>
          Four pieces in the shape of software I want to be known for. They are
          studies: specific enough to argue with, and ready to be replaced when
          shipped work earns the shelf.
        </p>
      </PageIntro>
      <div className="mt-14">
        <WorkList projects={projectSummaries()} showFilter />
      </div>
    </Container>
  );
}
