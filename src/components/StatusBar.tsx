import { useState, useEffect } from 'react'
import { GitBranch } from 'lucide-react'
import { type Project } from '../data/projects'

type StatusBarProps = {
  activeProject: Project | null
}

export default function StatusBar({ activeProject }: StatusBarProps) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formattedTime = time.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className="h-6 bg-[#007acc] text-white text-xs flex items-center justify-between px-3 shrink-0">

      {/* Left side */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <GitBranch size={12} />
          <span>main</span>
        </div>

        {activeProject && (
          <>
            <span className="text-[#ffffff88]">|</span>
            <span>{activeProject.name}.ts</span>
            <span className="text-[#ffffff88]">|</span>
            <span>{activeProject.techStack.length} technologies</span>
          </>
        )}
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <span>Built with React + Tailwind</span>
        <span className="text-[#ffffff88]">|</span>
        <span>{formattedTime}</span>
      </div>

    </div>
  )
}