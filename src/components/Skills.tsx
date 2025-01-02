'use client';

import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiTailwindcss, SiJavascript, SiTypescript, SiMongodb, SiMysql, SiHtml5, SiCss3 } from 'react-icons/si';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/context/language';

const technologies = {
  tr: [
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
  ],
  en: [
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
      category: "Tools",
      items: [
        { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
        { name: "GitHub", icon: FaGithub, color: "text-foreground" },
      ]
    }
  ]
};

export default function Skills() {
  const { language } = useLanguage();
  
  return (
    <div className="container max-w-7xl mx-auto">
      <div className="grid gap-8">
        {technologies[language].map((tech) => (
          <div key={tech.category} className="space-y-4">
            <h3 className="text-xl font-bold text-center">{tech.category}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {tech.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-colors"
                  >
                    <Icon className={cn("w-8 h-8", item.color)} />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 