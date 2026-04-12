import { motion } from "framer-motion";
export default function Contact(){
    return(
        <>
        <section id="contact" className="relative z-10 mx-auto max-w-7xl overflow-hidden px-6 py-32 text-white lg:px-8 lg:py-44" >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mx-auto flex max-w-3xl flex-col items-center text-center"
            >
            <p className="text-[10px] font-semibold tracking-[0.35em] text-white/60 sm:text-xs uppercase letter-spacing">Have an idea?</p>
            <p className="mt-6 text-[clamp(3.5rem,12vw,13rem)] font-extrabold tracking-[-0.04em] text-white leading-[0.88] hover:tracking-[-0.02em] transition-all duration-300">
              Let's <br />
              <span>code</span>{" "}
              <span className="text-white/65">it.</span>
            </p>
            <a href="mailto:salaheddinebaha32@gmail.com" className="group mt-12 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-base font-medium text-black transition-all duration-300 hover:shadow-[0_8px_24px_rgba(255,255,255,0.15)] hover:scale-105 cursor-pointer">
              Start a Project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
           <div className="mt-30 w-full max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">

  {/* EMAIL */}
  <div>
    <p className="text-xs tracking-[0.25em] text-white/40 mb-3">
      EMAIL
    </p>
    <p className="text-base text-white/90 hover:text-white transition-colors">
      salaheddinebaha32@gmail.com
    </p>
  </div>

  {/* SOCIALS */}
  <div>
    <p className="text-xs tracking-[0.25em] text-white/40 mb-3">
      SOCIALS
    </p>
    <div className="flex items-center justify-center sm:justify-start gap-4 text-white/80">
      <a href="https://github.com/bahasalah255" target="_blank" className="hover:text-white transition-colors">GitHub</a>
      <a href="https://www.linkedin.com/in/baha-salaheddine-844201339/" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
      <a href="https://x.com/salahbaha782215" target="_blank" className="hover:text-white transition-colors">X</a>
    </div>
  </div>

  {/* LOCATION */}
  <div>
    <p className="text-xs tracking-[0.25em] text-white/40 mb-3">
      BASED IN
    </p>
    <p className="text-base text-white/90">
      Casablanca, Morocco 
    </p>
  </div>

</div>
            </motion.div>
        </section>
        </>
    );
}