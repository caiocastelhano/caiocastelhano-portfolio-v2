import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "museu-autobiografico",
    title: {
      pt: "Museu Autobiográfico",
      en: "Museu Autobiográfico",
    },
    description: {
      pt: "Site para o projeto artístico idealizado por Marcelo Rodrigues. A experiência museológica combina arte, memória e narrativas pessoais. Responsável por todo o desenvolvimento, do layout ao deploy.",
      en: "Website for an artistic project conceived by Marcelo Rodrigues. The museological experience combines art, memory and personal narratives. I was responsible for the entire development process, from layout to deployment.",
    },
    stackTags: ["Next.js", "React", "CSS Modules", "JavaScript", "Vercel"],
    projectType: "freelancer",
    liveUrl: "https://www.museuautobiografico.org/",
    backgroundImage: "/assets/projects/museu.jpg",
  },

  {
    slug: "gisele-sartini",
    title: {
      pt: "Gisele Sartini",
      en: "Gisele Sartini",
    },
    description: {
      pt: "Site bilíngue de Gisele Sartini, profissional multimídia do audiovisual. O site reúne vídeos, projetos autorais e trabalhos selecionados. Responsável por todo o desenvolvimento, do layout ao deploy.",
      en: "Bilingual site for multimedia professional Gisele Sartini. The website brings together videos, personal projects and selected work. I was responsible for the entire development process, from layout to deployment.",
    },
    stackTags: ["Next.js", "React", "CSS Modules", "JavaScript", "Vercel"],
    projectType: "freelancer",
    liveUrl: "https://www.giselesartini.com/",
    backgroundImage: "/assets/projects/gisele.jpg",
  },

  {
    slug: "renata-lage",
    title: {
      pt: "Renata Lage",
      en: "Renata Lage",
    },
    description: {
      pt: "Site multilíngue da psicóloga Renata Lage, com informações sobre sua trajetória e atendimentos online. Responsável por todo o desenvolvimento, do layout ao deploy.",
      en: "Multilingual website for psychologist Renata Lage, presenting her professional background and online practice. I was responsible for the entire development process, from layout to deployment.",
    },
    stackTags: ["Next.js", "React", "CSS Modules", "JavaScript", "Vercel"],
    projectType: "freelancer",
    liveUrl: "https://www.renatalagepsicologa.com.br/",
    backgroundImage: "/assets/projects/renata.jpeg",
  },

  {
    slug: "giggoers",
    title: {
      pt: "GigGoers",
      en: "GigGoers",
    },
    description: {
      pt: "Aplicação web responsiva para descoberta e compartilhamento de eventos musicais em São Paulo. Desenvolvido em grupo em duas semanas durante o bootcamp da Le Wagon.",
      en: "Responsive web application for discovering and sharing live music events in São Paulo. Developed in a team over two weeks during the Le Wagon bootcamp.",
    },
    stackTags: ["Ruby on Rails", "JavaScript", "HTML", "SCSS", "Dockerfile", "Heroku", "Mobile-first"],
    projectType: "academic",
    liveUrl: "https://giggoers-f8d886acbf20.herokuapp.com/",
    backgroundImage: "/assets/projects/giggoers.jpg",
  },

  {
    slug: "fabio-montanari",
    title: {
      pt: "Fabio Montanari",
      en: "Fabio Montanari",
    },
    description: {
      pt: "Site bilíngue do roteirista e diretor Fabio Montanari, com seções dedicadas à sua trajetória profissional, trabalhos selecionados, consultoria de roteiro e atuação na indústria audiovisual. Responsável por todo o desenvolvimento, do layout ao deploy.",
      en: "Bilingual website for screenwriter and director Fabio Montanari, featuring sections dedicated to his professional background, selected work, script consulting and industry engagement. I was responsible for the entire development process, from layout to deployment.",
    },
    stackTags: ["Next.js", "React", "CSS Modules", "JavaScript", "Vercel"],
    projectType: "freelancer",
    liveUrl: "https://fabiomontanari.com/",
    backgroundImage: "/assets/projects/montanari.jpg",
  },

  {
    slug: "portfolio-v1",
    title: {
      pt: "Portfólio v1",
      en: "Portfolio v1",
    },
    description: {
      pt: "Primeira versão do meu portfólio, desenvolvido do zero para apresentar meus projetos e trajetória profissional, com design limpo, responsivo e acessível.",
      en: "First version of my personal portfolio, built from scratch to present my projects and professional journey, with a clean, responsive and accessible design.",
    },
    stackTags: ["React", "JavaScript", "CSS Modules", "Vercel"],
    projectType: "personal",
    liveUrl: "https://portfolio-mu-wine-13.vercel.app",
    backgroundImage: "/assets/projects/portfolio.jpg",
  },
];