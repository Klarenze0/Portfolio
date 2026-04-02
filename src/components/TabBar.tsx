import { FileCode2, FileJson, X } from "lucide-react";
import type { Project } from "../data/projects";

type TabBarProps = {
  openProjects: Project[];
  activeProjectId: string | null;
  onSelectTab: (project: Project) => void;
  onCloseTab: (projectId: string) => void;
  isAboutMeOpen: boolean;
  isAboutMeActive: boolean;
  onSelectAboutMe: () => void;
  onCloseAboutMe: () => void;
};

export default function TabBar({
  openProjects,
  activeProjectId,
  onSelectTab,
  onCloseTab,
  isAboutMeOpen,
  isAboutMeActive,
  onSelectAboutMe,
  onCloseAboutMe,
}: TabBarProps) {
  if (!isAboutMeOpen && openProjects.length === 0) {
    return <div className="h-9 bg-[#2d2d2d] border-b border-[#3c3c3c]" />;
  }

  return (
    <div className="h-9 bg-[#2d2d2d] border-b border-[#3c3c3c] flex items-end overflow-x-auto">
      {/* aboutMe tab */}
      {isAboutMeOpen && (
        <div
          onClick={onSelectAboutMe}
          className={`
            flex items-center gap-2 px-4 h-9 text-xs cursor-pointer
            border-r border-[#3c3c3c] whitespace-nowrap group
            transition-colors duration-150
            ${
              isAboutMeActive
                ? "bg-[#1e1e1e] text-[#d4d4d4] border-t-2 border-t-[#007acc]"
                : "bg-[#2d2d2d] text-[#858585] hover:bg-[#2a2d2e]"
            }
          `}
        >
          <FileJson size={13} className="text-[#dcb67a]" />
          <span>aboutMe.js</span>
          <span
            onClick={(e) => {
              e.stopPropagation();
              onCloseAboutMe();
            }}
            className="ml-1 rounded p-0.5 text-transparent group-hover:text-[#858585] hover:!text-[#d4d4d4] hover:bg-[#3c3c3c] transition-colors duration-150"
          >
            <X size={12} />
          </span>
        </div>
      )}
      {openProjects.map((project) => {
        const isActive = project.id === activeProjectId;

        return (
          <div
            key={project.id}
            onClick={() => onSelectTab(project)}
            className={`flex items-center gap-2 px-4 h-9 text-xs cursor-pointer border-r border-[#3c3c3c]
                        whitespace-nowrap transition-colors duration-150 group
                        ${
                          isActive
                            ? "bg-[#1e1e1e] text-[#d4d4d4] border-t-2 border-t-[#007acc]"
                            : "bg-[#2d2d2d] text-[#858585] hover:bg-[#2a2d2e]"
                        }
            `}
          >
            <FileCode2 size={13} className="text-[#519aba]" />
            <span>{project.name}</span>

            <span
              onClick={(e) => {
                e.stopPropagation();
                onCloseTab(project.id);
              }}
              className="
                ml-1 rounded p-0.5
                text-transparent group-hover:text-[#858585]
                hover:!text-[#d4d4d4] hover:bg-[#3c3c3c]
                transition-colors duration-150
              "
            >
              <X size={12} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
