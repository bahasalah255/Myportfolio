/* eslint-disable no-unused-vars */
import Timeline from '../components/ui/Timeline.jsx'
import { motion, useReducedMotion } from 'framer-motion'
export default function Journey(){
    const reduceMotion = useReducedMotion()

    return(
        <>
        <section
  id="journey"
    className="relative z-10 mx-auto max-w-7xl scroll-mt-24 px-6 pt-20 pb-6 lg:px-8 lg:pt-24 lg:pb-8 text-white"
>
                <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                    whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.18, margin: '0px 0px -8% 0px' }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
        <div className="flex justify-center flex-col gap-1">
       <p className="mt-2 text-4xl sm:text-7xl font-bold tracking-tight text-white text-balance leading-none"><span className="text-white">My</span> <span className="text-gray-500"> Journey</span></p>
    <p className="mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300">A timeline of my growth, projects, and professional work.</p>
       </div>
       <Timeline/>
             </motion.div>
       </section>
        </>
    );
}