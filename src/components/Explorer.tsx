import { useState } from "react";
import { projects, type Project } from "../data/projects";
import { ChevronDown, ChevronRight, FileCode2, FileJson, Folder } from "lucide-react";

type ExplorerProps = {
  onSelectProject: (project: Project) => void;
  activeProjectId: string | null;
  onSelectAboutMe: () => void
  isAboutMeActive: boolean
};

export default function Explorer({
  onSelectProject,
  activeProjectId,
  onSelectAboutMe,
  isAboutMeActive,
}: ExplorerProps) {
  const [isFolderOpen, setIsFolderOpen] = useState(true)

  return (
    <div className="w-64 bg-[#252526] h-full border-r border-[#3c3c3c] flex-col pb-4">
      {/* Header */}
      <div className="px-4 py-2 text-xs font-bold text-[#bbbbbb] tracking-widest uppercase">
        Explorer
      </div>

      <div
        onClick={onSelectAboutMe}
        className={`
          flex items-center gap-2 px-4 py-1 cursor-pointer text-sm
          hover:bg-[#2a2d2e] transition-colors duration-150
          ${isAboutMeActive ? 'bg-[#37373d] text-white' : 'text-[#cccccc]'}
        `}
      >
        <FileJson size={15} className="text-[#dcb67a]" />
        <span>aboutMe.js</span>
      </div>

      {/* Folder */}
      <div>
        {/* Folder row */}
        <div
          className="flex items-center gap-1 px-2 py-1 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc] text-sm"
          onClick={() => setIsFolderOpen(!isFolderOpen)}
        >
          {isFolderOpen ? (
            <ChevronDown size={16} />
          ) : (
            <ChevronRight size={16} />
          )}
          <Folder size={16} className="text-[#dcb67a]" />
          <span className="ml-1">myProjects</span>
        </div>

        {/* Files */}
        {isFolderOpen && (
          <div className="ml-4">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`
                  flex items-center gap-2 px-2 py-1 cursor-pointer text-sm
                  hover:bg-[#2a2d2e] transition-colors duration-150 overflow-hidden
                  ${activeProjectId === project.id ? "bg-[#37373d] text-white" : "text-[#cccccc]"}
                `}
              >
                <FileCode2 size={15} className="text-[#519aba]" />
                <span className="truncate max-w-[100px] sm:max-w-[150px] lg:max-w-[200px]">{project.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
