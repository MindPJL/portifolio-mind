export type ChatLine = {
  id: string;
  from: "mind" | "visitor";
  text: string;
  time?: string;
  attachment?: {
    name: string;
    detail: string;
  };
};

export const conversation: ChatLine[] = [
  {
    id: "brief",
    from: "visitor",
    time: "9:41 AM",
    text: "Hey! I need help with a product. Here’s the brief and the current build.",
    attachment: {
      name: "brief.md",
      detail: "Scope, users, and the screen that keeps failing.",
    },
  },
  {
    id: "ack",
    from: "mind",
    time: "9:42 AM",
    text: "Perfect. I’ll sketch the empty, wrong, and waiting states first.",
  },
  {
    id: "concept",
    from: "mind",
    time: "10:30 AM",
    text: "Here’s the concept. What do you think?",
    attachment: {
      name: "concept.md",
      detail: "Names, flows, and the one place it should fail loudly.",
    },
  },
  {
    id: "approve",
    from: "visitor",
    time: "10:34 AM",
    text: "Sounds good. Love the direction. Let’s go with this.",
  },
  {
    id: "done",
    from: "mind",
    time: "3:20 PM",
    text: "All done. Working software, with the edge cases included.",
    attachment: {
      name: "build.zip",
      detail: "Ready to run. Notes on what was left out.",
    },
  },
];
