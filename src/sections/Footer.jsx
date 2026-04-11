import { motion } from "framer-motion";
export default function Footer(){
    return(
        <>
    <section id="footer" className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 text-white lg:px-8">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mx-auto flex max-w-3xl flex-col items-center text-center"
            >
    <footer className="mx-auto mt-16 flex w-full max-w-4xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">

  {/* LEFT */}
  <p className="text-sm text-white/60">
    © {new Date().getFullYear()} Baha Salah Eddine. All rights reserved.
  </p>

  {/* RIGHT */}
  <div className="flex items-center gap-6 text-sm text-white/60">
    <a href="https://github.com/bahasalah255" className="hover:text-white transition-colors">GitHub</a>
    <a href="https://www.linkedin.com/in/baha-salaheddine-844201339/" className="hover:text-white transition-colors">LinkedIn</a>
    <a href="#" className="hover:text-white transition-colors">Email</a>
  </div>

</footer>
</motion.div>
  </section>
        </>
    )
}