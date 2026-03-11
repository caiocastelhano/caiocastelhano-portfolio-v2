import type { Dictionary } from './types';

export const pt: Dictionary = {
  nav: {
    projects: 'Projetos',
    about: 'Sobre',
    contact: 'Contato',
  },

  stackBlock: {
    sentence: 'Tecnologias e ferramentas que utilizo nos meus projetos',
    items: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
      rails: 'Ruby on Rails',
      typescript: 'TypeScript',
      figma: 'Figma',
      nextjs: 'Next.js',
      react: 'React',
      sql: 'SQL',
      gitGithub: 'Git/GitHub',
      vscode: 'VSCode',
    },
  },
  
  contactBlock: {
    title: "Contato",
    text: "Se quiser conversar sobre um projeto, uma colaboração ou apenas trocar uma ideia, você pode me escrever em:",
    email: "castelhanoc@gmail.com",
  },

  aboutBlock: {
    title: "Sobre",
    name: "Caio Castelhano",

    lead:
      "Sou desenvolvedor full-stack, mas meu foco maior está no front-end.",

    supportingText:
      "Gosto de trabalhar construindo projetos desde o início, organizando bem a estrutura antes de começar a desenvolver e pensando com cuidado na experiência do usuário, na responsividade e na acessibilidade.",

    paragraphOne:
      "Hoje trabalho principalmente com Ruby on Rails, JavaScript, React, Next.js e TypeScript. Nos projetos costumo cuidar de todo o processo: arquitetura, interface, deploy e configuração de domínio.",

    paragraphTwoPartOne:
      "Antes de migrar para tecnologia, trabalhei por mais de dez anos com comunicação e também estudei cinema e filosofia. Essa bagagem ainda influencia a forma como penso narrativa, estrutura e experiência. Hoje também atuo como professor e professor assistente na",

    paragraphTwoPartTwo:
      "apoiando alunos no aprendizado de desenvolvimento web.",
  },
  projectTypes: {
    freelancer: "Freelancer",
    academic: "Projeto acadêmico",
    personal: "Projeto pessoal",
  },
  projectCard: {
    openProjectAriaLabel: "Abrir projeto",
    technologiesAriaLabel: "Tecnologias utilizadas",
  },
};