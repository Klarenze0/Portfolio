import { GitBranch, Link, Mail, Files } from "lucide-react";
import { aboutMe } from "../data/projects";

type ActivityItem = {
  icon: React.ReactNode;
  label: string;
  href?: string;
  onClick?: () => void;
};

type ActivityBarProps = {
  onToggleExplorer: () => void;
  isExplorerOpen: boolean;
};

export default function ActivityBar({
  onToggleExplorer,
  isExplorerOpen,
}: ActivityBarProps) {
  const items: ActivityItem[] = [
    { icon: <Files size={22} />, label: "Projects", onClick: onToggleExplorer },
    { icon: <GitBranch size={22} />, label: "GitHub", href: aboutMe.github },
    { icon: <Link size={22} />, label: "LinkedIn", href: aboutMe.linkedin },
    {
      icon: <Mail size={22} />,
      label: "Email",
      href: `mailto:${aboutMe.email}`,
    },
  ];

  return (
    <div className="w-12 bg-[#333333] h-full flex flex-col items-center py-4 gap-6">
      {items.map((item) => {
        return (
          <a
            key={item.label}
            href={item.href}
            onClick={
              item.onClick
                ? (e) => {
                    e.preventDefault();
                    item.onClick!();
                  }
                : undefined
            }
            target={item.onClick ? undefined : "_blank"}
            rel="noopener noreferrer"
            className={`
      transition-colors duration-200 cursor-pointer p-1 rounded
      hover:bg-[#2a2d2e] relative group
      ${item.label === "Projects" && isExplorerOpen ? "text-[#d4d4d4]" : "text-[#858585] hover:text-[#d4d4d4]"}
    `}
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
