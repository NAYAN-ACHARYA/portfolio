import {
  SiMongodb,
  SiMysql,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiCloudinary,
  SiGit,
  SiGithub,
  SiOpenai,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { VscCode } from "react-icons/vsc";


export default function Skills() {
  return (
    <section id="skills" className="mt-40 px-4 sm:px-6 max-w-4xl mx-auto">
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
        Skills & Tools
      </h2>

      {/* Skills Grid */}
      <div>
        <h3 className="text-white text-2xl mt-20 font-semibold mb-4">Skills</h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 text-gray-300 text-center">
          {[
            { icon: <SiMongodb className="mx-auto text-green-600" size={40} />, label: "MongoDB" },
            { icon: <SiMysql className="mx-auto text-blue-600" size={40} />, label: "SQL" },
            { icon: <SiJavascript className="mx-auto text-yellow-400" size={40} />, label: "JavaScript" },
            { icon: <SiTypescript className="mx-auto text-blue-500" size={40} />, label: "TypeScript" },
            { icon: <SiReact className="mx-auto text-cyan-400" size={40} />, label: "React" },
            { icon: <SiNodedotjs className="mx-auto text-green-700" size={40} />, label: "Node.js" },
            { icon: <SiExpress className="mx-auto text-gray-400" size={40} />, label: "Express" },
            { icon: <SiTailwindcss className="mx-auto text-teal-400" size={40} />, label: "Tailwind CSS" },
            { icon: <SiNextdotjs className="mx-auto text-white" size={40} />, label: "Next.js" },
            { icon: <SiC className="mx-auto text-blue-700" size={40} />, label: "C" },
            { icon: <SiCplusplus className="mx-auto text-blue-600" size={40} />, label: "C++" },
            { icon: <FaJava className="mx-auto text-red-600" size={40} />, label: "Java" },
            { icon: <MdApi className="mx-auto text-pink-400" size={40} />, label: "REST API" },
            { icon: <SiCloudinary className="mx-auto text-blue-500" size={40} />, label: "Cloudinary" },
            { icon: <SiMongodb className="mx-auto text-green-600" size={40} />, label: "Atlas MongoDB" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center space-y-2 hover:scale-105 transform transition-transform duration-200 cursor-default select-none"
            >
              {icon}
              <span className="text-white font-medium text-sm sm:text-base">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="mt-24">
        <h3 className="text-white text-2xl font-semibold mb-4">Tools & Platforms</h3>
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-8 text-gray-300 text-center">
          {[
            { icon: <SiGit className="mx-auto text-red-500" size={36} />, label: "Git" },
            { icon: <SiGithub className="mx-auto text-gray-300" size={36} />, label: "GitHub" },
            { icon: <VscCode className="mx-auto text-blue-600" size={36} />, label: "VS Code" },
            { icon: <SiOpenai className="mx-auto text-green-400" size={36} />, label: "OpenAI" },
            { icon: <SiPostman className="mx-auto text-orange-500" size={36} />, label: "Postman" },
            { icon: <SiVercel className="mx-auto text-white" size={36} />, label: "Vercel" },
            { icon: <SiRender className="mx-auto text-green-500" size={36} />, label: "Render" },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center space-y-1 hover:scale-105 transform transition-transform duration-200 cursor-default select-none"
            >
              {icon}
              <span className="text-white font-medium text-xs sm:text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
