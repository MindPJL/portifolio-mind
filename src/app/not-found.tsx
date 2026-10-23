import { ArrowLink } from "@/components/arrow-link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-28 sm:py-36">
      <p className="text-xs tracking-[0.16em] text-signal uppercase">404</p>
      <h1 className="mt-4 max-w-xl font-display text-5xl tracking-tight uppercase text-balance sm:text-7xl">
        This page is not here.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
        The address does not match anything on the site.
      </p>
      <ArrowLink href="/" className="mt-8">
        Back to the front
      </ArrowLink>
    </Container>
  );
}
