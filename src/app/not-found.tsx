import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="font-mono text-xs tracking-[0.16em] text-signal uppercase">404</p>
      <h1 className="mt-4 max-w-xl font-serif text-5xl tracking-tight text-balance sm:text-6xl">
        This page is not here.
      </h1>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
        The address does not match anything on the site.
      </p>
      <Link
        href="/"
        className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 cursor-pointer px-4")}
      >
        Back to the front
      </Link>
    </Container>
  );
}
