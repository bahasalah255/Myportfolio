/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion'

export default function AmbientTrustText() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden select-none sm:block">
      <motion.div
       className="absolute left-1/2 top-[61%] -translate-x-1/2 whitespace-nowrap text-[60px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-extrabold tracking-[0.18em] text-white/[0.04] pointer-events-none select-none z-0 blur-[1px]"
        animate={{ x: [0, 5, 0], y: [0, -3, 0] }}
        transition={{ duration: 46, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="bg-gradient-to-r from-[#7e80c8] via-[#6f7ec5] to-[#6785c8] bg-clip-text text-[1.65rem] font-black uppercase tracking-[0.14em] text-transparent opacity-[0.10] blur-[0.3px] mix-blend-normal [filter:saturate(72%)] sm:text-[2.35rem] sm:tracking-[0.18em] sm:opacity-[0.034] sm:mix-blend-soft-light sm:[mask-image:linear-gradient(100deg,transparent_0%,black_12%,black_82%,transparent_100%)] lg:text-[5rem]">
          TRUST THE PROCESS
        </span>
      </motion.div>
    </div>
  )
}
