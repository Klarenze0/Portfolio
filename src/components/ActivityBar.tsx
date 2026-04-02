import { GitBranch, Link, Mail, ExternalLink, Code2 } from "lucide-react";
import { aboutMe } from "../data/projects";

type ActivityItem = {
  icon: React.ReactNode;
  label: string;
  href: string;
};

export default function ActivityBar() {
  const items: ActivityItem[] = [
    { icon: <GitBranch size={22} />, label: "GitHub", href: aboutMe.github },
    { icon: <Link size={22} />, label: "LinkedIn", href: aboutMe.linkedin },
    {
      icon: <Mail size={22} />,
      label: "Email",
      href: `mailto:${aboutMe.email}`,
    },
    { icon: <ExternalLink size={22} />, label: "Live Portfolio", href: "#" },
  ];

  return (
    <div className="w-12 bg-[#333333] h-full flex flex-col items-center py-4 gap-6">
      <div className="text-[#007acc] mb-4">
        <Code2 size={24} />
      </div>

      {items.map((item) => {
        return (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#858585] hover:text-[#d4d4d4] transition-colors duration-200 cursor-pointer p-1 rounded
            hover:bg-[#2a2d2e] relative group"
          >
            {item.icon}
            <span
              className="absolute left-12 top-1/2 -translate-y-1/2 bg-[#1e1e1e] text-[#d4d4d4] text-xs px-2 py-1
            rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none
            border-[#3c3c3c] z-50"
            >
              {item.label}
            </span>
          </a>
        );
      })}
    </div>
  );
}
