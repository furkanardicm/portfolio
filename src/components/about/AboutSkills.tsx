'use client';

import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiMysql, SiHtml5, SiCss3 } from 'react-icons/si';
import { cn } from '@/lib/utils';

const technologies = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "HTML5", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS3", icon: SiCss3, color: "text-[#1572B6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "text-foreground" },
      { name: "Python", icon: FaPython, color: "text-[#3776AB]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
    ]
  },
  {
    category: "Araçlar",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "GitHub", icon: FaGithub, color: "text-foreground" },
    ]
  }
];

export default function AboutSkills() {
  return (
    <div className="space-y-8">
      {technologies.map((category) => (
        <div key={category.category} className="space-y-4">
          <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
          <div className="flex flex-wrap gap-3">
            {category.items.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground hover:bg-accent/80 transition-colors"
              >
                <tech.icon className={cn("w-4 h-4", tech.color)} />
                <span className="text-sm font-medium whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 