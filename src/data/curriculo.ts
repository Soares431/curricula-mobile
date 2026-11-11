export const perfil = {
  nome: "Lucas da Silva Soares",
  primeiroNome: "Lucas",
  iniciais: "LS",
  cargo: "Estudante de Ciência da Computação",
  local: "Jaboatão dos Guararapes – PE",
  telefone: "(81) 98739-0367",
  telefoneLink: "tel:+5581987390367",
  email: "lucassoareslll32@gmail.com",
  github: "https://github.com/Soares431",
  linkedin: "https://www.linkedin.com/in/lucassoares32",
  sobre:
    "Desenvolvedor com experiência em Java e Python, atuando no desenvolvimento de APIs REST e aplicações com Django, além de bancos de dados relacionais como MySQL e PostgreSQL. Faço automações com Python usando Selenium, PyAutoGUI e Pandas para web scraping, manipulação de planilhas e otimização de processos. Também tenho conhecimentos em React e em Engenharia de Prompt aplicada a soluções de Inteligência Artificial.",
};

export const habilidades = [
  "Python", "Java", "API Rest", "Django", "Selenium",
  "PostgreSQL", "Git", "GitHub", "Scrum",
];
export const comportamentais = ["Analítico", "Resolução de problemas", "Metódico"];
export const idiomas = "Inglês intermediário";

export const formacao = [
  { curso: "Ciência da Computação", local: "UNICAP", periodo: "08/2024 – 06/2028", status: "Em andamento" },
  { curso: "Técnico em Desenvolvimento de Sistemas", local: "ETE Porto Digital", periodo: "02/2024 – 07/2025", status: "Concluído" },
  { curso: "Técnico em Tecnologia da Informação", local: "SENAI", periodo: "02/2022 – 07/2023", status: "Concluído" },
];

export const extras = [
  {
    titulo: "Curso de Desenvolvimento de Software",
    meta: "12/2022 • 400 horas",
    texto:
      "Metodologias ágeis, POO com Java, PostgreSQL, JPA, Hibernate, APIs RESTful, Spring Boot e Spring Initializr.",
  },
  {
    titulo: "Projetos em equipe",
    meta: "Trabalho colaborativo",
    texto:
      "Desenvolvimento de projetos em grupo, como o Código Morse com Raspberry Pi, atuando com liderança e organização de tarefas.",
  },
];

export const experiencias = [
  {
    cargo: "Estagiário em TI",
    empresa: "MC minhaconta | Recife – PE",
    periodo: "Ago/2025 – Atual",
    itens: [
      "Suporte técnico a usuários: manutenção, montagem e configuração de computadores.",
      "Administração de servidores com WHM e criação/gestão de e-mails corporativos via cPanel.",
      "Controle de estoque de equipamentos de TI, administração de sistemas e manutenção de sites corporativos.",
      "Scripts e automações em Python (Selenium, PyAutoGUI e Pandas) para web scraping, planilhas e processos operacionais.",
    ],
    techs: ["Python", "Selenium", "PyAutoGUI", "Pandas", "WHM", "cPanel"],
  },
];

export const projetos = [
  {
    icone: "🎮",
    nome: "Jogo da Forca",
    desc: "Jogo feito em React Native dentro deste app, com boneco desenhado por componentes e teclado virtual. Jogue na aba Jogo.",
    tech: ["React Native", "TypeScript", "Hooks"],
    interno: true,
    link: "",
  },
  {
    icone: "💡",
    nome: "Código Morse",
    desc: "Projeto em equipe com Raspberry Pi que converte caracteres em código Morse usando LEDs. Controle de GPIOs, validação de entradas e suporte a letras, números e símbolos.",
    tech: ["Python", "Raspberry Pi"],
    interno: false,
    link: "https://github.com/Soares431/Codigo-Morse",
  },
  {
    icone: "🏫",
    nome: "Sistema de Gestão Escolar",
    desc: "Sistema full stack para cadastro e controle de alunos, professores, turmas e salas, com vínculos entre eles (matrícula, professor responsável e sala).",
    tech: ["Java", "Spring Boot", "PostgreSQL", "JPA/Hibernate", "React"],
    interno: false,
    link: "https://github.com/Soares431/Sistema-de-Gerenciamento-Escolar",
  },
  {
    icone: "🌐",
    nome: "Currículo & Portfólio Web",
    desc: "Versão web deste portfólio, com navegação entre seções e o mesmo Jogo da Forca.",
    tech: ["Next.js", "React", "CSS"],
    interno: false,
    link: "https://github.com/Soares431/Curriculo_Portifolio",
  },
];

// Tudo o que foi usado para construir este app (tela "Sobre").
export const tecnologiasApp = [
  {
    grupo: "Base",
    itens: [
      "Expo SDK 58",
      "React Native",
      "React (Hooks: useState, useRef, useEffect)",
      "TypeScript",
    ],
  },
  {
    grupo: "Navegação",
    itens: ["Expo Router (rotas por arquivo)", "Tabs do Expo Router (barra inferior)"],
  },
  {
    grupo: "Interface",
    itens: [
      "StyleSheet",
      "ScrollView, Pressable, View, Text",
      "Animated API (animação de entrada)",
      "Linking (abre GitHub, LinkedIn, e-mail e telefone)",
    ],
  },
  {
    grupo: "Build e distribuição",
    itens: ["EAS Build", "EAS Update (expo-updates)", "expo-dev-client"],
  },
];
