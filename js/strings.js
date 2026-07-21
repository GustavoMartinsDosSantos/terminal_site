const sharedLinks = {
  github: "https://github.com/GustavoMartinsDosSantos",
  linkedin: "https://www.linkedin.com/in/gustavo-m-santos/",
  email: "mailto:guga.m.s8@hotmail.com",
};

const projectLinks = {
  noteit: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=me.bukovitz.noteit&hl=pt_BR" }, { label: "App Store", url: "https://apps.apple.com/br/app/noteit-amigos-widget/id1570369625" }],
  orbit: [{ label: "Orbit", url: "https://orbitsearch.com/search" }],
  hotriders: [{ label: "HotRiders", url: "https://dev.hotriders.club/" }],
  "pulse-factory": [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.pulsefactory.kuroshita&hl=pt_BR" }],
};

const translations = {
  pt: {
    ui: {
      availableCommands: "comandos disponíveis",
      profile: "perfil",
      profileHelp: "História profissional, especialidades e ferramentas.",
      work: "trabalho",
      workHelp: "Projetos selecionados e detalhes técnicos.",
      connections: "conexões",
      connectionsHelp: "E-mail, LinkedIn e GitHub.",
      navigation: "navegação",
      navigationHelp: "Explore o portfólio como um pequeno filesystem.",
      otherCommands: "Outros: education, resume, lang, theme, clear, whoami. Use Tab para completar.",
      projectUsage: "uso: project <noteit|orbit|supernova|kyndar|hotriders|pulse-factory>",
      projectNotFound: "projeto não encontrado",
      educationTitle: "Bacharelado em Ciência da Computação",
      educationMeta: "UNIVALI · conclusão prevista em 2027",
      educationDetail: "Formação acadêmica em andamento, combinada com experiência profissional desde 2020.",
      locationLabel: "Localização",
      fileNotFound: "arquivo ou diretório não encontrado",
      notDirectory: "não é um diretório",
      isDirectory: "é um diretório",
      openUsage: "uso: open <github|linkedin|email>",
      opening: "abrindo",
      themeEnabled: "tema {theme} ativado",
      light: "claro",
      dark: "escuro",
      languageUsage: "uso: lang <pt|en>",
      languageChanged: "idioma alterado para português",
      commandNotFound: "comando não encontrado",
      typeHelp: "Digite help.",
      welcome: "Digite help para ver os comandos disponíveis.",
      lastLogin: "Último acesso",
      onPortfolio: "no portfólio",
      links: "Links",
    },
    portfolio: {
      name: "Gustavo Martins dos Santos",
      role: "Desenvolvedor Full-Stack com foco em backend, produto e escala",
      location: "Itajaí, SC · Brasil",
      summary: "Sou desenvolvedor full-stack há mais de 6 anos e passei boa parte desse tempo em startups, onde aprendi a cuidar de um problema do começo ao fim: entender a necessidade, definir a solução, implementar, colocar em produção e acompanhar o resultado.<br><br>Minha base mais forte é backend, mas transito bem pelo produto inteiro. Já trabalhei em uma plataforma com mais de 50 milhões de usuários e ajudei a reduzir seus custos de infraestrutura em 20%. Hoje atuo em produtos de busca e inteligência de dados com um índice de mais de 196 milhões de perfis, além de automações com IA que combinam pipelines assíncronos, operação humana e agentes em dispositivos Android reais.<br><br>Também gosto de tirar projetos próprios do papel. Construí um aplicativo de descoberta que já processou milhares de eventos, um marketplace com catálogo de mais de 34 mil itens e um jogo publicado na Play Store. Essa experiência me mantém próximo das decisões de produto, da experiência do usuário e das concessões necessárias para realmente entregar.",
      stats: "6+ anos de experiência | 50M+ usuários atendidos | 196M+ perfis indexados | 20% de redução de custos",
      skills: [["Node.js / NestJS", "5 anos"], ["TypeScript", "5 anos"], ["React / Next.js", "5 anos"], ["SQL / PostgreSQL", "6 anos"], ["Linux", "5 anos"], ["Docker", "4 anos"], ["GCP / Serverless", "2 anos"], ["Integrações com LLMs", "2 anos"], ["System Design", "2 anos"], ["PHP / Slim", "2 anos"], ["C# / Godot", "projetos autorais"]],
      experience: [
        { company: "KAIOH", period: "jan/2023 — atual", title: "Desenvolvedor Full-Stack / Backend", detail: "Produtos de inteligência de perfis, busca e enriquecimento; APIs serverless, curadoria, relações em grafo e interface LLM-to-SQL. Também atuei em uma plataforma com 50M+ usuários e ~1M ativos/dia, reduzindo custos de infraestrutura em 20%." },
        { company: "Ezlogic", period: "fev/2022 — jan/2023", title: "Desenvolvedor Full-Stack", detail: "E-commerce web/mobile e automação de cadastro de produtos VTEX com React, Next.js, React Native, Node.js, Angular, PostgreSQL e Docker." },
        { company: "Pulses", period: "jan/2020 — fev/2022", title: "Desenvolvedor Full-Stack", detail: "Evolução da plataforma principal para 1M+ usuários, integrações REST e contato direto com clientes usando Vue.js, PHP/Slim, MySQL, GCP e Docker." },
      ],
      projects: {
        noteit: { name: "NoteIt · Plataforma Social de Alta Escala", status: "produção · 50M+ usuários · ~1M DAU", detail: "Atuei no backend de uma rede social global que entrega widgets e experiências compartilhadas em tempo real para dezenas de milhões de pessoas. Mantive e evoluí uma arquitetura serverless orientada a eventos para notas, mídia, notificações, contatos, assinaturas e streaks, apoiada por Cloud Functions, Pub/Sub e Cloud Spanner. O trabalho incluiu observabilidade em produção, remoção de gargalos e refatoração de fluxos críticos, contribuindo para uma redução de 20% no custo de infraestrutura sem comprometer disponibilidade ou escala.", tags: ["TypeScript", "Node.js", "Firebase", "Cloud Functions", "Cloud Spanner", "Pub/Sub", "GCP", "Sistemas Distribuídos"] },
        orbit: { name: "Orbit · Plataforma de Inteligência de Perfis", status: "produção · 196M+ perfis indexados", detail: "Atuei na construção de uma plataforma de people intelligence que transforma dados dispersos da web, redes sociais e provedores especializados em perfis estruturados e pesquisáveis. O pipeline possui três níveis progressivos de enriquecimento: resolve identidade, encontra e valida fontes, usa LLMs para gerar buscas e filtrar resultados, consolida entidades duplicadas e produz fatos com rastreabilidade. A arquitetura separa API e execução assíncrona entre GKE, Cloud Tasks e workers no Cloud Run, com concorrência controlada, retries, checkpoints e replay. Hoje o índice de busca reúne mais de 196 milhões de perfis.", tags: ["Next.js", "TypeScript", "Python", "PostgreSQL", "LLMs", "Enriquecimento de Dados", "Resolução de Entidades", "Elasticsearch", "GKE", "Cloud Run", "Cloud Tasks"] },
        supernova: { name: "Supernova · Operações para Criadores", status: "produção · automação com IA", detail: "Construí uma plataforma que cobre todo o ciclo operacional de creators: descoberta no TikTok, avaliação com IA, aprovação humana, outreach multietapas, tratamento de respostas, onboarding, briefs, acompanhamento de conteúdo, métricas e pagamentos via Stripe. Para operar onde APIs tradicionais não eram suficientes, desenvolvi uma arquitetura de agentes Android que controla dispositivos reais, captura telas e executa ações supervisionadas, coordenada por jobs assíncronos e estado persistido. A operação já registra mais de 240 mil snapshots de posts, 82 mil observações mobile e 3,7 mil eventos de outreach por e-mail.", tags: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Cloud Tasks", "Firebase", "Android", "Stripe", "Automação de Workflows"] },
        kyndar: { name: "Kyndar · Descoberta Local", status: "produto autoral · 7,7K+ eventos", detail: "Projetei e implementei um produto mobile que transforma conteúdo disperso da web e de redes sociais em recomendações estruturadas de lugares e eventos. O sistema opera navegadores, coleta publicações e stories, usa LLMs para extrair informações, enriquece estabelecimentos, pontua candidatos e consolida duplicatas antes da publicação. Agentes independentes e tarefas recorrentes mantêm o catálogo atualizado, com trilha de auditoria e testes end-to-end dos fluxos de ingestão. O pipeline já executou mais de 8,9 mil ingestões, processou 15 mil perfis de origem e mais de 21 mil candidatos, resultando em 7,7 mil eventos disponíveis no produto.", tags: ["Expo", "React Native", "TypeScript", "Node.js", "PostgreSQL", "Firebase", "Puppeteer", "LLMs", "Pipelines de Dados"] },
        hotriders: { name: "HotRiders · Marketplace de Colecionáveis", status: "produto autoral · catálogo com 34K+ itens", detail: "Projetei um marketplace especializado que transforma um catálogo de mais de 34 mil miniaturas, organizadas em 4 mil séries, em uma experiência completa de compra, venda e gestão de coleção. O produto inclui busca, lojas, anúncios, favoritos, wishlist, histórico e alertas de preço, carrinho, checkout, pedidos, pagamentos, frete, avaliações e ferramentas administrativas. No backend, organizei a API em camadas de rotas, serviços e repositórios, com autenticação, moderação, jobs de snapshots de preço, armazenamento de mídia em cloud e testes end-to-end dos fluxos críticos.", tags: ["Next.js", "React", "TypeScript", "Express", "PostgreSQL", "Mercado Pago", "Integração de Frete", "GCP", "Testes E2E"] },
        "pulse-factory": { name: "Pulse Factory · Idle Game", status: "produto autoral · publicado no Android", detail: "Levei um jogo incremental mobile da ideia até uma versão publicada, assumindo game design, arquitetura, balanceamento, interface e pipeline de release. O jogo combina economia data-driven, números de alta magnitude, automação, progresso offline e sistemas de ascensão. A base foi separada em serviços de estado, economia, saves, localização, áudio, analytics e monetização; criei também um simulador para validar curvas de progressão antes de levá-las ao jogo. O processo de entrega inclui geração de assets, screenshots localizadas, assinatura e builds para a Play Store.", tags: ["Godot 4", "GDScript", "Arquitetura de Jogos", "Big Number", "Progresso Offline", "Simulação de Balanceamento", "Android"] },
      },
    },
  },
  en: {
    ui: {
      availableCommands: "available commands",
      profile: "profile",
      profileHelp: "Professional background, specialties, and tools.",
      work: "work",
      workHelp: "Selected projects and technical details.",
      connections: "connections",
      connectionsHelp: "Email, LinkedIn, and GitHub.",
      navigation: "navigation",
      navigationHelp: "Explore the portfolio as a small filesystem.",
      otherCommands: "Others: education, resume, lang, theme, clear, whoami. Use Tab to autocomplete.",
      projectUsage: "usage: project <noteit|orbit|supernova|kyndar|hotriders|pulse-factory>",
      projectNotFound: "project not found",
      educationTitle: "Bachelor's Degree in Computer Science",
      educationMeta: "UNIVALI · expected graduation in 2027",
      educationDetail: "Degree in progress, combined with professional software engineering experience since 2020.",
      locationLabel: "Location",
      fileNotFound: "no such file or directory",
      notDirectory: "not a directory",
      isDirectory: "is a directory",
      openUsage: "usage: open <github|linkedin|email>",
      opening: "opening",
      themeEnabled: "{theme} theme enabled",
      light: "light",
      dark: "dark",
      languageUsage: "usage: lang <pt|en>",
      languageChanged: "language changed to English",
      commandNotFound: "command not found",
      typeHelp: "Type help.",
      welcome: "Type help to see the available commands.",
      lastLogin: "Last login",
      onPortfolio: "on portfolio",
      links: "Links",
    },
    portfolio: {
      name: "Gustavo Martins dos Santos",
      role: "Full-Stack Developer focused on backend, product, and scale",
      location: "Itajaí, SC · Brazil",
      summary: "I have been working as a full-stack developer for over 6 years, mostly in startups, where I learned to own problems from start to finish: understand the need, shape the solution, build it, ship it, and follow it in production.<br><br>Backend is where I am strongest, but I am comfortable working across the entire product. I have contributed to a platform serving more than 50 million users and helped reduce its infrastructure costs by 20%. Today I work on search and data intelligence products with an index of more than 196 million profiles, as well as AI-powered automation that combines asynchronous pipelines, human oversight, and agents operating real Android devices.<br><br>I also enjoy taking my own products from idea to release. I have built a discovery app that has processed thousands of events, a marketplace with a catalog of more than 34,000 items, and a game published on Google Play. That experience keeps me close to product decisions, user experience, and the tradeoffs required to actually ship.",
      stats: "6+ years of experience | 50M+ users served | 196M+ indexed profiles | 20% cost reduction",
      skills: [["Node.js / NestJS", "5 years"], ["TypeScript", "5 years"], ["React / Next.js", "5 years"], ["SQL / PostgreSQL", "6 years"], ["Linux", "5 years"], ["Docker", "4 years"], ["GCP / Serverless", "2 years"], ["LLM Integrations", "2 years"], ["System Design", "2 years"], ["PHP / Slim", "2 years"], ["C# / Godot", "independent projects"]],
      experience: [
        { company: "KAIOH", period: "Jan 2023 — present", title: "Full-Stack / Backend Developer", detail: "Profile intelligence, search, and enrichment products; serverless APIs, curation workflows, graph relationships, and an LLM-to-SQL interface. I also worked on a platform serving 50M+ users and ~1M daily active users, reducing infrastructure costs by 20%." },
        { company: "Ezlogic", period: "Feb 2022 — Jan 2023", title: "Full-Stack Developer", detail: "Web/mobile e-commerce and VTEX product onboarding automation using React, Next.js, React Native, Node.js, Angular, PostgreSQL, and Docker." },
        { company: "Pulses", period: "Jan 2020 — Feb 2022", title: "Full-Stack Developer", detail: "Core platform development for 1M+ users, REST integrations, and direct client support using Vue.js, PHP/Slim, MySQL, GCP, and Docker." },
      ],
      projects: {
        noteit: { name: "NoteIt · High-Scale Social Platform", status: "production · 50M+ users · ~1M DAU", detail: "I worked on the backend of a global social platform delivering real-time widgets and shared experiences to tens of millions of people. I maintained and evolved an event-driven serverless architecture for notes, media, notifications, contacts, subscriptions, and streaks, built on Cloud Functions, Pub/Sub, and Cloud Spanner. My work covered production observability, bottleneck removal, and critical data-flow refactoring, helping reduce infrastructure costs by 20% without compromising availability or scale.", tags: ["TypeScript", "Node.js", "Firebase", "Cloud Functions", "Cloud Spanner", "Pub/Sub", "GCP", "Distributed Systems"] },
        orbit: { name: "Orbit · Profile Intelligence Platform", status: "production · 196M+ indexed profiles", detail: "I helped build a people intelligence platform that turns fragmented web, social, and third-party data into structured, searchable profiles. Its three progressive enrichment levels resolve identities, discover and validate sources, use LLMs to generate searches and filter results, consolidate duplicate entities, and produce traceable facts. The architecture separates the API from asynchronous execution across GKE, Cloud Tasks, and Cloud Run workers, with controlled concurrency, retries, checkpoints, and replay. The search index now holds more than 196 million profiles.", tags: ["Next.js", "TypeScript", "Python", "PostgreSQL", "LLMs", "Data Enrichment", "Entity Resolution", "Elasticsearch", "GKE", "Cloud Run", "Cloud Tasks"] },
        supernova: { name: "Supernova · Creator Operations Platform", status: "production · AI automation", detail: "I built a platform spanning the full creator operations lifecycle: TikTok discovery, AI-assisted evaluation, human approval, multi-step outreach, response processing, onboarding, briefs, content tracking, metrics, and Stripe payments. Where traditional APIs were not enough, I developed an Android agent architecture that controls real devices, captures screens, and performs supervised actions, coordinated through asynchronous jobs and persisted state. The operation has recorded more than 240,000 post snapshots, 82,000 mobile observations, and 3,700 email outreach events.", tags: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI", "Cloud Tasks", "Firebase", "Android", "Stripe", "Workflow Automation"] },
        kyndar: { name: "Kyndar · Local Discovery", status: "independent product · 7.7K+ events", detail: "I designed and built a mobile product that turns scattered web and social content into structured venue and event recommendations. The system operates browsers, collects posts and stories, uses LLMs to extract information, enriches venues, scores candidates, and consolidates duplicates before publication. Independent agents and recurring jobs keep the catalog fresh, backed by an audit trail and end-to-end ingestion tests. The pipeline has run more than 8,900 ingestions, processed 15,000 source profiles and over 21,000 candidates, producing 7,700 events available in the product.", tags: ["Expo", "React Native", "TypeScript", "Node.js", "PostgreSQL", "Firebase", "Puppeteer", "LLMs", "Data Pipelines"] },
        hotriders: { name: "HotRiders · Collectibles Marketplace", status: "independent product · 34K+ catalog items", detail: "I designed a specialized marketplace that turns a catalog of more than 34,000 die-cast models across 4,000 series into a complete buying, selling, and collection-management experience. It includes search, stores, listings, favorites, wishlists, price history and alerts, cart, checkout, orders, payments, shipping, reviews, and administrative tools. The backend follows route, service, and repository layers, with authentication, moderation, price snapshot jobs, cloud media storage, and end-to-end coverage for critical flows.", tags: ["Next.js", "React", "TypeScript", "Express", "PostgreSQL", "Mercado Pago", "Shipping Integration", "GCP", "E2E Tests"] },
        "pulse-factory": { name: "Pulse Factory · Idle Game", status: "independent product · published on Android", detail: "I took a mobile incremental game from concept to a published release, owning game design, architecture, balancing, UI, and the release pipeline. The game combines a data-driven economy, high-magnitude numbers, automation, offline progress, and ascension systems. Its codebase separates state, economy, saves, localization, audio, analytics, and monetization, while a custom simulator validates progression curves before they reach the game. Delivery includes asset generation, localized screenshots, signing, and Play Store builds.", tags: ["Godot 4", "GDScript", "Game Architecture", "Big Number", "Offline Progress", "Balance Simulation", "Android"] },
      },
    },
  },
};

let userLanguage = localStorage.getItem("terminal-language") || (navigator.language.toLowerCase().startsWith("pt") ? "pt" : "en");
let ui;
let portfolio;

function setLanguage(language) {
  userLanguage = language;
  ui = translations[language].ui;
  portfolio = translations[language].portfolio;
  portfolio.links = sharedLinks;
  Object.entries(projectLinks).forEach(([project, links]) => { portfolio.projects[project].links = links; });
  document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  document.title = language === "pt" ? "Gustavo Santos — Terminal" : "Gustavo Santos — Terminal Portfolio";
  document.querySelector('meta[name="description"]').content = language === "pt"
    ? "Portfólio de Gustavo Martins dos Santos — Desenvolvedor Full-Stack."
    : "Gustavo Martins dos Santos — Full-Stack Developer portfolio.";
  document.querySelector("main").setAttribute("aria-label", language === "pt" ? "Portfólio em formato de terminal" : "Terminal-style portfolio");
  document.getElementById("terminal").setAttribute("aria-label", language === "pt" ? "Saída do terminal" : "Terminal output");
  document.getElementById("commandInput").setAttribute("aria-label", language === "pt" ? "Digite um comando" : "Type a command");
  localStorage.setItem("terminal-language", language);
}

setLanguage(userLanguage);
