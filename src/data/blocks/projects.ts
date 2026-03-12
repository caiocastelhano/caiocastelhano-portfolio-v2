import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "museu-autobiografico",
    title: {
      pt: "Museu Autobiográfico",
      en: "Museu Autobiográfico",
    },
    description: {
      pt: "Site para o projeto artístico idealizado por Marcelo Rodrigues Maia. A experiência museológica combina arte, memória e narrativas pessoais. Desenvolvimento completo, do layout ao deploy.",
      en: "Website for an artistic project conceived by Marcelo Rodrigues Maia. The museological experience combines art, memory and personal narratives. Full development, from layout to deployment.",
    },
    stackTags: ["Next.js", "React", "CSS Modules", "JavaScript", "Vercel"],
    projectType: "freelancer",
    liveUrl: "https://www.museuautobiografico.org/",
    backgroundImage: "/assets/projects/museu.webp",
  },

  {
    slug: "gisele-sartini",
    title: {
      pt: "Gisele Sartini",
      en: "Gisele Sartini",
    },
    description: {
      pt: "Portfólio bilíngue de Gisele Sartini, profissional multimídia do audiovisual. O site reúne vídeos, projetos autorais e trabalhos selecionados. Desenvolvimento completo, do layout ao deploy.",
      en: "Bilingual site for multimedia professional Gisele Sartini. The website brings together videos, personal projects and selected work. Full development, from layout to deployment.",
    },
    stackTags: ["Next.js", "React", "CSS Modules", "JavaScript", "Vercel"],
    projectType: "freelancer",
    liveUrl: "https://www.giselesartini.com/",
    backgroundImage: "/assets/projects/gisele.webp",
  },

  {
    slug: "renata-lage",
    title: {
      pt: "Renata Lage",
      en: "Renata Lage",
    },
    description: {
      pt: "Site multilíngue da psicóloga Renata Lage, reunindo informações sobre sua trajetória profissional e contato para atendimentos online. Desenvolvimento completo, do layout ao deploy.",
      en: "Multilingual website for psychologist Renata Lage, bringing together information about her professional background and contact for online sessions. Full development, from layout to deployment.",
    },
    stackTags: ["Next.js", "React", "CSS Modules", "JavaScript", "Vercel"],
    projectType: "freelancer",
    liveUrl: "https://www.renatalagepsicologa.com.br/",
    backgroundImage: "/assets/projects/renata.webp",
  },

  {
    slug: "giggoers",
    title: {
      pt: "GigGoers",
      en: "GigGoers",
    },
    description: {
      pt: "Aplicação web responsiva para descobrir e compartilhar eventos musicais em São Paulo. Desenvolvida em equipe de quatro pessoas durante duas semanas no bootcamp da Le Wagon.",
      en: "Responsive web application for discovering and sharing live music events in São Paulo. Built by a team of four over two weeks during the Le Wagon bootcamp.",
    },
    stackTags: ["Ruby on Rails", "JavaScript", "HTML", "SCSS", "Dockerfile", "Heroku", "Mobile-first"],
    projectType: "academic",
    liveUrl: "https://giggoers-f8d886acbf20.herokuapp.com/",
    backgroundImage: "/assets/projects/giggoers.webp",
  },

  {
    slug: "fabio-montanari",
    title: {
      pt: "Fabio Montanari",
      en: "Fabio Montanari",
    },
    description: {
      pt: "Site bilíngue do roteirista e diretor Fabio Montanari, com seções dedicadas à sua trajetória profissional, trabalhos selecionados, consultoria de roteiro e atuação na indústria audiovisual. Desenvolvimento completo, do layout ao deploy.",
      en: "Bilingual website for screenwriter and director Fabio Montanari, featuring sections dedicated to his professional background, selected work, script consulting and industry engagement. Full development, from layout to deployment.",
    },
    stackTags: ["Next.js", "React", "CSS Modules", "JavaScript", "Vercel"],
    projectType: "freelancer",
    liveUrl: "https://fabiomontanari.com/",
    backgroundImage: "/assets/projects/montanari.webp",
  },

  {
    slug: "portfolio-v1",
    title: {
      pt: "Primeiro portfólio",
      en: "First Portfolio",
    },
    description: {
      pt: "Primeira versão do meu portfólio pessoal, desenvolvida do zero para apresentar meus projetos e marcar o início da minha trajetória como desenvolvedor.",
      en: "First version of my personal portfolio, built from scratch to present my projects and mark the beginning of my journey as a developer.",
    },
    stackTags: ["React", "JavaScript", "CSS Modules", "Vercel"],
    projectType: "personal",
    liveUrl: "https://v1.caiocastelhano.com.br/",
    backgroundImage: "/assets/projects/portfolio.webp",
  },
];