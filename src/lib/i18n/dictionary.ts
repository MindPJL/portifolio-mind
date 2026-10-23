import type { Locale } from "@/lib/i18n/locales";

type ProjectCopy = {
  kind: string;
  summary: string;
  problem: string;
  kept: string[];
  leftOut: string[];
};

export type Dictionary = {
  role: string;
  skip: string;
  nav: {
    work: string;
    results: string;
    process: string;
    languages: string;
    contact: string;
  };
  ctaTalk: string;
  ctaNote: string;
  menu: string;
  close: string;
  github: string;
  onGithub: string;
  gate: {
    kicker: string;
    title: string;
    subtitle: string;
    choose: string;
    en: string;
    pt: string;
    hint: string;
  };
  intro: {
    caption: string;
    title: string;
    hint: string;
    scroll: string;
  };
  hero: {
    kicker: string;
    line1: string;
    line2: string;
    line3: string;
    description1: string;
    description2: string;
    explore: string;
    languagesCta: string;
    negotiateHint: string;
    clearScope: string;
    honestDelivery: string;
    standOut: string;
    studiesShelf: string;
    independent: string;
    scroll: string;
    details: string;
  };
  snapshot: {
    studies: string;
    delivered: string;
    eyebrow: string;
    title1: string;
    title2: string;
    stack: string;
  };
  work: {
    index: string;
    title: string;
    accent: string;
    lede: string;
    viewLanguages: string;
    empty: string;
    foot: string;
    kinds: string;
    filters: {
      all: string;
      interface: string;
      systems: string;
      tool: string;
    };
    studiesCount: string;
    studyCount: string;
    none: string;
    openRepo: string;
  };
  results: {
    index: string;
    title: string;
    accent: string;
    lede: string;
    numbers: string;
    pause: string;
    shelf: string;
    rules: string;
    tools: string;
    note: string;
  };
  process: {
    index: string;
    title: string;
    accent: string;
    lede: string;
    preview: string;
    notesTitle: string;
    notesBody: string;
    talkProduct: string;
  };
  shelf: {
    index: string;
    title: string;
    accent: string;
    lede: string;
    markCaption: string;
    close: string;
    previous: string;
    next: string;
    keys: string;
  };
  negotiate: {
    index: string;
    title: string;
    accent: string;
    lede: string;
    clearTitle: string;
    clearBody: string;
    points: { title: string; body: string }[];
    cta: string;
    note: string;
  };
  contact: {
    index: string;
    title1: string;
    title2: string;
    body: string;
    longer: string;
  };
  languagesPage: {
    kicker: string;
    title: string;
    accent: string;
    lede: string;
    pick: string;
    level: { core: string; strong: string; solid: string };
    focus: string;
    sample: string;
    githubNote: string;
    details: Record<
      string,
      { blurb: string; use: string; sample: string }
    >;
  };
  aboutPage: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    toolsTitle: string;
    tools: { name: string; detail: string }[];
    ruleCaption: string;
    seeWork: string;
    writeNote: string;
  };
  form: {
    name: string;
    email: string;
    note: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    copy: string;
    send: string;
    copyHint: string;
    sendHint: string;
    alert: string;
    ready: string;
    copied: string;
    emailOpened: string;
    manual: string;
    manualEmail: string;
    copyAgain: string;
    openEmail: string;
    edit: string;
    nameRequired: string;
    emailRequired: string;
    emailInvalid: string;
    messageRequired: string;
    messageShort: string;
    subjectPrefix: string;
    copiedShort: string;
    copyFailed: string;
  };
  chat: {
    title: string;
    live: string;
    typing: string;
    footer: string;
  };
  marquee: string[];
  practice: { index: string; title: string; body: string }[];
  processSteps: { index: string; title: string; body: string }[];
  projects: Record<string, ProjectCopy>;
  projectTitles: Record<string, string>;
  aboutLink: string;
  footerYear: string;
};

