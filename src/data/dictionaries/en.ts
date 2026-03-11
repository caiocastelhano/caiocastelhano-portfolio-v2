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
      "I'm a full-stack developer with a strong focus on front-end development.",

    supportingText:
      "I enjoy building projects from the ground up, organizing the structure well before writing any code and carefully considering user experience, responsiveness and accessibility.",

    paragraphOne:
      "Today I primarily work with Ruby on Rails, JavaScript, React, Next.js and TypeScript. In my projects I usually handle the full process, from architecture and interface development to deployment and domain configuration.",

    paragraphTwoPartOne:
      "Before transitioning into tech, I worked for over ten years in communication and also studied film and philosophy. That background influences how I approach and build my projects, bringing a more artistic perspective to my work. I also work as a teacher and teaching assistant at",

    paragraphTwoPartTwo:
      "supporting students as they learn web development.",
  },

  projectTypes: {
    freelancer: "Freelance project",
    academic: "Bootcamp · Le Wagon",
    personal: "Personal project",
  },

  projectCard: {
    openProjectAriaLabel: "Open project",
    technologiesAriaLabel: "Technologies used",
  },
};