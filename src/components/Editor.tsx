import { ExternalLink, GitBranch } from "lucide-react";
import type { Project } from "../data/projects";

type EditorProps = {
  activeProject: Project | null;
};

const statusColors: Record<Project["status"], string> = {
  completed: "text-[#4ec9b0]",
  "in-progress": "text-[#dcb67a]",
  archived: "text-[#858585]",
};

export default function Editor({ activeProject }: EditorProps) {
  if (!activeProject) {
    return (
      <div className="flex-1 bg-[#1e1e1e] flex flex-col items-center justify-center text-[#858585] gap-4">
        <div className="text-6xl">👨‍💻</div>
        <p className="text-lg font-mono">i will change this to my profile</p>
        <p className="text-sm font-mono text-[#555555]">
          ← Click any file in the explorer
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#1e1e1e] overflow-auto p-6 font-mono">
      {/* file path breadcrumb */}
      <div className="text-xs text-[#858585] mb-6">
        projects / <span className="text-[#cccccc]">{activeProject.name}</span>
      </div>

      {/* code block */}
      <div className="max-w-2x1">
        {/* line 1 */}
        <div className="flex gap-4 mb-1 hover:bg-[#2a2d2e] rounded transition-colors duration-100">
          <span className="text-[#555555] select-none w-5 text-right">1</span>
          <span>
            <span className="text-[#569cd6]">const </span>
            <span className="text-[#9cdcfe]">{activeProject.name}</span>
            <span className="text-[#d4d4d4]"> = {"{"}</span>
          </span>
        </div>

        {/* name */}
        <div className="flex gap-4 mb-1 hover:bg-[#2a2d2e] rounded transition-colors duration-100">
          <span className="text-[#555555] select-none w-5 text-right">2</span>
          <span className="ml-6">
            <span className="text-[#9cdcfe]">name</span>
            <span className="text-[#d4d4d4]">: </span>
            <span className="text-[#ce9178]">"{activeProject.name}"</span>
            <span className="text-[#d4d4d4]">,</span>
          </span>
        </div>

        {/* description */}
        <div className="flex gap-4 mb-1 hover:bg-[#2a2d2e] rounded transition-colors duration-100">
          <span className="text-[#555555] select-none w-5 text-right">3</span>
          <span className="ml-6">
            <span className="text-[#9cdcfe]">description</span>
            <span className="text-[#d4d4d4]">: </span>
            <span className="text-[#ce9178]">
              "{activeProject.description}"
            </span>
            <span className="text-[#d4d4d4]">,</span>
          </span>
        </div>

        {/* techStack */}
        <div className="flex gap-4 mb-1 hover:bg-[#2a2d2e] rounded transition-colors duration-100">
          <span className="text-[#555555] select-none w-5 text-right">4</span>
          <span className="ml-6">
            <span className="text-[#9cdcfe]">techStack</span>
            <span className="text-[#d4d4d4]">: [</span>
            {activeProject.techStack.map((tech, i) => (
              <span key={tech}>
                <span className="text-[#ce9178]">"{tech}"</span>
                {i < activeProject.techStack.length - 1 && (
                  <span className="text-[#d4d4d4]">, </span>
                )}
              </span>
            ))}
            <span className="text-[#d4d4d4]">],</span>
          </span>
        </div>

        {/* status */}
        <div className="flex gap-4 mb-1 hover:bg-[#2a2d2e] rounded transition-colors duration-100">
          <span className="text-[#555555] select-none w-5 text-right">5</span>
          <span className="ml-6">
            <span className="text-[#9cdcfe]">status</span>
            <span className="text-[#d4d4d4]">: </span>
            <span className={statusColors[activeProject.status]}>
              "{activeProject.status}"
            </span>
            <span className="text-[#d4d4d4]">,</span>
          </span>
        </div>

        {/* githubUrl */}
        <div className="flex gap-4 mb-1 hover:bg-[#2a2d2e] rounded transition-colors duration-100">
          <span className="text-[#555555] select-none w-5 text-right">6</span>
          <span className="ml-6">
            <span className="text-[#9cdcfe]">githubUrl</span>
              <span className="text-[#d4d4d4]">: </span>
              <a
              href={activeProject.githubUrl}
              target="_blank" rel="noopener noreferrer"
              className="text-[#ce9178] hover:underline hover:text-[#f48771]"
              >
              "{activeProject.githubUrl}"
              
            </a>
            <span className="text-[#d4d4d4]">,</span>
          </span>
        </div>

        {/* liveUrl - optional */}
        {activeProject.liveUrl && (
          <div className="flex gap-4 mb-1 hover:bg-[#2a2d2e] rounded transition-colors duration-100">
            <span className="text-[#555555] select-none w-5 text-right">7</span>
            <span className="ml-6">
              <span className="text-[#9cdcfe]">liveUrl</span>
              <span className="text-[#d4d4d4]">: </span>
              <a
                href={activeProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ce9178] hover:underline hover:text-[#f48771]"
              >
                "{activeProject.liveUrl}"
              </a>
              <span className="text-[#d4d4d4]">,</span>
            </span>
          </div>
        )}

        {/* closing brace */}
        <div className="flex gap-4 mb-6">
          <span className="text-[#555555] select-none w-5 text-right">
            {activeProject.liveUrl ? "8" : "7"}
          </span>
          <span className="text-[#d4d4d4]">{"}"}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 ml-9">
          <a>
            href={activeProject.githubUrl}
            target="_blank" rel="noopener noreferrer" className="flex
            items-center gap-2 px-4 py-2 bg-[#2d2d2d] hover:bg-[#3c3c3c]
            text-[#d4d4d4] text-xs rounded border border-[#3c3c3c]
            transition-colors duration-200"
            <GitBranch size={14} />
            View on GitHub
          </a>

          {activeProject.liveUrl && (
            <a>
              href={activeProject.liveUrl}
              target="_blank" rel="noopener noreferrer" className="flex
              items-center gap-2 px-4 py-2 bg-[#007acc] hover:bg-[#006bb3]
              text-white text-xs rounded transition-colors duration-200"
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