const enProjects: Record<string, ProjectCopy> = {
  docinho: {
    kind: "Interface",
    summary:
      "A portfolio surface for a real brand — layout, type, and motion that introduce someone before they say a word.",
    problem:
      "A portfolio that looks like a template disappears. The person behind it needs a first screen that feels specific.",
    kept: [
      "A clear hero and a path through the work without drowning the visitor in chrome.",
      "TypeScript end to end, so the structure stays honest as the pages grow.",
      "Motion that points at hierarchy instead of noise.",
    ],
    leftOut: [
      "A CMS, a blog engine, and account flows. The site is a face, not a product suite.",
    ],
  },
  board: {
    kind: "Interface",
    summary:
      "A Trello-inspired board built to understand columns, cards, and the feel of dragging work across a day.",
    problem:
      "Kanban UIs look simple until you build one. Spacing, drag affordances, and readable cards are the whole product.",
    kept: [
      "Columns that read as lanes, not boxes stacked for decoration.",
      "CSS that carries most of the layout so the structure stays inspectable.",
      "A clone that teaches the interaction, not a pixel-perfect replica.",
    ],
    leftOut: ["Accounts, sync, and a backend. This is the board on the glass."],
  },
  fluent: {
    kind: "Interface",
    summary:
      "A meeting-room experiment in JavaScript — the flow of joining, waiting, and staying oriented in a call.",
    problem:
      "Call UIs hide their worst moments: waiting rooms, empty states, and the second you lose track of who is speaking.",
    kept: [
      "Plain JavaScript so the control flow stays readable.",
      "States named for what the person is doing, not what the socket said.",
      "A small surface that can grow without rewriting the story.",
    ],
    leftOut: [
      "A full WebRTC stack and production infra. FluentMeet is the interface story first.",
    ],
  },
  hash: {
    kind: "Tool",
    summary:
      "A TypeScript hashing playground — feed a string, see the digest, keep the path short enough to trust.",
    problem:
      "Hash tools online are either a black box or a wall of options. I wanted a thin path from input to digest.",
    kept: [
      "TypeScript types around the inputs so mistakes show up early.",
      "A short surface: pick an algorithm, paste text, read the result.",
      "No account, no history server — the work stays on the device.",
    ],
    leftOut: [
      "Password managers, key storage, and anything that pretends to be a vault.",
    ],
  },
};

const ptProjects: Record<string, ProjectCopy> = {
  docinho: {
    kind: "Interface",
    summary:
      "Uma superfície de portfólio para uma marca real — layout, tipo e movimento que apresentam alguém antes de uma palavra.",
    problem:
      "Um portfólio que parece template some. A pessoa por trás precisa de uma primeira tela que pareça específica.",
    kept: [
      "Um hero claro e um caminho pelo trabalho sem afogar o visitante em chrome.",
      "TypeScript de ponta a ponta, para a estrutura ficar honesta enquanto as páginas crescem.",
      "Movimento que aponta hierarquia, não barulho.",
    ],
    leftOut: [
      "CMS, blog e contas. O site é um rosto, não um suite de produto.",
    ],
  },
  board: {
    kind: "Interface",
    summary:
      "Um board inspirado no Trello para entender colunas, cards e a sensação de arrastar o trabalho pelo dia.",
    problem:
      "UIs de kanban parecem simples até você construir uma. Espaço, arraste e cards legíveis são o produto inteiro.",
    kept: [
      "Colunas que leem como faixas, não caixas empilhadas por decoração.",
      "CSS que carrega a maior parte do layout para a estrutura ficar inspecionável.",
      "Um clone que ensina a interação, não uma réplica pixel-perfect.",
    ],
    leftOut: ["Contas, sync e backend. Isto é o board no vidro."],
  },
  fluent: {
    kind: "Interface",
    summary:
      "Um experimento de sala de reunião em JavaScript — o fluxo de entrar, esperar e continuar orientado numa call.",
    problem:
      "UIs de call escondem os piores momentos: salas de espera, estados vazios e o segundo em que você perde quem fala.",
    kept: [
      "JavaScript puro para o fluxo de controle continuar legível.",
      "Estados nomeados pelo que a pessoa está fazendo, não pelo que o socket disse.",
      "Uma superfície pequena que pode crescer sem reescrever a história.",
    ],
    leftOut: [
      "Stack WebRTC completa e infra de produção. FluentMeet é a história da interface primeiro.",
    ],
  },
  hash: {
    kind: "Tool",
    summary:
      "Um playground de hashing em TypeScript — entra uma string, sai o digest, caminho curto o bastante para confiar.",
    problem:
      "Ferramentas de hash online são caixa-preta ou muro de opções. Eu queria um caminho fino da entrada ao digest.",
    kept: [
      "Tipos TypeScript em volta das entradas para o erro aparecer cedo.",
      "Uma superfície curta: escolha o algoritmo, cole o texto, leia o resultado.",
      "Sem conta, sem servidor de histórico — o trabalho fica no dispositivo.",
    ],
    leftOut: [
      "Gerenciadores de senha, cofres e qualquer coisa que finja ser vault.",
    ],
  },
};

