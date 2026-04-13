import ScrollVelocity from '../components/ui/Scrollvelo'
import { motion } from "framer-motion";
const LOOP_LINE = 'eat() ;  sleep() ;   code() ;  repeat() ; '

export default function Loop({ reduceMotion = false }) {
    return (
        <section id="loop" className="relative z-10 mx-auto max-w-7xl overflow-hidden px-6 py-32 text-white lg:px-8 lg:py-44">
            <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}>
                              <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
 <p className="mt-2 text-5xl sm:text-9xl font-bold tracking-tight text-white text-balance leading-none"><span className="text-white">Consistency </span><span className="text-gray-500">everything.</span></p>
                    <p className="mt-5 text-[11px] font-medium tracking-[0.3em] text-white/45 sm:text-xs">
                        DEVELOPER MINDSET
                    </p>
                </div>
            <div className="mt-24 space-y-24 lg:mt-28 lg:space-y-28">
                {reduceMotion ? (
                    <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-center font-mono text-sm tracking-[0.22em] text-white/35 backdrop-blur-sm">
                        {LOOP_LINE}
                    </div>
                ) : (
                    <ScrollVelocity
                        texts={[LOOP_LINE]}
                        velocity={80}
                        damping={70}
                        stiffness={240}
                        numCopies={8}
                        
                        velocityMapping={{ input: [0, 1200], output: [0, 1.2] }}
                        parallaxClassName="w-full"
                        scrollerClassName="!text-[clamp(2.25rem,9vw,6rem)] !font-mono !font-medium !tracking-[-0.01em] !text-white/25 !drop-shadow-none"
                        className="px-6"
                    />
                )}

                
            </div>
            </motion.div>
  
        </section>
    )
}