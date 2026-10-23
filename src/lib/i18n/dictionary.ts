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
    pricing: string;
    contact: string;
  };
  ctaTalk: string;
  ctaNote: string;
  menu: string;
  close: string;
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
    pricing: string;
    buildsFrom: string;
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
    viewPricing: string;
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
  pricing: {
    index: string;
    title: string;
    accent: string;
    lede: string;
    clearTitle: string;
    clearBody: string;
    mostChosen: string;
    youGet: string;
    leftOut: string;
    startNote: string;
    bulk: string;
  };
  contact: {
    index: string;
    title1: string;
    title2: string;
    body: string;
    longer: string;
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
  engagements: {
    name: string;
    price: string;
    unit: string;
    length: string;
    get: string;
    leave: string;
    featured: boolean;
  }[];
  projects: Record<string, ProjectCopy>;
  projectTitles: Record<string, string>;
  aboutLink: string;
  footerYear: string;
};

const en: Dictionary = {
  role: "Programmer",
  skip: "Skip to content",
  nav: {
    work: "Work",
    results: "Results",
    process: "Process",
    pricing: "Pricing",
    contact: "Contact",
  },
  ctaTalk: "Let’s talk",
  ctaNote: "Note",
  menu: "Menu",
  close: "Close",
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
    kicker: "Interfaces · Systems · Tools",
    line1: "Your product.",
    line2: "Their next",
    line3: "obsession.",
    description1: "Big ideas deserve software that still makes sense later.",
    description2: "Let’s make yours impossible to abandon.",
    explore: "Explore my work",
    pricing: "See pricing",
    buildsFrom: "Builds from",
    clearScope: "Clear scope",
    honestDelivery: "honest delivery",
    standOut: "Made to stand out",
    studiesShelf: "Studies on the shelf",
    independent: "Independent programmer",
    scroll: "Scroll to explore",
    details: "Built in the details",
  },
  snapshot: {
    studies: "Studies",
    delivered: "delivered",
    eyebrow: "Big systems. Small details.",
    title1: "Worked across products",
    title2: "people actually open.",
    stack: "Daily stack",
  },
  work: {
    index: "01 / The first impression",
    title: "Small frame.",
    accent: "Big energy.",
    lede: "Your product has a story. Give people a reason to step inside — and a way to stay.",
    viewPricing: "View pricing",
    empty: "Nothing filed under this filter yet.",
    foot: "Thumbnails of the work. Open any study for the full note.",
    kinds: "Studies / Interfaces / Systems / Tools",
    filters: {
      all: "Studies",
      interface: "Interface",
      systems: "Systems",
      tool: "Tool",
    },
    studiesCount: "studies",
    studyCount: "study",
    none: "Nothing filed here",
  },
  results: {
    index: "02 / More than a good look",
    title: "Make the click.",
    accent: "Move the needle.",
    lede: "A better first impression. A stronger reason to keep building — and to come back.",
    numbers: "The numbers behind the work",
    pause: "Pause results",
    shelf: "Studies on the shelf",
    rules: "Rules I keep",
    tools: "Tools I reach for",
    note: "Results from this site’s own shelf. The curve is a comparison, not a promise.",
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
  pricing: {
    index: "05 / Good work. Clear prices.",
    title: "Big impact.",
    accent: "No guesswork.",
    lede: "From idea to a build you can open later. Starting points — the real number depends on the shape of the work.",
    clearTitle: "Clear from the start.",
    clearBody: "Scope, timing, and what’s left out — said out loud.",
    mostChosen: "Most chosen",
    youGet: "You get",
    leftOut: "Left out",
    startNote: "Start with a note",
    bulk: "Save time when ordering more than one pass. Mix a read and a build however you like — we’ll confirm brief, timing, and availability in a note.",
  },
  contact: {
    index: "06 / Your next level starts here",
    title1: "Let’s make",
    title2: "them look.",
    body: "Your idea. My next project. A short note is enough — tell me what you’re building or what broke.",
    longer: "Read the longer note",
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
    "CLEAR NAMES",
    "SMALL PARTS",
    "HONEST ERRORS",
    "PLAIN FILES",
    "A WAY OUT",
    "EMPTY, WRONG, WAITING",
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
  engagements: [
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
  ],
  projectTitles: {
    ledger: "Ledger",
    quiet: "Quiet",
    trace: "Trace",
    field: "Field",
    mark: "Mark",
  },
  projects: {
    ledger: {
      kind: "Tool",
      summary:
        "A personal ledger that keeps every amount as whole cents and every change as a line you can read back.",
      problem:
        "Spreadsheets hide the moment a number stopped being true. A cell gets overwritten, a formula drifts, and the total still looks confident.",
      kept: [
        "Amounts are integers in minor units. No floating point on the path that adds money.",
        "Entries are append-only. A correction is a new line, not an edit that erases the old one.",
        "The balance is a fold over the log. It is never a stored column that can drift away from the entries.",
      ],
      leftOut: [
        "Bank connections, budgets, and charts. Those can wait until the record itself is trustworthy.",
        "Multiple currencies in the first version. One unit, named out loud, is enough to prove the model.",
      ],
    },
    quiet: {
      kind: "Interface",
      summary:
        "A reading surface with one column, a type size you set once, and progress that does not announce itself.",
      problem:
        "Reading on a screen is usually a negotiation with chrome. The text shares the room with badges, recommendations, and a bar that wants credit for your attention.",
      kept: [
        "A measure of about sixty-six characters, a short type ramp, and margins that stay wide when the window gets large.",
        "Position stored with the document, not in an account. Close the tab, come back, and the sentence is where you left it.",
        "Controls that appear when you ask and leave when you are reading.",
      ],
      leftOut: [
        "Highlights that turn into a feed, recommendations, and accounts. The page is for the text in front of you.",
      ],
    },
    trace: {
      kind: "Systems",
      summary:
        "A log viewer that opens on the failing span and keeps the rest of the firehose folded until you mean to read it.",
      problem:
        "When a request fails, the useful lines sit next to thousands that are not. Most viewers make you scroll, or they make you learn a query language before you can see the error.",
      kept: [
        "Group by request. The failing span starts expanded, with the few lines before it still attached.",
        "Filters you can say out loud: service, status, since. If a filter needs a manual, it does not ship.",
        "A terminal view and a plain-text export, so a trace can be pasted into a note without a screenshot.",
      ],
      leftOut: [
        "A query language that wants to be SQL, dashboards, and alerting. Trace is for the minute something is already broken.",
      ],
    },
    field: {
      kind: "Tool",
      summary:
        "Notes that are a folder of Markdown. Search walks the files. Sync is whatever you already use for the rest of your disk.",
      problem:
        "A notes app that needs an account has turned your sentences into someone else's database. Leaving means an export, and the export is usually the moment you find out what you do not own.",
      kept: [
        "One file per note. The name is a date plus a slug, so the folder sorts itself.",
        "A search that reads the files. No index you have to rebuild before the note you just wrote shows up.",
        "An editor that is a textarea and a preview. The file on disk is the product, not a cache of it.",
      ],
      leftOut: [
        "Collaboration, live cursors, and a custom sync engine. If the folder syncs, the notes sync.",
      ],
    },
  },
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
    pricing: "Preços",
    contact: "Contato",
  },
  ctaTalk: "Vamos conversar",
  ctaNote: "Nota",
  menu: "Menu",
  close: "Fechar",
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
    kicker: "Interfaces · Sistemas · Ferramentas",
    line1: "Seu produto.",
    line2: "A próxima",
    line3: "obsessão deles.",
    description1: "Grandes ideias merecem software que ainda faz sentido depois.",
    description2: "Vamos fazer o seu impossível de abandonar.",
    explore: "Ver meu trabalho",
    pricing: "Ver preços",
    buildsFrom: "Builds a partir de",
    clearScope: "Escopo claro",
    honestDelivery: "entrega honesta",
    standOut: "Feito para destacar",
    studiesShelf: "Estudos na prateleira",
    independent: "Programador independente",
    scroll: "Role para explorar",
    details: "Construído nos detalhes",
  },
  snapshot: {
    studies: "Estudos",
    delivered: "entregues",
    eyebrow: "Sistemas grandes. Detalhes pequenos.",
    title1: "Trabalhei em produtos",
    title2: "que as pessoas realmente abrem.",
    stack: "Stack do dia",
  },
  work: {
    index: "01 / A primeira impressão",
    title: "Quadro pequeno.",
    accent: "Energia grande.",
    lede: "Seu produto tem uma história. Dê às pessoas um motivo para entrar — e um jeito de ficar.",
    viewPricing: "Ver preços",
    empty: "Nada arquivado neste filtro ainda.",
    foot: "Miniaturas do trabalho. Abra qualquer estudo para a nota completa.",
    kinds: "Estudos / Interfaces / Sistemas / Ferramentas",
    filters: {
      all: "Estudos",
      interface: "Interface",
      systems: "Sistemas",
      tool: "Ferramenta",
    },
    studiesCount: "estudos",
    studyCount: "estudo",
    none: "Nada por aqui",
  },
  results: {
    index: "02 / Mais do que uma boa aparência",
    title: "Faça o clique.",
    accent: "Mova a agulha.",
    lede: "Uma primeira impressão melhor. Um motivo mais forte para continuar construindo — e voltar.",
    numbers: "Os números por trás do trabalho",
    pause: "Pausar resultados",
    shelf: "Estudos na prateleira",
    rules: "Regras que eu sigo",
    tools: "Ferramentas que uso",
    note: "Resultados da própria prateleira deste site. A curva é uma comparação, não uma promessa.",
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
  pricing: {
    index: "05 / Bom trabalho. Preços claros.",
    title: "Grande impacto.",
    accent: "Sem achismos.",
    lede: "Da ideia a um build que você abre depois. Pontos de partida — o número real depende do formato do trabalho.",
    clearTitle: "Claro desde o início.",
    clearBody: "Escopo, prazo e o que fica de fora — dito em voz alta.",
    mostChosen: "Mais escolhido",
    youGet: "Você leva",
    leftOut: "De fora",
    startNote: "Começar com uma nota",
    bulk: "Economize tempo pedindo mais de uma passagem. Misture uma leitura e um build como quiser — confirmamos briefing, prazo e disponibilidade numa nota.",
  },
  contact: {
    index: "06 / Seu próximo nível começa aqui",
    title1: "Vamos fazer",
    title2: "eles olharem.",
    body: "Sua ideia. Meu próximo projeto. Uma nota curta basta — diga o que está construindo ou o que quebrou.",
    longer: "Ler a nota mais longa",
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
    "NOMES CLAROS",
    "PARTES PEQUENAS",
    "ERROS HONESTOS",
    "ARQUIVOS SIMPLES",
    "UMA SAÍDA",
    "VAZIO, ERRADO, ESPERANDO",
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
  engagements: [
    {
      name: "Leitura",
      price: "$800",
      unit: "a partir de",
      length: "Alguns dias",
      get: "Uma passagem escrita sobre algo que já existe.",
      leave: "Nenhum produto novo. Nomes, falhas e a próxima mudança.",
      featured: false,
    },
    {
      name: "Build",
      price: "$6,000",
      unit: "a partir de",
      length: "Um build focado",
      get: "Software funcionando, com estados vazio, errado e esperando inclusos.",
      leave: "Sem plataforma, sem pitch deck, sem cerimônia sobrando.",
      featured: true,
    },
    {
      name: "Manter",
      price: "$2,400",
      unit: "por mês, a partir de",
      length: "Contínuo",
      get: "O meio de um sistema, mantido honesto depois da primeira versão.",
      leave: "Não é uma fila de tickets. Um acordo sobre o que permanece claro.",
      featured: false,
    },
  ],
  projectTitles: {
    ledger: "Ledger",
    quiet: "Quiet",
    trace: "Trace",
    field: "Field",
    mark: "Mark",
  },
  projects: {
    ledger: {
      kind: "Ferramenta",
      summary:
        "Um livro-caixa pessoal que guarda cada valor em centavos inteiros e cada mudança como uma linha que dá para reler.",
      problem:
        "Planilhas escondem o momento em que um número deixou de ser verdade. Uma célula é sobrescrita, uma fórmula desvia, e o total ainda parece confiante.",
      kept: [
        "Valores são inteiros em unidades menores. Sem ponto flutuante no caminho que soma dinheiro.",
        "Lançamentos são só-acréscimo. Uma correção é uma linha nova, não uma edição que apaga a antiga.",
        "O saldo é uma dobra sobre o log. Nunca uma coluna guardada que pode divergir dos lançamentos.",
      ],
      leftOut: [
        "Conexões bancárias, orçamentos e gráficos. Isso espera até o registro em si ser confiável.",
        "Várias moedas na primeira versão. Uma unidade, dita em voz alta, basta para provar o modelo.",
      ],
    },
    quiet: {
      kind: "Interface",
      summary:
        "Uma superfície de leitura com uma coluna, um tamanho de tipo que você define uma vez, e progresso que não se anuncia.",
      problem:
        "Ler na tela costuma ser uma negociação com chrome. O texto divide a sala com badges, recomendações e uma barra que quer crédito pela sua atenção.",
      kept: [
        "Uma medida de cerca de sessenta e seis caracteres, uma escala tipográfica curta e margens que ficam largas quando a janela cresce.",
        "Posição guardada com o documento, não numa conta. Feche a aba, volte, e a frase está onde você deixou.",
        "Controles que aparecem quando você pede e saem quando você está lendo.",
      ],
      leftOut: [
        "Destaques que viram feed, recomendações e contas. A página é para o texto à sua frente.",
      ],
    },
    trace: {
      kind: "Sistemas",
      summary:
        "Um visualizador de logs que abre no span que falhou e mantém o resto da mangueira dobrado até você querer ler.",
      problem:
        "Quando uma requisição falha, as linhas úteis ficam ao lado de milhares que não são. A maioria dos viewers faz você rolar, ou aprender uma linguagem de consulta antes de ver o erro.",
      kept: [
        "Agrupar por requisição. O span que falhou começa expandido, com as poucas linhas anteriores ainda ligadas.",
        "Filtros que dá para dizer em voz alta: serviço, status, desde. Se um filtro precisa de manual, ele não vai.",
        "Uma vista de terminal e exportação em texto puro, para colar um trace numa nota sem screenshot.",
      ],
      leftOut: [
        "Uma linguagem de consulta que quer ser SQL, dashboards e alertas. Trace é para o minuto em que algo já quebrou.",
      ],
    },
    field: {
      kind: "Ferramenta",
      summary:
        "Notas que são uma pasta de Markdown. A busca caminha pelos arquivos. O sync é o que você já usa no resto do disco.",
      problem:
        "Um app de notas que precisa de conta transformou suas frases no banco de outra pessoa. Sair significa exportar, e o export costuma ser o momento em que você descobre o que não é seu.",
      kept: [
        "Um arquivo por nota. O nome é data mais slug, então a pasta se organiza sozinha.",
        "Uma busca que lê os arquivos. Sem índice que você precisa reconstruir antes da nota que acabou de escrever aparecer.",
        "Um editor que é textarea e preview. O arquivo no disco é o produto, não um cache dele.",
      ],
      leftOut: [
        "Colaboração, cursores ao vivo e um motor de sync próprio. Se a pasta sincroniza, as notas sincronizam.",
      ],
    },
  },
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
