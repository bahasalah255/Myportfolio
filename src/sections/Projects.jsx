/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import GitHubStarsButtonDemo from "../components/ui/ButtonGithub";
import projects from '../data/projects.js'
export default function Projects() {

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 text-white">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col gap-3">
          <span className="w-fit rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/65">
            Selected Work
          </span>
          <p className="text-4xl sm:text-7xl font-bold tracking-tight text-white text-balance leading-none">
            <span className="text-white">Things I </span>
            <span className="text-gray-500">Built</span>
          </p>
          <p className="text-gray-300 max-w-2xl text-base sm:text-lg leading-relaxed">
            A selection of projects that highlight my approach to clean UI, solid backend logic, and practical product thinking.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const TypeIcon = project.type;
            return (
            <motion.article
              key={project.title + index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="group/image relative overflow-hidden bg-slate-950/50">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="w-full aspect-[16/10] object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent transition-opacity duration-300 group-hover/image:opacity-100" />
                <div className="pointer-events-none absolute inset-0 bg-black/45 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100" />
                <span className="absolute top-4 left-4 z-10 rounded-full border border-white/20 bg-black/35 px-4 py-3 text-[11px] font-medium tracking-wide text-white/80 backdrop-blur-sm">
                  {<TypeIcon />}
                </span>
                <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-end gap-2 opacity-0 translate-y-2 transition-all duration-300 group-hover/image:opacity-100 group-hover/image:translate-y-0">
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
                          className="w-5 h-5"
                        >
                          <path d="M12 6v6l4 2" />
                          <circle cx="12" cy="12" r="9" />
                        </svg>
                      </span>
                      <span className="pointer-events-none absolute bottom-full right-0 mb-2 inline-flex items-center gap-2 whitespace-nowrap rounded-xl border border-cyan-200/25 bg-slate-900/90 px-3.5 py-2 text-[11px] font-medium tracking-wide text-cyan-100 shadow-[0_8px_30px_rgba(6,182,212,0.22)] backdrop-blur-md opacity-0 translate-y-1 scale-95 transition-all duration-200 group-hover/deploy:opacity-100 group-hover/deploy:translate-y-0 group-hover/deploy:scale-100">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 animate-pulse" />
                        Working on deployment
                      </span>
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 md:p-7">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <span className="text-[10px] sm:text-xs tracking-[0.26em] text-white/40 uppercase">
                    {project.category || "Full-Stack"}
                  </span>

                  <div className="flex flex-wrap justify-end gap-2">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] sm:text-[11px] uppercase tracking-wide text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-white/95">{project.title}</h3>

                <p className="text-white/65 leading-relaxed mb-5 text-sm sm:text-base">
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


