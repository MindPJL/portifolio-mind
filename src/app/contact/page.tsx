import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { contactEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write a note to Mind about something you are building, or something you want read carefully.",
};

export default function ContactPage() {
  return (
    <Container className="py-14 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <PageIntro index="03" kicker="Contact" title="Write a note.">
          <p>
            A short one is enough. Tell me what you are building, what broke, or
            what you want a second pair of eyes on.
          </p>
        </PageIntro>
        <ContactForm email={contactEmail} />
      </div>
    </Container>
  );
}
