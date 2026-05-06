export type Project = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "archived";
};

export const projects: Project[] = [
  {
    id: "1",
    name: "Portfolio",
    description:
      "A developer portfolio showcasing my projects and skills in modern web development, built with React, TypeScript, and Tailwind CSS. Designed with a VS Code inspired interface to reflect my passion for clean UI and developer-focused experiences.",
    techStack: ["React", "Typescript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/Klarenze0/Portfolio",
    status: "in-progress",
  },
  {
    id: "2",
    name: "Appointment System",
    description:
      "A full-stack appointment and scheduling system built with Laravel 12 and React. It enables clients to conveniently book appointments online in real-time, while providing staff with tools to manage their schedules efficiently and avoid conflicts. Administrators have full control through a centralized dashboard where they can monitor bookings, manage users, and oversee overall system activity. The platform is designed with a focus on usability, responsiveness, and scalability, ensuring a smooth experience across both desktop and mobile devices.",
    techStack: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "PostgreSQL",
      "React",
      "TypeScript",
    ],
    githubUrl: "https://github.com/Klarenze0/appointment-system",
    status: "completed",
  },
  {
    id: "3",
    name: "Ethereal Essence Mock Ecommerce",
    description:
      "Designed and developed a mock e-commerce platform as a 2nd year college project to demonstrate full-stack development skills. The system features seamless frontend and backend integration, allowing users to browse products, manage carts, and simulate a complete checkout process. It also includes an admin dashboard for managing products, inventory, and order data, showcasing full transactional workflows from both user and administrator perspectives.",
    techStack: ["PHP", "MySQL", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Klarenze0/Ethereal_Essence-mock_ecommerce",
    status: "completed",
  },
  {
    id: "4",
    name: "Knights Trial",
    description:
      "A 2D platformer game where the player controls a knight on a quest to defeat monsters and progress through multiple levels. The game features smooth character movement, a basic combat system, health management, and enemy with movement patterns. It focuses on delivering engaging gameplay mechanics while demonstrating core game development principles such as collision detection, state management, and interactive level design.",
    techStack: ["Unity", "C#"],
    githubUrl: "https://github.com/Klarenze0/KnightsTrial",
    status: "completed",
  },
  {
    id: "5",
    name: "Inventory Management System",
    description:
      "A web-based Inventory Management System built with Laravel, Inertia.js, and Vue 3. It provides a complete solution for managing products, categories, and suppliers, along with detailed stock movement tracking including stock in, stock out, and inventory adjustments. The system implements role-based access control to separate admin and staff permissions, ensuring secure operations. It also features real-time stock monitoring and activity logging to track changes and maintain transparency across all inventory transactions.",
    techStack: [
      "Laravel",
      "PHP",
      "Tailwind CSS",
      "Supabase",
      "Vue",
      "TypeScript",
    ],
    githubUrl: "https://github.com/Klarenze0/blog-system",
    status: "completed",
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
  resumeUrl: string;
  photo: string;
  phonenum: string;
};

export const aboutMe: AboutMe = {
  name: "Charles Klarenze A. Dela Cruz",
  role: "Full Stack Developer",
  location: "Calumpit, Bulacan",
  email: "charlesklarenze08@gmail.com",
  github: "https://github.com/Klarenze0",
  linkedin: "https://www.linkedin.com/in/charles-klarenze-dela-cruz-464a1a39b/",
  bio: "I am a full-stack developer passionate about building clean, efficient, and user-friendly web applications. I enjoy working across both frontend and backend systems, turning ideas into fully functional digital products. My focus is on writing maintainable code, creating responsive interfaces, and developing scalable backend solutions. I continuously explore modern technologies to improve my skills and deliver better, more impactful applications.",
  resumeUrl:
    "https://www.dropbox.com/scl/fi/8y2ykaukxm0s2a5v75p8v/DelaCruz_Resume.pdf?rlkey=c9g5kjejm7b5d64pudyk7vikf&st=9qpbmom6&dl=0",
  photo: "/src/assets/me.jpg",
  phonenum: "09684265172",
};
