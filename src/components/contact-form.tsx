"use client";

import { useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  buildNote,
  mailtoHref,
  noteHasErrors,
  validateNote,
  type NoteDraft,
} from "@/lib/note";

const emptyDraft: NoteDraft = {
  name: "",
  email: "",
  message: "",
};

type Delivery = "copied" | "email" | "manual";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

export function ContactForm({ email }: { email: string }) {
  const [draft, setDraft] = useState<NoteDraft>(emptyDraft);
  const [attempted, setAttempted] = useState(false);
  const [phase, setPhase] = useState<"editing" | "ready">("editing");
  const [delivery, setDelivery] = useState<Delivery>("copied");
  const [copyNotice, setCopyNotice] = useState<string | null>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const errors = attempted ? validateNote(draft) : {};
  const note = buildNote(draft);
  const action = email ? "sent" : "copied";

  function update(field: keyof NoteDraft, value: string) {
    setDraft((current) => ({ ...current, [field]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);
    const nextErrors = validateNote(draft);

    if (noteHasErrors(nextErrors)) {
      if (nextErrors.name) {
        nameRef.current?.focus();
      } else if (nextErrors.email) {
        emailRef.current?.focus();
      } else {
        messageRef.current?.focus();
      }
      return;
    }

    const ready = buildNote(draft);
    const copied = await copyText(ready.text);

    if (email) {
      window.location.href = mailtoHref(email, ready.subject, ready.body);
    }

    setDelivery(email ? (copied ? "email" : "manual") : copied ? "copied" : "manual");
    setPhase("ready");
  }

  if (phase === "ready") {
    const message =
      delivery === "email"
        ? "Your email app should open with this note. A copy is on your clipboard too."
        : delivery === "copied"
          ? "Copied to your clipboard. Paste it into whatever you use to reach me."
          : email
            ? "Your email app should open with this note. If it did not, select the note below and copy it by hand."
            : "Automatic copy did not go through. Select the note below and copy it by hand.";

    return (
      <div role="status" className="border border-border bg-card p-5 sm:p-8">
        <h2 className="font-serif text-3xl tracking-tight">Note is ready</h2>
        <p className="mt-3 text-base leading-relaxed text-pretty text-muted-foreground">
          {message}
        </p>
        <pre className="mt-6 overflow-x-auto border border-border bg-muted p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap">
          {note.text}
        </pre>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button
            type="button"
            className="h-11 cursor-pointer px-4"
            onClick={() => {
              void copyText(note.text).then((copied) => {
                setCopyNotice(
                  copied
                    ? "Copied."
                    : "Select the note above and copy it by hand.",
                );
              });
            }}
          >
            Copy again
          </Button>
          {email ? (
            <a
              href={mailtoHref(email, note.subject, note.body)}
              className="inline-flex h-11 items-center justify-center border border-border bg-background px-4 text-sm font-medium hover:bg-muted"
            >
              Open email again
            </a>
          ) : null}
          <Button
            type="button"
            variant="outline"
            className="h-11 cursor-pointer px-4"
            onClick={() => {
              setCopyNotice(null);
              setPhase("editing");
            }}
          >
            Edit note
          </Button>
        </div>
        {copyNotice ? (
          <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
            {copyNotice}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
      {attempted && noteHasErrors(errors) ? (
        <p role="alert" className="text-sm text-destructive">
          The note needs a few fixes before it can be {action}.
        </p>
      ) : null}

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-name">Name</Label>
        <Input
          ref={nameRef}
          id="contact-name"
          name="name"
          autoComplete="name"
          value={draft.name}
          maxLength={80}
          placeholder="What should I call you?"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className="h-11 px-3 text-base md:text-base"
          onChange={(event) => update("name", event.target.value)}
        />
        {errors.name ? (
          <p id="contact-name-error" className="text-sm text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-email">Email</Label>
        <Input
          ref={emailRef}
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={draft.email}
          maxLength={120}
          placeholder="you@domain.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className="h-11 px-3 text-base md:text-base"
          onChange={(event) => update("email", event.target.value)}
        />
        {errors.email ? (
          <p id="contact-email-error" className="text-sm text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="contact-message">Note</Label>
        <Textarea
          ref={messageRef}
          id="contact-message"
          name="message"
          value={draft.message}
          maxLength={4000}
          placeholder="What are you working on, or what should I read carefully?"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className="min-h-40 px-3 py-3 text-base md:text-base"
          onChange={(event) => update("message", event.target.value)}
        />
        {errors.message ? (
          <p id="contact-message-error" className="text-sm text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-3">
        <Button type="submit" className="h-11 cursor-pointer px-4 sm:w-fit">
          {email ? "Send note" : "Copy note"}
        </Button>
        <p className="max-w-md text-sm leading-relaxed text-pretty text-muted-foreground">
          {email
            ? "Sending opens your email app with this note addressed to me. Nothing is stored on this site."
            : "This prepares the note on your device and copies it. Nothing is stored or sent by the site."}
        </p>
      </div>
    </form>
  );
}
