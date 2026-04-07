import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useInView } from "framer-motion";

export function Timeline({ data = [] }) {
  const timelineRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.85", "end 0.2"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.2,
  });

  return (
    <div ref={timelineRef} className="relative mx-auto w-full max-w-5xl py-6">
      {/* Horizontal Scroll Progress Line */}
      <div className="pointer-events-none relative mb-8 h-1 overflow-hidden rounded-full bg-white/5 backdrop-blur-sm">
        <motion.div
          className="absolute inset-y-0 left-0 origin-left bg-gradient-to-r from-indigo-300 via-blue-300 to-cyan-300"
          style={{
            scaleX: prefersReducedMotion ? 1 : lineProgress,
            opacity: 0.85,
            filter: "drop-shadow(0 0 12px rgba(129,140,248,0.5))",
          }}
        />
      </div>

      <div className="pointer-events-none absolute left-4 top-16 h-full w-px md:left-1/2 md:-translate-x-1/2">
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/10 to-white/5 opacity-70" />
        <motion.div
          className="absolute inset-0 origin-top bg-gradient-to-b from-indigo-300 via-white to-cyan-300"
          style={{
            scaleY: prefersReducedMotion ? 1 : lineProgress,
            opacity: 0.9,
            filter: "drop-shadow(0 0 10px rgba(129,140,248,0.35))",
          }}
        />
      </div>

      <div className="space-y-12 pt-6">
        {data.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={item.title ?? index}
              className="relative grid grid-cols-1 items-start gap-4 pl-12 md:grid-cols-2 md:gap-10 md:pl-0"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
              whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className={isLeft ? "md:col-start-1 md:pr-10 md:text-right" : "md:col-start-2 md:pl-10"}>
                <motion.div 
                  className="inline-flex items-center gap-2.5 rounded-full border border-indigo-400/30 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] text-indigo-200/95 backdrop-blur-md transition-all duration-300 hover:border-indigo-300/50 hover:bg-gradient-to-r hover:from-indigo-500/15 hover:to-cyan-500/15"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.span 
                    className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-indigo-300 to-cyan-300"
                    animate={prefersReducedMotion ? {} : { scale: [1, 1.2, 1] }}
                    transition={prefersReducedMotion ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                      boxShadow: "0 0 14px rgba(129,140,248,0.5)",
                    }}
                  />
                  {item.title}
                </motion.div>
              </div>

              <motion.div
                className={isLeft
                  ? "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:border-indigo-400/30 hover:bg-gradient-to-br hover:from-indigo-500/8 hover:to-cyan-500/5 hover:shadow-[0_30px_100px_rgba(129,140,248,0.15)] md:col-start-2 md:ml-10"
                  : "relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-white/3 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur-md transition-all duration-300 hover:border-indigo-400/30 hover:bg-gradient-to-br hover:from-indigo-500/8 hover:to-cyan-500/5 hover:shadow-[0_30px_100px_rgba(129,140,248,0.15)] md:col-start-1 md:mr-10"
                }
                whileHover={{ y: -4 }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-indigo-500/5 to-transparent" />
                <div className="absolute left-0 top-6 hidden h-px w-10 bg-gradient-to-r from-indigo-300 to-transparent md:block" />
                <div className="relative">{item.content}</div>
              </motion.div>

              <motion.div
                className="absolute left-4 top-6 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-indigo-300/60 bg-gradient-to-br from-slate-900 to-slate-800 md:left-1/2 md:-translate-x-1/2"
                animate={prefersReducedMotion ? { scale: 1 } : { scale: [1, 1.1, 1], boxShadow: ["0 0 12px rgba(129,140,248,0.4)", "0 0 24px rgba(129,140,248,0.6)", "0 0 12px rgba(129,140,248,0.4)"] }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
                whileInView={!prefersReducedMotion ? { scale: [1, 1.15] } : {}}
                viewport={{ once: false, amount: 0.5 }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
