import React from "react";
import { Timeline } from "@/components/ui/TimelineBase";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <p className="text-lg font-bold text-white">Baccalaureate in Physics</p>
          </div>
          <p className="text-sm text-gray-300 font-medium">Maurice Bucaille High School</p>
          <p className="text-sm leading-relaxed text-gray-400 pt-2">
            Completed my high school diploma with a strong focus on physics, building a robust analytical and problem-solving foundation that shaped my approach to technical challenges.
          </p>
        </div>
      ),
    },
    {
      title: "2025 - Present",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <p className="text-lg font-bold text-white">Digital Development Studies</p>
          </div>
          <p className="text-sm text-gray-300 font-medium">ISGI Centre Philips</p>
          <p className="text-sm leading-relaxed text-gray-400 pt-2">
            Pursuing advanced studies in digital development with emphasis on modern web technologies, full-stack architecture, and software engineering best practices.
          </p>
          <div className="flex flex-wrap gap-1.5 pt-2">
            {["React", "Full-Stack", "Web Dev"].map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Feb 14 – Mar 14, 2025",
      content: (
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <p className="text-lg font-bold text-white">Internship at EKM Consulting</p>
          </div>
          <p className="text-sm text-gray-300 font-medium">Mobile & Web Development</p>
          <p className="text-sm leading-relaxed text-gray-400 pt-2">
            Contributed to real-world, client-oriented projects with hands-on experience in both mobile and web development within a collaborative, fast-paced environment.
          </p>
          <div className="grid grid-cols-2 gap-2 pt-3">
            <div>
              <p className="text-xs font-semibold text-indigo-300 mb-1.5">Tech Stack</p>
              <div className="space-y-1 text-xs">
                {["React Native", "Laravel", "MySQL"].map((tech) => (
                  <span key={tech} className="block px-2 py-1 rounded bg-cyan-500/10 border border-cyan-400/20 text-cyan-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-indigo-300 mb-1.5">Key Skills</p>
              <div className="space-y-1 text-xs">
                {["Version Control", "Team Collab", "Full-Stack"].map((skill) => (
                  <span key={skill} className="block px-2 py-1 rounded bg-purple-500/10 border border-purple-400/20 text-purple-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
