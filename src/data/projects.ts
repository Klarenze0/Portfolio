export type Project = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "archived";
  learned: string[],
  timeline: string,
};

export const projects: Project[] = [
  {
    id: "1",
    name: "Portfolio",
    description:
      "A developer portfolio showcasing my projects and skills in modern web development, built with React, TypeScript, and Tailwind CSS. Designed with a VS Code inspired interface to reflect my passion for clean UI and developer-focused experiences.",
    techStack: ["React", "Typescript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/Klarenze0/Portfolio",
    // liveUrl: "N/A",
    status: "in-progress",
    learned: ['asda', 'asdasd'],
    timeline: 'Feaasd',
  },
  {
    id: "2",
    name: "Appointment System",
    description:
      "A full-stack appointment and scheduling system built with Laravel 12 and React. It allows clients to book appointments online, staff to manage their schedules, and admins to oversee the entire operation from a central dashboard.",
    techStack: ["Laravel", "PHP", "Tailwind CSS", "PostgreSQL", "React"],
    githubUrl: "https://github.com/Klarenze0/appointment-system",
    // liveUrl: "",
    status: "completed",
    learned: ['asda', 'asdasd'],
    timeline: 'Feaasd',
  },
  {
    id: "3",
    name: "Ethereal_Essence-mock_ecommerce",
    description:
      "Designed and built a mock e-commerce platform as my 2nd year college project. Featuring frontend/backend integration, and simulated payment processing and admin side to manage products to demonstrate full transactional workflows.",
    techStack: ["PHP", "MySQL"],
    githubUrl: "https://github.com/Klarenze0/Ethereal_Essence-mock_ecommerce",
    // liveUrl: "ill paste it here later",
    status: "completed",
    learned: ['asda', 'asdasd'],
    timeline: 'Feaasd',
  },
  {
    id: "4",
    name: "Knights trial",
    description:
      "2D platformer where player controls a knight to defeat monsters and clear levels. Implemented movement, combat system, health management, and enemy movements.",
    techStack: ["Unity", "C#"],
    githubUrl: "https://github.com/Klarenze0/KnightsTrial",
    // liveUrl: "ill paste it here later",
    status: "completed",
    learned: ['asda', 'asdasd'],
    timeline: 'Feaasd',
  },
  {
    id: "5",
    name: "Mini Blog System",
    description:
      "A Laravel-based blog system developed for practice and to enhance my web development skills.",
    techStack: ["Unity", "C#"],
    githubUrl: "https://github.com/Klarenze0/blog-system",
    // liveUrl: "ill paste it here later",
    status: "completed",
    learned: ['asda', 'asdasd'],
    timeline: 'Feaasd',
  },
];

export type AboutMe = {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
  skills: string[];
};

export const aboutMe: AboutMe = {
  name: "Charles Klarenze A. Dela Cruz",
  role: "Full Stack Developer",
  location: "Calumpit, Bulacan",
  email: "charlesklarenze08@gmail.com",
  github: "https://github.com/Klarenze0",
  linkedin: "https://www.linkedin.com/in/charles-klarenze-dela-cruz-464a1a39b/",
  bio: "later",
  skills: ["ill", "list", "it", "here", "later"],
};