const en: Dictionary = {
  role: "Programmer",
  skip: "Skip to content",
  nav: {
    work: "Work",
    results: "Results",
    process: "Process",
    languages: "Languages",
    contact: "Contact",
  },
  ctaTalk: "Let’s talk",
  ctaNote: "Note",
  menu: "Menu",
  close: "Close",
  github: "GitHub",
  onGithub: "Open on GitHub",
  gate: {
    kicker: "Mind / Portfolio",
    title: "Choose your language",
    subtitle: "Pick how you want to read the site. You can change it later.",
    choose: "Choose a language",
    en: "English",
    pt: "Português",
    hint: "This choice is saved on this device.",
  },
  intro: {
    caption: "A different first impression.",
    title: "Made to be noticed.",
    hint: "Move your cursor through the mark.",
    scroll: "Scroll to explore",
  },
  hero: {
    kicker: "Interfaces · Games · Tools",
    line1: "Your product.",
    line2: "Their next",
    line3: "obsession.",
    description1: "Curious builder. Most of my work stays private.",
    description2: "What’s public lives on GitHub — TypeScript, JS, Lua, and the browser.",
    explore: "Explore my work",
    languagesCta: "See my languages",
    negotiateHint: "Scope & price are negotiated",
    clearScope: "Clear scope",
    honestDelivery: "honest delivery",
    standOut: "Made to stand out",
    studiesShelf: "Public projects on the shelf",
    independent: "Independent programmer",
    scroll: "Scroll to explore",
    details: "Built in the details",
  },
  snapshot: {
    studies: "Public",
    delivered: "projects",
    eyebrow: "Curious. Focused. Most of it private.",
    title1: "Building for the web",
    title2: "and for games-adjacent systems.",
    stack: "Principal stack",
  },
  work: {
    index: "01 / The first impression",
    title: "Small frame.",
    accent: "Big energy.",
    lede: "Public pieces from github.com/MindPJL. Most of my work stays private — these are the ones you can open.",
    viewLanguages: "See languages",
    empty: "Nothing filed under this filter yet.",
    foot: "Open any project for the full note, or jump to the repo on GitHub.",
    kinds: "Public / Interfaces / Tools",
    filters: {
      all: "All",
      interface: "Interface",
      systems: "Systems",
      tool: "Tool",
    },
    studiesCount: "projects",
    studyCount: "project",
    none: "Nothing filed here",
    openRepo: "Repository",
  },
  results: {
    index: "02 / More than a good look",
    title: "Make the click.",
    accent: "Move the needle.",
    lede: "A better first impression. A stronger reason to keep building — and to come back.",
    numbers: "What sits on the shelf",
    pause: "Public work",
    shelf: "Public projects",
    rules: "Rules I keep",
    tools: "Languages I reach for",
    note: "Numbers from this site’s own shelf. Private work stays off the page.",
  },
  process: {
    index: "03 / Simple from start to finish",
    title: "Your next build.",
    accent: "One conversation away.",
    lede: "Share the idea. See the concept. Love the final. We’ll make it happen together.",
    preview: "A little preview of working together",
    notesTitle: "Notes in the thread.",
    notesBody:
      "A sample conversation — not a live chat. Messages arrive, files land, typing stays when the thought isn’t finished.",
    talkProduct: "Let’s talk about your product",
  },
  shelf: {
    index: "04 / A closer look",
    title: "The shelf.",
    accent: "Open anything.",
    lede: "Click a plate. Esc closes it. Arrow keys move. Fit, 100%, or 150% when you want scale.",
    markCaption: "The M on the front door. Pass a cursor across it and it comes apart.",
    close: "Close",
    previous: "Previous",
    next: "Next",
    keys: "Esc to close · arrows to move",
  },
  negotiate: {
    index: "05 / Good work. Fair terms.",
    title: "Let’s negotiate.",
    accent: "No fixed price list.",
    lede: "Every build has a different shape. We talk scope, timing, and budget together — nothing is locked until it makes sense for both of us.",
    clearTitle: "Talk first. Quote second.",
    clearBody: "Tell me what you need. I’ll answer with what’s possible, what’s hard, and a number that fits.",
    points: [
      {
        title: "Tell me the brief",
        body: "What you’re building, what’s broken, and when it needs to land.",
      },
      {
        title: "We shape the scope",
        body: "What’s in, what’s out, and the first milestone that proves direction.",
      },
      {
        title: "Agree the terms",
        body: "Budget, timing, and how we stay in sync — written plainly before work starts.",
      },
    ],
    cta: "Start the conversation",
    note: "No rate card on this site. Price comes from the conversation — honest, specific, and renegotiable if the work changes.",
  },
  contact: {
    index: "06 / Your next level starts here",
    title1: "Let’s make",
    title2: "them look.",
    body: "I’m Mind (MindPJL). A short note is enough — tell me what you’re building or what broke. You can also find me on GitHub.",
    longer: "Read the longer note",
  },
  languagesPage: {
    kicker: "Stack",
    title: "The languages",
    accent: "I actually use.",
    lede: "Principal languages from the work I ship. Hover or tap a node — the orbit follows your cursor.",
    pick: "Pick a language",
    level: {
      core: "Core",
      strong: "Strong",
      solid: "Solid",
    },
    focus: "Focus",
    sample: "Taste of the syntax",
    githubNote: "See public repos on GitHub →",
    details: {
      typescript: {
        blurb: "Where I spend most days — typed interfaces, tools, and anything that has to stay honest as it grows.",
        use: "Apps, CLIs, and the glue between UI and data.",
        sample: "type Result<T> = { ok: true; value: T } | { ok: false; error: string }",
      },
      javascript: {
        blurb: "The runtime language of the browser and a lot of game-adjacent tooling. Fast to sketch, sharp when kept small.",
        use: "Interfaces, prototypes, and scripts that need to move now.",
        sample: "const ready = nodes.filter((n) => n.isConnected)",
      },
      lua: {
        blurb: "Light, embeddable, and common around games. I reach for it when the host already speaks Lua.",
        use: "Game scripts, tooling, and small systems that live inside a larger runtime.",
        sample: "local function clamp(n, lo, hi) return math.max(lo, math.min(hi, n)) end",
      },
      css: {
        blurb: "Layout, type, motion, and the states a screen usually forgets. CSS is half the product when the UI matters.",
        use: "Responsive layouts, motion, and the feel of a surface.",
        sample: ".reveal { opacity: 0; transform: translateY(2rem); }",
      },
      html: {
        blurb: "The bones. Semantics first so the page stays usable without the stylesheet winning every fight.",
        use: "Structure, accessibility, and content that outlives a theme.",
        sample: '<main id="content" tabindex="-1">…</main>',
      },
    },
  },
  aboutPage: {
    kicker: "About",
    title: "How I like to work.",
    p1: "I am Mind — MindPJL on GitHub. A curious guy having fun, building interfaces and systems, often around games.",
    p2: "Most of my projects stay private. What’s public is on GitHub: TypeScript portfolios, a board clone, a meeting experiment, hashing tools, and more as I open them.",
    p3: "I care about names you can trust, failures that explain themselves, and software you can leave without a tour guide.",
    p4: "If you want to work together, we negotiate scope and price in a conversation — no fixed menu on this site.",
    toolsTitle: "What I reach for",
    tools: [
      {
        name: "TypeScript",
        detail: "When people and other programs both have to trust the same code.",
      },
      {
        name: "JavaScript",
        detail: "For the browser, prototypes, and anything that needs to move quickly.",
      },
      {
        name: "Lua",
        detail: "When the host already speaks it — games and embedded tooling.",
      },
      {
        name: "CSS & HTML",
        detail: "Layout, type, and the empty / wrong / waiting states a screen usually forgets.",
      },
      {
        name: "GitHub",
        detail: "Public work at github.com/MindPJL. Discord for the people who already know the server.",
      },
    ],
    ruleCaption: "A rule I keep close to the editor",
    seeWork: "See the work",
    writeNote: "Write a note",
  },
  form: {
    name: "Name",
    email: "Email",
    note: "Note",
    namePlaceholder: "What should I call you?",
    emailPlaceholder: "you@domain.com",
    messagePlaceholder: "What are you working on, or what should I read carefully?",
    copy: "Copy note",
    send: "Send note",
    copyHint: "This prepares the note on your device and copies it. Nothing is stored or sent by the site.",
    sendHint: "Sending opens your email app with this note addressed to me. Nothing is stored on this site.",
    alert: "The note needs a few fixes before it can be ready.",
    ready: "Note is ready",
    copied: "Copied to your clipboard. Paste it into whatever you use to reach me.",
    emailOpened: "Your email app should open with this note. A copy is on your clipboard too.",
    manual: "Automatic copy did not go through. Select the note below and copy it by hand.",
    manualEmail: "Your email app should open with this note. If it did not, select the note below and copy it by hand.",
    copyAgain: "Copy again",
    openEmail: "Open email again",
    edit: "Edit note",
    nameRequired: "Add your name so I know who is writing.",
    emailRequired: "Add an email so a reply has somewhere to go.",
    emailInvalid: "That email does not look complete.",
    messageRequired: "Say a bit about why you are writing.",
    messageShort: "A few more words will help me answer.",
    subjectPrefix: "Note for Mind, from",
    copiedShort: "Copied.",
    copyFailed: "Select the note above and copy it by hand.",
  },
  chat: {
    title: "Mind",
    live: "Live sample",
    typing: "Mind is typing",
    footer: "A sample thread. Nothing here is sent.",
  },
  marquee: [
    "TYPESCRIPT",
    "JAVASCRIPT",
    "LUA",
    "CLEAR NAMES",
    "HONEST ERRORS",
    "MOSTLY PRIVATE",
  ],
  practice: [
    {
      index: "01",
      title: "Names you can trust",
      body: "If a name needs a comment beside it, I change the name. A variable is a sentence you will reread under pressure.",
    },
    {
      index: "02",
      title: "One place to fail",
      body: "When something breaks, the message should carry the context for the next step. A stack trace is a clue, not an answer.",
    },
    {
      index: "03",
      title: "A way out",
      body: "I prefer plain files and functions you can call without a tour. Work you can leave is work someone else can keep.",
    },
  ],
  processSteps: [
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
  ],
  projectTitles: {
    docinho: "Docinho",
    board: "Board",
    fluent: "FluentMeet",
    hash: "Crypto Hash",
    mark: "Mark",
  },
  projects: enProjects,
  aboutLink: "Read the longer note",
  footerYear: "2026",
};

