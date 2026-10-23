import type { Locale } from "@/lib/i18n/locales";
import type { ChatLine } from "@/lib/conversation";

export function getConversation(locale: Locale): ChatLine[] {
  if (locale === "pt") {
    return [
      {
        id: "brief",
        from: "visitor",
        time: "9:41",
        text: "Oi! Preciso de ajuda com um produto. Segue o briefing e o build atual.",
        attachment: {
          name: "briefing.md",
          detail: "Escopo, usuários e a tela que continua falhando.",
        },
      },
      {
        id: "ack",
        from: "mind",
        time: "9:42",
        text: "Perfeito. Vou esboçar primeiro os estados vazio, errado e esperando.",
      },
      {
        id: "concept",
        from: "mind",
        time: "10:30",
        text: "Aqui está o conceito. O que acha?",
        attachment: {
          name: "conceito.md",
          detail: "Nomes, fluxos e o único lugar onde deve falhar alto.",
        },
      },
      {
        id: "approve",
        from: "visitor",
        time: "10:34",
        text: "Curti. Adoro a direção. Vamos com essa.",
      },
      {
        id: "done",
        from: "mind",
        time: "15:20",
        text: "Pronto. Software funcionando, com os casos de borda inclusos.",
        attachment: {
          name: "build.zip",
          detail: "Pronto para rodar. Notas do que ficou de fora.",
        },
      },
    ];
  }

  return [
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
}
