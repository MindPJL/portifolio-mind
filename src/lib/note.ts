export type NoteDraft = {
  name: string;
  email: string;
  message: string;
};

export type NoteErrors = Partial<Record<keyof NoteDraft, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateNote(draft: NoteDraft): NoteErrors {
  const errors: NoteErrors = {};
  const name = draft.name.trim();
  const email = draft.email.trim();
  const message = draft.message.trim();

  if (name.length < 2) {
    errors.name = "Add your name so I know who is writing.";
  }

  if (!email) {
    errors.email = "Add an email so a reply has somewhere to go.";
  } else if (!EMAIL.test(email)) {
    errors.email = "That email does not look complete.";
  }

  if (!message) {
    errors.message = "Say a bit about why you are writing.";
  } else if (message.length < 12) {
    errors.message = "A few more words will help me answer.";
  }

  return errors;
}

export function noteHasErrors(errors: NoteErrors) {
  return Object.keys(errors).length > 0;
}

export function buildNote(draft: NoteDraft) {
  const name = draft.name.trim();
  const email = draft.email.trim();
  const message = draft.message.trim();
  const subject = `Note for Mind, from ${name}`;
  const body = `From: ${name} <${email}>\n\n${message}`;

  return {
    subject,
    body,
    text: `${subject}\n\n${body}`,
  };
}

export function mailtoHref(address: string, subject: string, body: string) {
  return `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
