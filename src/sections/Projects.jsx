/* eslint-disable no-unused-vars */
import { motion, useReducedMotion } from "framer-motion";
import { useMemo, useState } from "react";
import GitHubStarsButtonDemo from "../components/ui/ButtonGithub";
import projects from "../data/projects.js";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const reduceMotion = useReducedMotion();

  const filters = [
    { key: "all", label: "All" },
    { key: "web", label: "Web" },
    { key: "mobile", label: "Mobile" },
    { key: "dashboard", label: "Dashboard" },
    {key : "Workflow / Automation" , label : "Automation"},
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter((project) =>
      (project.category || "").toLowerCase().includes(activeFilter.toLowerCase())
    );
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-7xl scroll-mt-16 px-6 pt-8 pb-16 text-white lg:px-8 lg:pt-10 lg:pb-24"
    >
      <motion.div
        initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.12, margin: "0px 0px -6% 0px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-3">
          <span className="w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
            Selected Work
          </span>

          <p className="text-4xl font-bold leading-none tracking-tight text-white sm:text-7xl text-balance">
            <span className="text-white">Things I </span>
            <span className="text-gray-500">Built</span>
          </p>

          <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.key;

              return (
                <button
                  key={filter.key}
                  type="button"
                  onClick={() => setActiveFilter(filter.key)}
                  className={`rounded-full border px-4 py-1.5 text-sm transition-colors cursor-pointer ${
                    isActive
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/90"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">
            A selection of projects that highlight my approach to clean UI,
            solid backend logic, and practical product thinking.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {filteredProjects.map((project, index) => {
            const imageScale =
              typeof project.imageScale === "number" ? project.imageScale : 1;
            const imagePosition = project.imagePosition || "center";

            return (
              <motion.article
                key={project.title + index}
                initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={
                  reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.5,
                  delay: reduceMotion ? 0 : index * 0.05,
                  ease: "easeOut",
                }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="group/image relative overflow-hidden bg-slate-950/50">
                  <div className="transition-transform duration-500 ease-out group-hover/image:scale-[1.03]">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="h-52 w-full object-cover sm:h-64 lg:h-auto lg:aspect-[16/10]"
                      style={{
                        objectPosition: imagePosition,
                        transform: `scale(${imageScale})`,
                      }}
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent transition-opacity duration-300 group-hover/image:opacity-100" />
                  <div className="pointer-events-none absolute inset-0 bg-black/45 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />

                  <div className="absolute inset-x-0 bottom-4 z-10 flex justify-end gap-2 px-4 opacity-100 translate-y-0 transition-all duration-300 sm:opacity-0 sm:translate-y-2 sm:group-hover/image:opacity-100 sm:group-hover/image:translate-y-0">
                    <GitHubStarsButtonDemo
                      variant={project.github}
                      size="lg"
                      repo={project.repo_name}
                      className="pointer-events-auto"
                    />

                    {project.demo !== "#" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-200/25 bg-slate-900/75 text-cyan-100/90 shadow-[0_6px_24px_rgba(6,182,212,0.16)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-cyan-200/45 hover:bg-slate-800/80 hover:text-cyan-50 hover:shadow-[0_10px_30px_rgba(6,182,212,0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/45"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-5 w-5 transition-transform duration-200 hover:rotate-6"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <path d="M15 3h6v6" />
                          <path d="M10 14L21 3" />
                        </svg>
                      </a>
                    ) : (
                      <span className="group/deploy relative inline-flex">
                        <span className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/45 text-white/80 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10 hover:text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className="h-5 w-5"
                          >
                            <path d="M12 6v6l4 2" />
                            <circle cx="12" cy="12" r="9" />
                          </svg>
                        </span>

                        <span className="pointer-events-none absolute bottom-full right-0 mb-2 hidden items-center gap-2 whitespace-nowrap rounded-xl border border-cyan-200/25 bg-slate-900/90 px-3.5 py-2 text-[11px] font-medium tracking-wide text-cyan-100 shadow-[0_8px_30px_rgba(6,182,212,0.22)] backdrop-blur-md opacity-0 translate-y-1 scale-95 transition-all duration-200 sm:inline-flex sm:group-hover/deploy:opacity-100 sm:group-hover/deploy:translate-y-0 sm:group-hover/deploy:scale-100">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
                          Working on deployment
                        </span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-5 sm:p-6 md:p-7">
                  <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <span className="text-[10px] uppercase tracking-[0.26em] text-white/40 sm:text-xs">
                      {project.category || "Full-Stack"}
                    </span>

                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {project.tech.map((item, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] uppercase tracking-wide text-white/70 sm:text-[11px]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="mb-4 text-xl font-semibold text-white/95 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-white/65 sm:text-base">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}