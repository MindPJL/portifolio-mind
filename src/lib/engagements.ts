export const engagements = [
  {
    name: "Read",
    price: "$800",
    unit: "starting",
    length: "A few days",
    get: "A written pass on something that already exists.",
    leave: "No new product. Names, failures, and the next change.",
    featured: false,
  },
  {
    name: "Build",
    price: "$6,000",
    unit: "starting",
    length: "Under a focused build",
    get: "Working software with empty, wrong, and waiting states included.",
    leave: "No platform, no pitch deck, no leftover ceremony.",
    featured: true,
  },
  {
    name: "Keep",
    price: "$2,400",
    unit: "a month, starting",
    length: "Ongoing",
    get: "The middle of a system, kept honest after the first version ships.",
    leave: "Not a ticket queue. A standing agreement about what stays clear.",
    featured: false,
  },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Send your brief",
    body: "What you’re building, what’s broken, and the assets that matter.",
  },
  {
    index: "02",
    title: "See the concept",
    body: "A quick pass on names, structure, and the first screen that has to work.",
  },
  {
    index: "03",
    title: "Make it yours",
    body: "Share feedback. Approve the direction before anything gets deep.",
  },
  {
    index: "04",
    title: "Ready to ship",
    body: "Working software, with the edge cases written in — not left for later.",
  },
] as const;
