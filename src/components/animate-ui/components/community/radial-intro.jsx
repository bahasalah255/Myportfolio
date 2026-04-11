/* eslint-disable no-unused-vars */
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export function RadialIntro({ orbitItems = [] }) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 })
  const items = orbitItems.slice(0, 10)
  const radius = 150
  const introDuration = 0.7

  return (
    <div ref={sectionRef} className="relative mx-auto mt-12 flex h-[500px] w-full max-w-xl items-center justify-center overflow-hidden rounded-3xl">
      <div className="absolute h-56 w-56 rounded-full border border-white/10" />
      <div className="absolute h-80 w-80 rounded-full border border-white/10" />

      <motion.div
        initial={false}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.9, scale: 0.96 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="z-10 rounded-2xl border border-white/20 bg-black/30 px-5 py-3 text-sm font-semibold text-white"
      >
        Core Stack
      </motion.div>

      <motion.div
        className="absolute inset-0"
        style={{ willChange: 'transform' }}
        initial={{ rotate: 0 }}
        animate={isInView ? { rotate: 360 } : { rotate: 0 }}
        transition={
          isInView
            ? { duration: 16, repeat: Infinity, ease: 'linear', delay: 0.85 }
            : { duration: 0.5, ease: 'easeOut' }
        }
      >
        {items.map((item, index) => {
          const angle = (index / Math.max(items.length, 1)) * 360
          const radians = (angle * Math.PI) / 180
          const targetX = Math.cos(radians) * radius
          const targetY = Math.sin(radians) * radius

          return (
            <motion.div
              key={item.id ?? index}
              className="absolute left-1/2 top-1/2"
              style={{ transform: 'translate(-50%, -50%)', willChange: 'transform, opacity' }}
              initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
              animate={isInView ? { x: targetX, y: targetY, opacity: 1, scale: 1 } : { x: 0, y: 0, opacity: 0, scale: 0.5 }}
              transition={{
                duration: introDuration,
                ease: 'easeOut',
                delay: index * 0.08,
              }}
            >
              <div className="group flex items-center justify-center rounded-full border border-white/20 bg-slate-900/85 p-1.5 shadow-lg shadow-black/25">
                <img
                  src={item.src}
                  alt={item.name}
                  onError={(event) => {
                    event.currentTarget.src = 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
                  }}
                  className="h-14 w-14 rounded-full object-cover"
                  width="56"
                  height="56"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
