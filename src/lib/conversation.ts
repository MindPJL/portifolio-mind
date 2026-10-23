export type ChatLine = {
  id: string;
  from: "mind" | "visitor";
  text: string;
  attachment?: {
    name: string;
    detail: string;
  };
};

export const conversation: ChatLine[] = [
  {
    id: "empty",
    from: "visitor",
    text: "The list works until it is empty. Where do I start?",
  },
  {
    id: "empty-reply",
    from: "mind",
    text: "Start with the empty state as a real screen, not a missing one. Name what a person can do when nothing is there yet.",
    attachment: {
      name: "empty-state.md",
      detail: "Three states a list owes you: empty, wrong, and waiting.",
    },
  },
  {
    id: "fault",
    from: "visitor",
    text: "And if the error is mine, not theirs?",
  },
  {
    id: "fault-reply",
    from: "mind",
    text: "Then the message should say that. A stack trace is a clue. The sentence is the answer.",
  },
];
