'use client'

/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, useReducedMotion } from 'framer-motion'
import RadixTooltipDemo from '../animations/Tooltip'
import LiquidButtonDemo from '../components/Liquidbutton'
import CV from '../assets/CV.pdf'
import ButtonDemo from '../components/ButtonFlip'
import ScrollButt from '../components/ScrollButt'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  {name : 'Journey' , href: '#journey'},
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
  const reduceMotion = useReducedMotion()
  const enableMotion = !reduceMotion

  return (
    <div id="home" className="overflow-hidden" >
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
  {/* Overlay */}
  <div className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-opacity duration-300" />

  {/* Premium Panel */}
  <DialogPanel className="fixed inset-x-4 top-5 z-50 overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,40,0.96),rgba(3,8,20,0.96))] shadow-[0_20px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
    {/* Glow accents */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
    </div>

    <div className="relative px-5 pb-5 pt-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-white/40">
            Navigation
          </p>
          <p className="mt-1 text-sm text-white/70">
            Explore my portfolio
          </p>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(false)}
          className="group rounded-full border border-white/10 bg-white/5 p-2.5 text-white/70 transition-all duration-300 hover:scale-105 hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <span className="sr-only">Close menu</span>
          <XMarkIcon
            aria-hidden="true"
            className="size-5 transition-transform duration-300 group-hover:rotate-90"
          />
        </button>
      </div>

      {/* Divider */}
      <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Links */}
      <div className="mt-4 space-y-2">
        {navigation.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="group flex items-center justify-between rounded-2xl border border-transparent bg-white/[0.03] px-4 py-4 text-base font-medium text-white/85 transition-all duration-300 hover:border-cyan-300/20 hover:bg-white/[0.06] hover:text-white"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold tracking-[0.2em] text-white/25">
                0{index + 1}
              </span>
              <span>{item.name}</span>
            </div>

            <span className="translate-x-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-cyan-300">
              ↗
            </span>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-5">
        <a
          href={CV}
          download
          onClick={() => setMobileMenuOpen(false)}
          className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-fuchsia-400/20 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-indigo-600 px-5 py-3.5 text-sm font-semibold tracking-[0.18em] text-white uppercase shadow-[0_10px_35px_rgba(147,51,234,0.35)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_14px_45px_rgba(147,51,234,0.45)] active:scale-[0.985]"
        >
          <span className="absolute inset-0 bg-white/0 transition duration-300 group-hover:bg-white/5" />
          <span className="relative"> <ButtonDemo>CV</ButtonDemo></span>
        </a>
      </div>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-center gap-5 border-t border-white/10 pt-4 text-sm text-white/45">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noreferrer"
          className="transition hover:text-white"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your@email.com"
          className="transition hover:text-white"
        >
          Email
        </a>
      </div>
    </div>
  </DialogPanel>
</Dialog>
      </header>

      <div className="relative isolate mx-auto max-w-7xl px-4 pt-6 sm:px-5 sm:pt-0 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 hidden transform-gpu overflow-hidden blur-2xl sm:block sm:-top-80"
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
            <div className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 mr-20">
              <span class="relative flex h-2.5 w-2.5">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
  </span>
             <span class="text-purple-200 text-xs sm:text-sm tracking-[0.18em] uppercase">
    Disponible — open to work
  </span>
              
            </div>
          </div>
        
          <motion.div
            className="text-center"
            variants={enableMotion ? leftContainerVariants : undefined}
            initial={enableMotion ? "hidden" : false}
            whileInView={enableMotion ? "visible" : undefined}
            viewport={enableMotion ? { once: false, amount: 0.2 } : undefined}
          >
           <motion.h1 variants={enableMotion ? titleVariants : undefined} className="text-5xl sm:text-7xl lg:text-[7rem] font-bold tracking-tight leading-[0.95] text-balance">
  <span className='text-white'>BAHA</span>{' '}
  <span className='block sm:inline text-[#7faab8]'>SALAH EDDINE.</span>
</motion.h1>
            <motion.p variants={enableMotion ? paragraphVariants : undefined} className="mx-auto mt-4 max-w-2xl px-2 text-base sm:text-[1.25rem] font-medium text-pretty text-gray-400 leading-7 sm:leading-8">
             20-year-old <span className='text-white'>Full-Stack Developer</span> from Morocco. Passionate about building fast, scalable web applications.<br></br>
            </motion.p>
            
            <motion.div className="mx-auto mt-10 flex w-full max-w-md flex-col items-center justify-center gap-4 sm:max-w-none sm:flex-row sm:gap-x-6" variants={enableMotion ? buttonRowVariants : undefined}>
              <motion.a
                href="#projects"
                variants={enableMotion ? buttonItemVariants : undefined}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-indigo-900/35 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:from-indigo-400 hover:to-violet-600 hover:shadow-[0_18px_40px_rgba(99,102,241,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
               View Projects <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.a>
              <motion.a href="#contact" variants={enableMotion ? buttonItemVariants : undefined} className="group inline-flex w-full sm:w-auto justify-center text-sm/6 font-semibold text-white">
        <LiquidButtonDemo size="lg">Let's Talk </LiquidButtonDemo>       

              </motion.a>
            
            </motion.div>
            
            <div className="mt-24 flex flex-wrap justify-center gap-2 sm:gap-3 text-white">
              <a href="https://github.com/bahasalah255" target='_blank' className="inline-flex items-center gap-1.5 px-2 py-1 text-[11px] sm:text-sm text-gray-400 hover:text-white transition-colors">
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
              <a href="https://www.linkedin.com/in/baha-salaheddine-844201339/" target='_blank' className="inline-flex items-center gap-1.5 px-2 py-1 text-[11px] sm:text-sm text-gray-400 hover:text-white transition-colors">
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
              <a href="mailto:salaheddinebaha32@gmail.com" target='_blank' className="inline-flex items-center gap-1.5 px-2 py-1 text-[11px] sm:text-sm text-gray-400 hover:text-white transition-colors">
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
           <div className="flex flex-col items-center gap-3">
  <ScrollButt/>

  <span className="text-[10px] tracking-[0.35em] uppercase text-white/35">
    Scroll
  </span>
</div>
             
            </motion.div>
        </div>
        
          </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -bottom-24 -z-10 hidden transform-gpu overflow-hidden blur-2xl sm:block sm:-bottom-32"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-15 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  )
}
