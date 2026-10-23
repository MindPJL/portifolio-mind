export type NoteDraft = {
  name: string;
  email: string;
  message: string;
};

export type NoteErrors = Partial<Record<keyof NoteDraft, string>>;

export type NoteMessages = {
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  messageShort: string;
  subjectPrefix: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateNote(
  draft: NoteDraft,
  messages: NoteMessages,
): NoteErrors {
  const errors: NoteErrors = {};
  const name = draft.name.trim();
  const email = draft.email.trim();
  const message = draft.message.trim();

  if (name.length < 2) {
    errors.name = messages.nameRequired;
  }

  if (!email) {
    errors.email = messages.emailRequired;
  } else if (!EMAIL.test(email)) {
    errors.email = messages.emailInvalid;
  }

  if (!message) {
    errors.message = messages.messageRequired;
  } else if (message.length < 12) {
    errors.message = messages.messageShort;
  }

  return errors;
}

export function noteHasErrors(errors: NoteErrors) {
  return Object.keys(errors).length > 0;
}

export function buildNote(draft: NoteDraft, subjectPrefix: string) {
  const name = draft.name.trim();
  const email = draft.email.trim();
  const message = draft.message.trim();
  const subject = `${subjectPrefix} ${name}`;
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
