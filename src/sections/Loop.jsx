import FlowingMenu from "../component/ui/FlowingMenu";
import { motion } from "framer-motion";

export default function Loop() {
  const demoItems = [
    { link: null, text: "eat();", image: null },
    { link: null, text: "code();", image: null },
    { link: null, text: "sleep();", image: null },
    { link: null, text: "repeat();", image: null },
  ];

  return (
    <section
      id="loop"
      className="relative z-10 mx-auto max-w-7xl overflow-hidden px-6 py-24 text-white lg:px-8 lg:py-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.38em] text-white/40">
            Developer Mindset
          </p>

          <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] leading-[0.9] text-balance sm:text-7xl lg:text-[7.5rem]">
            <span className="block text-white">Consistency</span>
            <span className="block bg-gradient-to-b from-white/60 to-white/25 bg-clip-text text-transparent">
              is everything.
            </span>
          </h2>
        </div>

        <div className="mt-14 lg:mt-16">
          <div className="mx-auto max-w-5xl ">
            <div className="relative h-[260px] sm:h-[300px] lg:h-[320px] overflow-hidden ">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <FlowingMenu
                items={demoItems}
                speed={8}
                textColor="#F8FAFC"
                bgColor="transparent"
                marqueeBgColor="#F8FAFC"
                marqueeTextColor="#0B1020"
                borderColor="rgba(255,255,255,0.14)"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}