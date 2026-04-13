/* eslint-disable no-unused-vars */
import React from "react";
import { RadialIntro } from "@/components/animate-ui/components/community/radial-intro";
import Orbit from '@/components/ui/Orbit'
import { motion } from "framer-motion";
import {ITEMS1 , ITEMS } from '../data/skills'


export default function Skills({ reduceMotion = false }) {
    return(
      
      <>
      
    <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 text-white">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="flex justify-center flex-col gap-1">
       <p className="mt-2 text-4xl sm:text-7xl font-bold tracking-tight text-white text-balance leading-none"><span className="text-white">My Tech </span><span className="text-gray-500">Stack</span></p>
       <p className="mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-300">
  A curated set of technologies I use to build modern, scalable, and high-performance web applications.
</p>
       </div>
       <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
       {reduceMotion ? (
         <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 backdrop-blur-sm">
           <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">Skills</p>
           <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
             {ITEMS.map((item) => (
               <div key={item.id} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center">
                 <p className="text-sm font-semibold text-white/90">{item.name}</p>
               </div>
             ))}
           </div>
         </div>
       ) : (
         <RadialIntro orbitItems={ITEMS}/>
       )}
      
       <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl">
  <div className="absolute left-1/2 top-6 z-10 -translate-x-1/2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md shadow-lg shadow-black/20">
    <div className="flex items-center gap-2.5">
      <span className="h-2 w-2 rounded-full bg-white/80" />
      <div className="leading-tight">
        <p className="text-[10px] uppercase tracking-[0.24em] text-white/55">Visualization</p>
        <p className="text-sm font-semibold text-white/90">Tools Orbit</p>
      </div>
    </div>
  </div>
  {!reduceMotion && (
    <Orbit
      images={ITEMS1.map(item => item.src)}
      shape="ellipse"
      baseWidth={500}
      radiusX={190}
      radiusY={120}
      itemSize={64}
      duration={30}
      direction="normal"
      fill={true}
      rotation={0}
      responsive={true}
      width={500}
      height={500}
      className="mx-auto"
      showPath={true}
      pathColor="rgba(255, 255, 255, 0.2)"
      pathWidth={1}
    />
  )}
  {reduceMotion && (
    <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm text-white/70">
      Motion reduced for mobile. The visual orbit is disabled to keep scrolling smooth.
    </div>
  )}
  </div>
</div>
</motion.div>
        </section>
        
        </>
    );

}
