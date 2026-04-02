export type Project = {
    id: string
    name: string
    description: string
    techStack: string[]
    githubUrl: string
    liveUrl?: string
    status: 'completed' | 'in-progress' | 'archived'
}

export const projects: Project[] = [
    {
        id: "1",
        name: 'Portfolio',
        description: 'A developer portfolio showcasing my projects and skills in modern web development, built with React, TypeScript, and Tailwind CSS. Designed with a VS Code–inspired interface to reflect my passion for clean UI and developer-focused experiences.',
        techStack: ['React', 'Typescript', 'Tailwind CSS', 'Vite'],
        githubUrl: 'N/A',
        liveUrl: 'N/A',
        status: 'in-progress',
    },
    {
        id: "2",
        name: 'Appointment System',
        description: 'random description muna, ill fix this later',
        techStack: ['Laravel', 'PHP', 'Tailwind CSS', 'PostgreSQL'],
        githubUrl: 'ill paste it here later',
        liveUrl: 'ill paste it here later',
        status: 'completed',
    },
    {
        id: "3",
        name: 'e-commerce',
        description: 'random description muna, ill fix this later',
        techStack: ['Laravel', 'PHP', 'Tailwind CSS', 'PostgreSQL'],
        githubUrl: 'ill paste it here later',
        liveUrl: 'ill paste it here later',
        status: 'completed',
    },
    {
        id: "4",
        name: 'knights trial',
        description: 'random description muna, ill fix this later',
        techStack: ['Unity', 'C#'],
        githubUrl: 'ill paste it here later',
        liveUrl: 'ill paste it here later',
        status: 'completed',
    },
    {
        id: "5",
        name: 'mini blog system',
        description: 'random description muna, ill fix this later',
        techStack: ['Unity', 'C#'],
        githubUrl: 'ill paste it here later',
        liveUrl: 'ill paste it here later',
        status: 'completed',
    },
]

export type AboutMe = {
  name: string
  role: string
  location: string
  email: string
  github: string
  linkedin: string
  bio: string
  skills: string[]
}

export const aboutMe: AboutMe = {
    name: 'Charles Klarenze A. Dela Cruz',
    role: 'Full Stack Developer',
    location: 'Calumpit, Bulacan',
    email: 'charlesklarenze08@gmail.com',
    github: 'https://github.com/Klarenze0',
    linkedin: 'ill paste it here',
    bio: 'later',
    skills: ['ill', 'list', 'it', 'here', 'later']
}