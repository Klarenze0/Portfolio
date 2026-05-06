import {
  Calendar,
  ExternalLink,
  GitBranch,
  Lightbulb,
  Rocket,
} from "lucide-react";
import type { Project } from "../data/projects";
import { techIcons } from "../data/techIcons";

type EditorProps = {
  activeProject: Project | null;
};

const statusColors: Record<
  Project["status"],
  { bg: string; text: string; dot: string }
> = {
  completed: {
    bg: "bg-[#1a3a2a]",
    text: "text-[#4ec9b0]",
    dot: "bg-[#4ec9b0]",
  },
  "in-progress": {
    bg: "bg-[#3a2f1a]",
    text: "text-[#dcb67a]",
    dot: "bg-[#dcb67a]",
  },
  archived: { bg: "bg-[#2a2a2a]", text: "text-[#858585]", dot: "bg-[#858585]" },
};

export default function Editor({ activeProject }: EditorProps) {
  if (!activeProject) {
    return (
      <div className="flex-1 bg-[#1e1e1e] flex flex-col items-center justify-center">
        <p className="text-lg font-mono">Select a project to view details</p>
        <p className="text-sm font-mono text-[#555555]">
          Click any file in the explorer
        </p>
      </div>
    );
  }

  const status = statusColors[activeProject.status];

  return (
    <div className="flex-1 bg-[#1e1e1e] overflow-auto">
      <div className="max-w-3x1 mx-auto px-8 py-10 font-mono">
        {/* Breadcrumb */}
        <div className="text-xs text-[$858585] mb-8">
          projects /&nbsp;
          <span className="text-[#cccccc]">{activeProject.name}.ts</span>
        </div>

        {/* Project title + status */}
        <div className="flex items-center gap-4 mb-2">
          <h1 className="text-2x1 font-bold text-[#d4d4d4]">
            {activeProject.name}
          </h1>
          <span
            className={`flex items-center justify-center gap-1.5 px-2 py-1 rounded-full text-xs ${status.bg} ${status.text}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full`} />
            {activeProject.status}
          </span>
        </div>

        <div className="w-6 h-0.5 bg-[#007acc] mb" />

        {/* About the project */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-[#007acc] mb-3">
            <Rocket size={16} />
            <h2 className="text-sm font-bold uppercase tracking-widest">
              About the Project
            </h2>
          </div>
          <p className="text-[#cccccc] text-sm leading-relaxed pl-6 border-l border-[#3c3c3c]">
            {activeProject.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pl-6 pb-5">
          {activeProject.techStack.map((tech) => {
            const techData = techIcons[tech];
            return (
              <span
                key={tech}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2d2d2d] text-xs rounded border border-[#3c3c3c] hover:border-[#555555] transition-colors duration-200"
                style={{ color: techData?.color ?? "#cccccc" }}
              >
                {techData && (
                  <i className={`${techData.className} text-base`} />
                )}
                {tech}
              </span>
            );
          })}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <a
            href={activeProject.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#2d2d2d] hover:bg-[#3c3c3c] text-[#d4d4d4] 
            text-xs rounded border border-[#3c3c3c] hover:border-[#007acc] transition-all duration-200"
          >
            <GitBranch size={14} />
            View on GitHub
          </a>

          {activeProject.liveUrl && (
            <a
              href={activeProject.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center 
            gap-2 px-5 py-2.5 bg-[#007acc] hover:bg-[#006bb3] text-white text-xs rounded transition-all duration-200"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>

      </div>
    </div>
  );
}
