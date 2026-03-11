import type { Dictionary } from './types';

export const en: Dictionary = {
  nav: {
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
  },

  stackBlock: {
    sentence: 'Technologies and tools I use to build my projects',
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
    title: "Contact",
    text: "If you'd like to talk about a project, a collaboration, or just say hello, you can reach me at:",
    email: "castelhanoc@gmail.com",
  },

  aboutBlock: {
    title: "About",
    name: "Caio Castelhano",

    lead:
      "I'm a full-stack developer, but my main focus is on front-end.",

    supportingText:
      "I enjoy building projects from the ground up, organizing the structure before writing code and thinking carefully about user experience, responsiveness and accessibility.",

    paragraphOne:
      "Today I mainly work with Ruby on Rails, JavaScript, React, Next.js and TypeScript. In my projects I usually handle the whole process: architecture, interface, deployment and domain setup.",

    paragraphTwoPartOne:
      "Before moving into tech, I spent over ten years working in communication and also studied film and philosophy. That background still influences how I think about narrative, structure and experience. I also work as a teacher and teaching assistant at",

    paragraphTwoPartTwo:
      "supporting students learning web development.",
  },
  projectTypes: {
    freelancer: "Freelancer",
    academic: "Academic project",
    personal: "Personal project",
  },
  projectCard: {
    openProjectAriaLabel: "Open project",
    technologiesAriaLabel: "Technologies used",
  },
};