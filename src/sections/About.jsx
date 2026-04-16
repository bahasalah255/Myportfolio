/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Magnet from './Magnet'

const leftContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      ease: "easeOut",
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.08 },
  },
};

const buttonRowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.14,
    },
  },
};

const buttonItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <motion.div
            className="lg:pt-4 lg:pr-8"
            variants={leftContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <div className="lg:max-w-lg">
              <motion.p
                variants={titleVariants}
                className="mt-2 text-4xl sm:text-7xl font-bold tracking-tight text-white text-balance leading-none"
              >
                <span className="text-white">Turning Ideas</span> <span className="text-gray-500">Into Reality.</span>
              </motion.p>

              <motion.p
                variants={paragraphVariants}
                className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-slate-300/95 leading-8 tracking-[0.01em]"
              >
                I’m a <span className="text-white font-medium">full-stack developer</span> based in Morocco,
                focused on turning ideas into <span className="text-blue-300">real, usable digital products</span>.
                <br className="hidden sm:block" />
                I build modern web applications with <span className="text-violet-300">React</span> and
                <span className="text-emerald-300"> PHP</span>, combining clean design, strong performance,
                and practical solutions.
              </motion.p>
              
            </div>
            <motion.div className="mt-8 flex flex-wrap gap-3" variants={buttonRowVariants}>
              <motion.button
                type="button"
                variants={buttonItemVariants}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-gradient-to-r from-blue-500/20 to-violet-500/20 px-5 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/10 transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:from-blue-500/30 hover:to-violet-500/30 hover:shadow-blue-500/20"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.9)]" />
                <span>+ 600 Contributions</span>
              </motion.button>

              <motion.button
                type="button"
                variants={buttonItemVariants}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/50 hover:bg-blue-500/10"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.9)]" />
                <span>7 Languages</span>
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <Magnet padding={72} disabled={false} magnetStrength={8}>
              <div className="relative mx-auto w-full max-w-xl">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4 sm:p-6 backdrop-blur-xl shadow-2xl">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] text-white/65 uppercase">LIVE SNAPSHOT</p>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-5 sm:px-6 text-sm sm:text-base font-mono leading-8 text-white/90">
                <div>
                  <span className="text-violet-300">const</span>{" "}
                  <span className="text-blue-300">dev</span>{" "}
                  <span className="text-white/90">=</span>{" "}
                  <span className="text-white/90">{`{`}</span>
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">name</span>
                  <span className="text-white/80">: </span>
                  <span className="text-emerald-300">"Baha Salaheddine"</span>
                  <span className="text-white/80">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">role</span>
                  <span className="text-white/80">: </span>
                  <span className="text-emerald-300">"Full-Stack Developer"</span>
                  <span className="text-white/80">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">age</span>
                  <span className="text-white/80">: </span>
                  <span className="text-amber-300">20</span>
                  <span className="text-white/80">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">location</span>
                  <span className="text-white/80">: </span>
                  <span className="text-emerald-300">"Morocco"</span>
                  <span className="text-white/80">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-sky-300">status</span>
                  <span className="text-white/80">: </span>
                  <span className="text-emerald-300">"Open to work"</span>
                </div>
                <div>
                  <span className="text-white/90">{`}`}</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Focus</p>
                  <p className="mt-1 text-lg font-semibold text-white">Web Apps</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">Mindset</p>
                  <p className="mt-1 text-lg font-semibold text-white">Creative + Clean</p>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-4 -bottom-5 h-16 w-16 rounded-2xl border border-white/15 bg-white/5" />
            <div className="pointer-events-none absolute -right-3 top-14 h-14 w-14 rounded-2xl border border-white/15 bg-white/5" />
          </div>
            </Magnet>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}