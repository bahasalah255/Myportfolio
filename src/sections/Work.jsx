/* eslint-disable no-unused-vars */
import { useMemo } from "react"
import { motion } from "framer-motion"
import { GitHubCalendar } from "react-github-calendar"
const stats = [
    { value: "400+", label: "Commits" },
    { value: "20", label: "Projects" },
    { value: "90%", label: "Continuous Growth" },
]
export default function Work() {
    const currentYear = new Date().getFullYear();
    return (
        <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-white lg:px-8 lg:py-32">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(7,17,31,0.98),rgba(7,17,31,0.88))] p-6 shadow-[0_30px_120px_rgba(2,6,23,0.55)] sm:p-8 lg:p-10"
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.03),transparent_55%)]" />
                <div className="pointer-events-none absolute -right-24 top-6 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -left-20 bottom-0 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />

                <div className="relative">
                    <div className="max-w-3xl">
                        <span className="inline-flex rounded-full border border-cyan-200/15 bg-white/5 px-4 py-1 text-[11px] font-semibold tracking-[0.28em] text-cyan-100/80 shadow-[0_0_20px_rgba(34,211,238,0.08)]">
                           Proof of Execution.
                        </span>

                        <h2 className="mt-5 max-w-xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.02]">
                            Real Work.
                            <span className="block text-white/60">Real Code.</span>
                        </h2>

                        <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                            Every commit reflects progress. From small experiments to full-stack applications, consistency is at the core of my work.
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4 backdrop-blur-sm shadow-[0_10px_30px_rgba(2,6,23,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/20 hover:bg-white/[0.07]"
                                >
                                    <div className="text-2xl font-bold tracking-tight text-white">{stat.value}</div>
                                    <div className="mt-1 text-sm text-white/55">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <a
                            href="https://github.com/bahasalah255"
                            target="_blank"
                            rel="noreferrer"
                            className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-400/10 px-8 py-5 text-sm font-semibold text-cyan-100 shadow-[0_10px_30px_rgba(34,211,238,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-200/35 hover:bg-cyan-400/15 hover:text-white hover:shadow-[0_14px_38px_rgba(34,211,238,0.18)]"
                        >
                            <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6"
>
  <path d="M12 0.5C5.648 0.5 0.5 5.648 0.5 12c0 5.084 3.292 9.387 7.861 10.91.575.106.786-.25.786-.556 0-.274-.01-1-.016-1.962-3.197.695-3.872-1.54-3.872-1.54-.523-1.328-1.277-1.682-1.277-1.682-1.044-.714.079-.7.079-.7 1.154.081 1.761 1.185 1.761 1.185 1.026 1.758 2.692 1.25 3.348.956.104-.743.402-1.25.731-1.538-2.552-.29-5.236-1.276-5.236-5.682 0-1.255.449-2.281 1.184-3.085-.119-.29-.513-1.458.112-3.04 0 0 .966-.309 3.166 1.178A10.96 10.96 0 0 1 12 6.04c.973.004 1.954.132 2.87.388 2.198-1.487 3.162-1.178 3.162-1.178.627 1.582.233 2.75.114 3.04.737.804 1.182 1.83 1.182 3.085 0 4.417-2.688 5.389-5.248 5.674.413.356.781 1.058.781 2.133 0 1.54-.014 2.781-.014 3.16 0 .309.207.667.792.554C20.21 21.383 23.5 17.082 23.5 12 23.5 5.648 18.352.5 12 .5Z" />
</svg> View My GitHub 
                        </a>
                    </div>

                    <div className="relative mt-12 lg:mt-14 lg:mx-auto lg:w-full lg:max-w-5xl">
                        <div className="pointer-events-none absolute -left-8 top-8 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
                        <div className="rounded-[1.85rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_18px_70px_rgba(2,6,23,0.4)] backdrop-blur-xl sm:p-5">
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/40">GitHub Activity</p>
                                    <p className="mt-1 text-sm text-white/60">Consistency across the year</p>
                                </div>
                                <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/45 sm:flex">
                                    2026
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-white/8 bg-slate-950/40 p-3 sm:p-4">
                                <GitHubCalendar username="bahasalah255" year={currentYear}/>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}