const pt: Dictionary = {
  role: "Programador",
  skip: "Ir para o conteúdo",
  nav: {
    work: "Trabalho",
    results: "Resultados",
    process: "Processo",
    languages: "Linguagens",
    contact: "Contato",
  },
  ctaTalk: "Vamos conversar",
  ctaNote: "Nota",
  menu: "Menu",
  close: "Fechar",
  github: "GitHub",
  onGithub: "Abrir no GitHub",
  gate: {
    kicker: "Mind / Portfólio",
    title: "Escolha o idioma",
    subtitle: "Escolha como quer ler o site. Dá para mudar depois.",
    choose: "Escolha um idioma",
    en: "English",
    pt: "Português",
    hint: "Essa escolha fica salva neste dispositivo.",
  },
  intro: {
    caption: "Uma primeira impressão diferente.",
    title: "Feito para ser notado.",
    hint: "Passe o cursor pelo símbolo.",
    scroll: "Role para explorar",
  },
  hero: {
    kicker: "Interfaces · Games · Ferramentas",
    line1: "Seu produto.",
    line2: "A próxima",
    line3: "obsessão deles.",
    description1: "Construtor curioso. A maior parte do meu trabalho fica privada.",
    description2: "O que é público mora no GitHub — TypeScript, JS, Lua e o browser.",
    explore: "Ver meu trabalho",
    languagesCta: "Ver minhas linguagens",
    negotiateHint: "Escopo e preço são negociados",
    clearScope: "Escopo claro",
    honestDelivery: "entrega honesta",
    standOut: "Feito para destacar",
    studiesShelf: "Projetos públicos na prateleira",
    independent: "Programador independente",
    scroll: "Role para explorar",
    details: "Construído nos detalhes",
  },
  snapshot: {
    studies: "Projetos",
    delivered: "públicos",
    eyebrow: "Curioso. Focado. A maior parte privada.",
    title1: "Construindo para a web",
    title2: "e para sistemas perto de games.",
    stack: "Stack principal",
  },
  work: {
    index: "01 / A primeira impressão",
    title: "Quadro pequeno.",
    accent: "Energia grande.",
    lede: "Peças públicas de github.com/MindPJL. A maior parte do meu trabalho fica privada — estas você pode abrir.",
    viewLanguages: "Ver linguagens",
    empty: "Nada arquivado neste filtro ainda.",
    foot: "Abra qualquer projeto para a nota completa, ou vá ao repositório no GitHub.",
    kinds: "Público / Interfaces / Ferramentas",
    filters: {
      all: "Tudo",
      interface: "Interface",
      systems: "Sistemas",
      tool: "Ferramenta",
    },
    studiesCount: "projetos",
    studyCount: "projeto",
    none: "Nada por aqui",
    openRepo: "Repositório",
  },
  results: {
    index: "02 / Mais do que uma boa aparência",
    title: "Faça o clique.",
    accent: "Mova a agulha.",
    lede: "Uma primeira impressão melhor. Um motivo mais forte para continuar construindo — e voltar.",
    numbers: "O que está na prateleira",
    pause: "Trabalho público",
    shelf: "Projetos públicos",
    rules: "Regras que eu sigo",
    tools: "Linguagens que uso",
    note: "Números da própria prateleira deste site. Trabalho privado fica fora da página.",
  },
  process: {
    index: "03 / Simples do começo ao fim",
    title: "Seu próximo build.",
    accent: "A uma conversa de distância.",
    lede: "Compartilhe a ideia. Veja o conceito. Ame o final. Vamos fazer acontecer juntos.",
    preview: "Uma prévia de trabalhar juntos",
    notesTitle: "Notas no fio.",
    notesBody:
      "Uma conversa de exemplo — não é um chat ao vivo. Mensagens chegam, arquivos aparecem, e o “digitando” fica quando o pensamento ainda não terminou.",
    talkProduct: "Vamos falar do seu produto",
  },
  shelf: {
    index: "04 / Um olhar mais de perto",
    title: "A prateleira.",
    accent: "Abra qualquer uma.",
    lede: "Clique numa placa. Esc fecha. Setas navegam. Fit, 100% ou 150% quando quiser escala.",
    markCaption: "O M na porta da frente. Passe o cursor e ele se desfaz.",
    close: "Fechar",
    previous: "Anterior",
    next: "Próxima",
    keys: "Esc para fechar · setas para navegar",
  },
  negotiate: {
    index: "05 / Bom trabalho. Termos justos.",
    title: "Vamos negociar.",
    accent: "Sem lista de preços fixa.",
    lede: "Cada build tem um formato diferente. Conversamos escopo, prazo e orçamento juntos — nada trava até fazer sentido para os dois.",
    clearTitle: "Conversa primeiro. Proposta depois.",
    clearBody: "Diga o que precisa. Eu respondo com o que é possível, o que é difícil e um número que encaixa.",
    points: [
      {
        title: "Mande o briefing",
        body: "O que você está construindo, o que quebrou e quando precisa estar pronto.",
      },
      {
        title: "Moldamos o escopo",
        body: "O que entra, o que fica de fora e o primeiro marco que prova a direção.",
      },
      {
        title: "Alinhamos os termos",
        body: "Orçamento, prazo e como ficamos em sync — escrito com clareza antes de começar.",
      },
    ],
    cta: "Começar a conversa",
    note: "Não há tabela de preços neste site. O valor vem da conversa — honesto, específico e renegociável se o trabalho mudar.",
  },
  contact: {
    index: "06 / Seu próximo nível começa aqui",
    title1: "Vamos fazer",
    title2: "eles olharem.",
    body: "Eu sou o Mind (MindPJL). Uma nota curta basta — diga o que está construindo ou o que quebrou. Também estou no GitHub.",
    longer: "Ler a nota mais longa",
  },
  languagesPage: {
    kicker: "Stack",
    title: "As linguagens",
    accent: "que eu realmente uso.",
    lede: "Linguagens principais do trabalho que eu entrego. Passe o cursor ou toque num nó — a órbita segue você.",
    pick: "Escolha uma linguagem",
    level: {
      core: "Núcleo",
      strong: "Forte",
      solid: "Sólido",
    },
    focus: "Foco",
    sample: "Um gostinho da sintaxe",
    githubNote: "Ver repositórios públicos no GitHub →",
    details: {
      typescript: {
        blurb: "Onde passo a maior parte dos dias — interfaces tipadas, ferramentas e qualquer coisa que precisa continuar honesta enquanto cresce.",
        use: "Apps, CLIs e a cola entre UI e dados.",
        sample: "type Result<T> = { ok: true; value: T } | { ok: false; error: string }",
      },
      javascript: {
        blurb: "A linguagem de runtime do browser e de muita ferramenta perto de games. Rápida para esboçar, afiada quando fica pequena.",
        use: "Interfaces, protótipos e scripts que precisam andar agora.",
        sample: "const ready = nodes.filter((n) => n.isConnected)",
      },
      lua: {
        blurb: "Leve, embutível e comum em torno de games. Uso quando o host já fala Lua.",
        use: "Scripts de game, tooling e sistemas pequenos dentro de um runtime maior.",
        sample: "local function clamp(n, lo, hi) return math.max(lo, math.min(hi, n)) end",
      },
      css: {
        blurb: "Layout, tipo, movimento e os estados que a tela costuma esquecer. CSS é metade do produto quando a UI importa.",
        use: "Layouts responsivos, motion e a sensação de uma superfície.",
        sample: ".reveal { opacity: 0; transform: translateY(2rem); }",
      },
      html: {
        blurb: "Os ossos. Semântica primeiro para a página continuar usável sem o stylesheet ganhar toda briga.",
        use: "Estrutura, acessibilidade e conteúdo que sobrevive a um tema.",
        sample: '<main id="content" tabindex="-1">…</main>',
      },
    },
  },
  aboutPage: {
    kicker: "Sobre",
    title: "Como eu gosto de trabalhar.",
    p1: "Eu sou o Mind — MindPJL no GitHub. Um cara curioso se divertindo, construindo interfaces e sistemas, muitas vezes perto de games.",
    p2: "A maior parte dos meus projetos fica privada. O que é público está no GitHub: portfólios em TypeScript, um clone de board, um experimento de reunião, ferramentas de hashing e mais conforme eu for abrindo.",
    p3: "Me importo com nomes em que se confia, falhas que se explicam e software que você deixa sem precisar de um guia.",
    p4: "Se quiser trabalhar junto, negociamos escopo e preço numa conversa — sem cardápio fixo neste site.",
    toolsTitle: "O que eu alcanço",
    tools: [
      {
        name: "TypeScript",
        detail: "Quando pessoas e outros programas precisam confiar no mesmo código.",
      },
      {
        name: "JavaScript",
        detail: "Para o browser, protótipos e qualquer coisa que precisa andar rápido.",
      },
      {
        name: "Lua",
        detail: "Quando o host já fala — games e tooling embutido.",
      },
      {
        name: "CSS & HTML",
        detail: "Layout, tipo e os estados vazio / errado / esperando que a tela costuma esquecer.",
      },
      {
        name: "GitHub",
        detail: "Trabalho público em github.com/MindPJL. Discord para quem já conhece o servidor.",
      },
    ],
    ruleCaption: "Uma regra que eu mantenho perto do editor",
    seeWork: "Ver o trabalho",
    writeNote: "Escrever uma nota",
  },
  form: {
    name: "Nome",
    email: "E-mail",
    note: "Nota",
    namePlaceholder: "Como posso te chamar?",
    emailPlaceholder: "voce@dominio.com",
    messagePlaceholder: "No que você está trabalhando, ou o que eu deveria ler com atenção?",
    copy: "Copiar nota",
    send: "Enviar nota",
    copyHint: "Isso prepara a nota no seu dispositivo e copia. Nada é armazenado ou enviado pelo site.",
    sendHint: "Enviar abre seu app de e-mail com esta nota endereçada a mim. Nada fica armazenado neste site.",
    alert: "A nota precisa de alguns ajustes antes de ficar pronta.",
    ready: "Nota pronta",
    copied: "Copiada para a área de transferência. Cole onde você usa para me alcançar.",
    emailOpened: "Seu app de e-mail deve abrir com esta nota. Também há uma cópia na área de transferência.",
    manual: "A cópia automática não funcionou. Selecione a nota abaixo e copie à mão.",
    manualEmail: "Seu app de e-mail deve abrir com esta nota. Se não abriu, selecione a nota abaixo e copie à mão.",
    copyAgain: "Copiar de novo",
    openEmail: "Abrir e-mail de novo",
    edit: "Editar nota",
    nameRequired: "Coloque seu nome para eu saber quem escreve.",
    emailRequired: "Coloque um e-mail para eu ter onde responder.",
    emailInvalid: "Esse e-mail não parece completo.",
    messageRequired: "Diga um pouco por que está escrevendo.",
    messageShort: "Mais algumas palavras vão me ajudar a responder.",
    subjectPrefix: "Nota para Mind, de",
    copiedShort: "Copiado.",
    copyFailed: "Selecione a nota acima e copie à mão.",
  },
  chat: {
    title: "Mind",
    live: "Amostra ao vivo",
    typing: "Mind está digitando",
    footer: "Um fio de exemplo. Nada daqui é enviado.",
  },
  marquee: [
    "TYPESCRIPT",
    "JAVASCRIPT",
    "LUA",
    "NOMES CLAROS",
    "ERROS HONESTOS",
    "QUASE TUDO PRIVADO",
  ],
  practice: [
    {
      index: "01",
      title: "Nomes em que se confia",
      body: "Se um nome precisa de um comentário ao lado, eu mudo o nome. Uma variável é uma frase que você vai reler sob pressão.",
    },
    {
      index: "02",
      title: "Um lugar para falhar",
      body: "Quando algo quebra, a mensagem deve carregar o contexto do próximo passo. Um stack trace é uma pista, não a resposta.",
    },
    {
      index: "03",
      title: "Uma saída",
      body: "Prefiro arquivos simples e funções que se chama sem um tour. Trabalho que você pode deixar é trabalho que outra pessoa consegue manter.",
    },
  ],
  processSteps: [
    {
      index: "01",
      title: "Envie o briefing",
      body: "O que você está construindo, o que quebrou e os assets que importam.",
    },
    {
      index: "02",
      title: "Veja o conceito",
      body: "Uma passagem rápida em nomes, estrutura e a primeira tela que precisa funcionar.",
    },
    {
      index: "03",
      title: "Faça do seu jeito",
      body: "Mande feedback. Aprove a direção antes de aprofundar qualquer coisa.",
    },
    {
      index: "04",
      title: "Pronto para enviar",
      body: "Software funcionando, com os casos de borda escritos — não deixados para depois.",
    },
  ],
  projectTitles: {
    docinho: "Docinho",
    board: "Board",
    fluent: "FluentMeet",
    hash: "Crypto Hash",
    mark: "Mark",
  },
  projects: ptProjects,
  aboutLink: "Ler a nota mais longa",
  footerYear: "2026",
};

export const dictionaries: Record<Locale, Dictionary> = {
  en,
  pt,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
