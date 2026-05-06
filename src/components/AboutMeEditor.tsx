import { useState } from "react";
import { aboutMe } from "../data/projects";
import {
  Download,
  ExternalLink,
  Eye,
  EyeOff,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const skills = [
  { label: "HTML", className: "devicon-html5-plain", color: "#e34f26" },
  { label: "CSS", className: "devicon-css3-plain", color: "#1572b6" },
  {
    label: "JavaScript",
    className: "devicon-javascript-plain",
    color: "#f7df1e",
  },
  {
    label: "TypeScript",
    className: "devicon-typescript-plain",
    color: "#3178c6",
  },
  { label: "PHP", className: "devicon-php-plain", color: "#777bb4" },
  { label: "C#", className: "devicon-csharp-plain", color: "#9b4f97" },
  { label: "Python", className: "devicon-python-plain", color: "#3572a5" },
  { label: "Java", className: "devicon-java-plain", color: "#f89820" },
  { label: "Laravel", className: "devicon-laravel-original", color: "#ff2d20" },
  { label: "React.js", className: "devicon-react-original", color: "#61dafb" },
  { label: "Vue.js", className: "devicon-vuejs-plain", color: "#42b883" },
  {
    label: "React Native",
    className: "devicon-react-original",
    color: "#61dafb",
  },
  { label: "Expo", className: "devicon-expo-original", color: "#ffffff" },
  {
    label: "Tailwind CSS",
    className: "devicon-tailwindcss-plain",
    color: "#38bdf8",
  },
  { label: "MySQL", className: "devicon-mysql-original", color: "#4479a1" },
  {
    label: "PostgreSQL",
    className: "devicon-postgresql-plain",
    color: "#336791",
  },
  { label: "Firebase", className: "devicon-firebase-plain", color: "#ffca28" },
  { label: "Node.js", className: "devicon-nodejs-plain", color: "#68a063" },
  { label: "Unity", className: "devicon-unity-plain", color: "#ffffff" },
  { label: "Git", className: "devicon-git-plain", color: "#f05032" },
];

export default function AboutMeEditor() {
  const [showPhone, setShowPhone] = useState(false);
  const [showImage, setShowImage] = useState(false);
  return (
    <div className="flex-1 bg-[#1e1e1e] overflow-auto">
      <div className="max-w-3x1 mx-auto px-8 py-10 font-mono">
        {/* Breadcrumb */}
        <div className="text-xs text-[#858585] mb-8">
          <span className="text-[#cccccc]">aboutMe.js</span>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row items-center gap-8 mb-10">
          {/* Photo */}
          <div className="shrink-0">
            <img
              src={aboutMe.photo}
              alt={aboutMe.name}
              onClick={() => setShowImage(true)}
              className="w-36 h-36 sm:w-48 sm:h-48 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover border-2 border-gray-500 cursor-pointer"
            />

            {showImage && (
              <div
                className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-transform duration-200 hover:scale-105"
                onClick={() => setShowImage(false)}
              >
                <img
                  src={aboutMe.photo}
                  alt={aboutMe.name}
                  className="max-w-[90%] max-h-[90%] rounded-lg object-contain"
                />
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#d4d4d4]">
              {aboutMe.name}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#007acc]">
              {aboutMe.role}
            </p>

            <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
              <MapPin size={12} />
              <span>{aboutMe.location}</span>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
              <Mail size={12} />
              <a
                href={`mailto:${aboutMe.email}`}
                className="hover:text-[#d4d4d4] transition-colors"
              >
                {aboutMe.email}
              </a>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
              <Phone size={12} />

              <span>
                {showPhone
                  ? aboutMe.phonenum
                  : `${aboutMe.phonenum.slice(0, 4)}****`}
              </span>

              <button
                onClick={() => setShowPhone((prev) => !prev)}
                className="text-[#007acc] hover:underline"
              >
                {showPhone ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-2">
              <a
                href={aboutMe.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#007acc] hover:bg-[#006bb3] 
                text-white text-xs rounded transition-colors duration-200"
              >
                <Download size={12} />
                Resume
              </a>
              <a
                href={aboutMe.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2d2d2d] hover:bg-[#3c3c3c] text-[#d4d4d4] text-xs rounded border border-[#3c3c3c] hover:border-[#007acc] transition-colors duration-200"
              >
                <ExternalLink size={12} />
                GitHub
              </a>

              <a
                href={aboutMe.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2d2d2d] hover:bg-[#3c3c3c] text-[#d4d4d4] text-xs rounded border border-[#3c3c3c] hover:border-[#007acc] transition-colors duration-200"
              >
                <ExternalLink size={12} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="w-16 h-0.5 bg-[#007acc] mb-8" />

        {/* Bio */}
        <div className="mb-8">
          <p className="text-[#cccccc] text-sm leading-relaxed pl-6 border-l border-[#3c3c3c]">
            {aboutMe.bio}
          </p>
        </div>

        {/* Skills */}
        <div>
          <div className="text-xs font-bold text-[#007acc] uppercase tracking-widest mb-4">
            Technical Skills
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.label}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#2d2d2d] text-xs rounded border border-[#3c3c3c] hover:border-[#555555] transition-colors duration-200"
                style={{ color: skill.color }}
              >
                <i className={`${skill.className} text-base`} />
                {skill.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
