type TechIcon = {
  className: string
  color: string
}

export const techIcons: Record<string, TechIcon> = {
  'React':        { className: 'devicon-react-original',        color: '#61dafb' },
  'TypeScript':   { className: 'devicon-typescript-plain',      color: '#3178c6' },
  'JavaScript':   { className: 'devicon-javascript-plain',      color: '#f7df1e' },
  'Tailwind CSS': { className: 'devicon-tailwindcss-plain',     color: '#38bdf8' },
  'Vite':         { className: 'devicon-vitejs-plain',          color: '#646cff' },
  'PostgreSQL':   { className: 'devicon-postgresql-plain',      color: '#336791' },
  'Git':          { className: 'devicon-git-plain',             color: '#f05032' },
  'PHP':          { className: 'devicon-php-plain',             color: '#777bb4' },
  'Laravel':      { className: 'devicon-laravel-original',      color: '#ff2d20' },
  'MySQL':        { className: 'devicon-mysql-original',        color: '#4479a1' },
  'Unity':        { className: 'devicon-unity-plain',           color: '#ffffff' },
  'C#':           { className: 'devicon-csharp-plain',          color: '#9b4f97' },
  'CSS':          { className: 'devicon-css3-plain',            color: '#264de4' },
  'Vue':          { className: 'devicon-vuejs-plain',           color: '#42b883' },
  'Supabase':     { className: 'devicon-supabase-plain',        color: '#3ecf8e' },
}