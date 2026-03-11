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
      "Sou desenvolvedor full-stack, com foco especial em desenvolvimento front-end.",

    supportingText:
      "Gosto de trabalhar construindo projetos desde o início, organizando bem a estrutura antes de botar a mão no código e pensando com cuidado na experiência do usuário, na responsividade e na acessibilidade.",

    paragraphOne:
      "Hoje trabalho principalmente com Ruby on Rails, JavaScript, React, Next.js e TypeScript. Nos projetos costumo cuidar de todo o processo, da arquitetura à interface, passando pelo deploy e pela configuração de domínio.",

    paragraphTwoPartOne:
      "Antes de migrar para tecnologia, trabalhei por mais de dez anos com comunicação e também estudei cinema e filosofia. Essa bagagem influencia a forma como penso e desenvolvo meus projetos, trazendo também uma dimensão mais artística para o meu trabalho. Também atuo como professor e professor assistente na",

    paragraphTwoPartTwo:
      "apoiando alunos no processo de aprendizado de desenvolvimento web.",
  },

  projectTypes: {
    freelancer: "Projeto freelancer",
    academic: "Bootcamp · Le Wagon",
    personal: "Projeto pessoal",
  },

  projectCard: {
    openProjectAriaLabel: "Abrir projeto",
    technologiesAriaLabel: "Tecnologias utilizadas",
  },
};