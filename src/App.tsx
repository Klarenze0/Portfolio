import { useState } from "react";
import ActivityBar from "./components/ActivityBar";
import Explorer from "./components/Explorer";
import Editor from "./components/Editor";
import TabBar from "./components/TabBar";
import StatusBar from "./components/StatusBar";
import AboutMeEditor from "./components/AboutMeEditor";
import { type Project } from "./data/projects";

const ABOUT_ME_TAB = "aboutMe";

function App() {
  const [openProjects, setOpenProjects] = useState<Project[]>([]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isAboutMeOpen, setIsAboutMeOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<string | null>(ABOUT_ME_TAB);
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);

  const handleSelectProject = (project: Project) => {
    if (!openProjects.find((p) => p.id === project.id)) {
      setOpenProjects((prev) => [...prev, project]);
    }
    setActiveProject(project);
    setActiveTab(project.id);
  };

  const handleCloseTab = (projectId: string) => {
    const updated = openProjects.filter((p) => p.id !== projectId);
    setOpenProjects(updated);

    if (activeTab === projectId) {
      if (updated.length > 0) {
        setActiveProject(updated[updated.length - 1]);
        setActiveTab(updated[updated.length - 1].id);
      } else if (isAboutMeOpen) {
        setActiveTab(ABOUT_ME_TAB);
        setActiveProject(null);
      } else {
        setActiveTab(null);
        setActiveProject(null);
      }
    }
  };

  const handleSelectAboutMe = () => {
    setIsAboutMeOpen(true);
    setActiveTab(ABOUT_ME_TAB);
    setActiveProject(null);
  };

  const handleCloseAboutMe = () => {
    setIsAboutMeOpen(false);
    if (activeTab === ABOUT_ME_TAB) {
      if (openProjects.length > 0) {
        setActiveProject(openProjects[openProjects.length - 1]);
        setActiveTab(openProjects[openProjects.length - 1].id);
      } else {
        setActiveTab(null);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#1e1e1e] text-[#d4d4d4]">
      {/* <div className="h-8 bg-[#3c3c3c] flex items-center justify-center text-xs text-[#cccccc] shrink-0 select-none">
        Portfolio — Visual Studio Code
      </div> */}

      <div className="flex flex-1 overflow-hidden">
        <ActivityBar onToggleExplorer={() => setIsExplorerOpen(prev => !prev)} isExplorerOpen={isExplorerOpen} />

        {isExplorerOpen && 
        <Explorer
          onSelectProject={handleSelectProject}
          activeProjectId={activeProject?.id ?? null}
          onSelectAboutMe={handleSelectAboutMe}
          isAboutMeActive={activeTab === ABOUT_ME_TAB}
        />}

        <div className="flex flex-col flex-1 overflow-hidden">
          <TabBar
            openProjects={openProjects}
            activeProjectId={activeTab}
            onSelectTab={(project) => {
              setActiveProject(project);
              setActiveTab(project.id);
            }}
            onCloseTab={handleCloseTab}
            isAboutMeOpen={isAboutMeOpen}
            isAboutMeActive={activeTab === ABOUT_ME_TAB}
            onSelectAboutMe={handleSelectAboutMe}
            onCloseAboutMe={handleCloseAboutMe}
          />

          {activeTab === ABOUT_ME_TAB ? (
            <AboutMeEditor />
          ) : (
            <Editor activeProject={activeProject} />
          )}
        </div>
      </div>

      <StatusBar activeProject={activeProject} />
    </div>
  );
}

export default App;
