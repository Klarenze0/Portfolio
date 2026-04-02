import { useEffect, useState } from "react";
import { aboutMe } from "../data/projects";

export default function AboutMeEditor() {
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const lines = [
    {
      number: 1,
      content: (
        <span>
          <span className="text-[#569cd6]">const </span>
          <span className="text-[#9cdcfe]">aboutMe</span>
          <span className="text-[#d4d4d4]"> = {"{"}</span>
        </span>
      ),
    },
    {
      number: 2,
      content: (
        <span className="ml-6">
          <span className="text-[#9cdcfe]">name</span>
          <span className="text-[#d4d4d4]">: </span>
          <span className="text-[#ce9178]">"{aboutMe.name}"</span>
          <span className="text-[#d4d4d4]">,</span>
        </span>
      ),
    },
    {
      number: 3,
      content: (
        <span className="ml-6">
          <span className="text-[#9cdcfe]">role</span>
          <span className="text-[#d4d4d4]">: </span>
          <span className="text-[#ce9178]">"{aboutMe.role}"</span>
          <span className="text-[#d4d4d4]">,</span>
        </span>
      ),
    },
    {
      number: 4,
      content: (
        <span className="ml-6">
          <span className="text-[#9cdcfe]">location</span>
          <span className="text-[#d4d4d4]">: </span>
          <span className="text-[#ce9178]">"{aboutMe.location}"</span>
          <span className="text-[#d4d4d4]">,</span>
        </span>
      ),
    },
    {
      number: 5,
      content: (
        <span className="ml-6">
          <span className="text-[#9cdcfe]">email</span>
          <span className="text-[#d4d4d4]">: </span>
          <span className="text-[#ce9178]">"{aboutMe.email}"</span>
          <span className="text-[#d4d4d4]">,</span>
        </span>
      ),
    },
    {
      number: 6,
      content: (
        <span className="ml-6">
          <span className="text-[#9cdcfe]">bio</span>
          <span className="text-[#d4d4d4]">: </span>
          <span className="text-[#ce9178]">"{aboutMe.bio}"</span>
          <span className="text-[#d4d4d4]">,</span>
        </span>
      ),
    },
    {
      number: 7,
      content: (
        <span className="ml-6">
          <span className="text-[#9cdcfe]">skills</span>
          <span className="text-[#d4d4d4]">: [</span>
          {aboutMe.skills.map((skill, i) => (
            <span key={skill}>
              <span className="text-[#ce9178]">"{skill}"</span>
              {i < aboutMe.skills.length - 1 && (
                <span className="text-[#d4d4d4]">, </span>
              )}
            </span>
          ))}
          <span className="text-[#d4d4d4]">],</span>
        </span>
      ),
    },
    {
      number: 8,
      content: (
        <span>
          <span className="text-[#d4d4d4]">{"}"}</span>
        </span>
      ),
    },
    { number: 9, content: <span></span> },
    {
      number: 10,
      content: (
        <span>
          <span className="text-[#6a9955]">
            // Let's build something great together!
          </span>
        </span>
      ),
    },
  ];

  return (
    <div className="flex-1 bg-[#1e1e1e] overflow-auto p-6 font-mono">
      {/* Breadcrumb */}
      <div className="text-xs text-[#858585] mb-6">
        <span className="text-[#cccccc]">aboutMe.js</span>
      </div>

      {/* Code lines */}
      <div className="max-w-2xl">
        {lines.map((line) => (
          <div
            key={line.number}
            className="flex gap-4 mb-1 text-sm hover:bg-[#2a2d2e] rounded transition-colors duration-100"
          >
            <span className="text-[#555555] select-none w-5 text-right shrink-0">
              {line.number}
            </span>
            <span>{line.content}</span>
          </div>
        ))}

        {/* Blinking cursor line */}
        <div className="flex gap-4 mb-1 text-sm">
          <span className="text-[#555555] select-none w-5 text-right shrink-0">
            11
          </span>
          <span
            className={`w-2 h-4 bg-[#d4d4d4] inline-block transition-opacity duration-100 ${
              showCursor ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}
