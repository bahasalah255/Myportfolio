'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import RadixTooltipDemo from '../animations/Tooltip'
import LiquidButtonDemo from '../components/Liquidbutton'
import CV from '../assets/CV.pdf'
import ButtonDemo from '../components/ButtonFlip'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  {name : 'Journey' , href: '#journey'},
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  
]

const leftContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      ease: 'easeOut',
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const paragraphVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.08 },
  },
}

const buttonRowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.14,
    },
  },
}

const buttonItemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' },
  },
}

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div id="home" className="" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-gray-900/80 to-gray-900/0">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span>
                <RadixTooltipDemo side="bottom">
                  <LiquidButtonDemo>{"<Baha />"}</LiquidButtonDemo>
                </RadixTooltipDemo>
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-sm/6 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:text-cyan-200"
              >
                {item.name}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-cyan-300/90 shadow-[0_0_12px_rgba(103,232,249,0.9)] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href={CV} download={CV} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-700 hover:bg-purple-600 text-white text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105 active:scale-95">
              
              <ButtonDemo>CV</ButtonDemo>
            </a>
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]" />
          <DialogPanel className="fixed inset-x-4 top-20 z-50 rounded-2xl border border-white/10 bg-gray-900/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-md">
            <div className="flex items-center justify-between gap-3">
              
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-2 pb-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative text-sm font-semibold text-white transition-all duration-300 hover:text-cyan-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-cyan-300/90 shadow-[0_0_12px_rgba(103,232,249,0.9)] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <a
                href={CV}
                download={CV}
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-purple-700 px-5 py-2.5 text-sm font-medium tracking-wide text-white transition-all duration-200 hover:scale-105 hover:bg-purple-600 active:scale-95"
              >
                <ButtonDemo>CV</ButtonDemo>
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate mx-auto max-w-7xl px-4 pt-6 sm:px-5 sm:pt-0 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        
      <div className="flex flex-col gap-7 lg:flex-row">
        <div className="w-full py-20 sm:py-40 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 mr-20">
              <span class="relative flex h-2.5 w-2.5">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
  </span>
             <span class="text-purple-200 text-sm tracking-wide">
    Disponible — open to work
  </span>
              
            </div>
          </div>
        
          <motion.div
            className="text-center"
            variants={leftContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
           <motion.h1 variants={titleVariants} className="text-5xl sm:text-7xl lg:text-[7rem] font-bold tracking-tight leading-[0.95] text-balance">
  <span className='text-white'>BAHA</span>{' '}
  <span className='block sm:inline text-gray-500'>SALAH EDDINE.</span>
</motion.h1>
            <motion.p variants={paragraphVariants} className="mx-auto mt-4 max-w-2xl px-2 text-base sm:text-[1.25rem] font-medium text-pretty text-gray-400 leading-7 sm:leading-8">
             20-year-old <span className='text-white'>Full-Stack Developer</span> from Morocco. Passionate about building fast, scalable web applications.
            </motion.p>
            
            <motion.div className="mx-auto mt-10 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row sm:gap-x-6" variants={buttonRowVariants}>
              <motion.a
                href="#"
                variants={buttonItemVariants}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-indigo-900/35 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:from-indigo-400 hover:to-violet-400 hover:shadow-[0_18px_40px_rgba(99,102,241,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
               View Projects <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.a>
              <motion.a href="#" variants={buttonItemVariants} className="group inline-flex w-full sm:w-auto justify-center text-sm/6 font-semibold text-white">
        <LiquidButtonDemo size="lg">Let's Talk </LiquidButtonDemo>       

              </motion.a>
            
            </motion.div>
            <hr className="mx-auto mt-10 sm:mt-16 w-full max-w-md sm:max-w-4xl border-white/10" />
            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-[2px] text-white">
              <a href="https://github.com/bahasalah255" target='_blank' className="inline-flex items-center gap-1.5 px-2 py-1 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.082-.729.082-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.932 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.49 11.49 0 0 1 12 6.844c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.912 1.233 3.222 0 4.61-2.807 5.625-5.48 5.921.43.372.823 1.103.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .321.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12Z" />
                </svg>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/baha-salaheddine-844201339/" target='_blank' className="inline-flex items-center gap-1.5 px-2 py-1 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.369-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286ZM5.337 7.433a2.063 2.063 0 1 1 0-4.126 2.063 2.063 0 0 1 0 4.126ZM7.119 20.452H3.555V9H7.12v11.452Z" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a href="mailto:salaheddinebaha32@gmail.com" target='_blank' className="inline-flex items-center gap-1.5 px-2 py-1 text-xs sm:text-sm text-gray-400 hover:text-white transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <span>Email</span>
              </a>
            </div>
            <div className="mt-6 flex flex-col items-center gap-2 text-gray-300">
              <span className="h-12 w-px bg-white/30" />
               <span className="text-[10px] uppercase tracking-[0.35em]">Scroll</span>
            </div>
             
            </motion.div>
        </div>
        
          </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
