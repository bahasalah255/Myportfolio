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
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

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
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span> {"<Baha />"}</span>
               
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:pl-4 hover:text-cyan-200"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    CV
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate ml-30 px-5 pt-1 lg:px-8">
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
        
      <motion.div
       initial={{ opacity: 0, y: 30 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.35 }}
       transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
       className="flex flex-col gap-7 lg:flex-row"
      >
        <div className="w-full  py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative inline-flex items-center gap-2.5 rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              <span class="relative flex h-2.5 w-2.5">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
  </span>
             <span class="text-purple-200 text-sm tracking-wide">
    Disponible — open to work
  </span>
              
            </div>
          </div>
        
          <div className="text-center">
           <h1 className="text-[10rem] sm:text-[7rem] font-bold tracking-tight text-balance">
  <span className='text-white'>BAHA</span> <span className='text-gray-500'>SALAHEDDINE</span>
</h1>
            <p className="mt-4 text-lg sm:text-[1.5rem] font-medium text-pretty text-gray-400 sm:text-xl/8 ml-110 w-200">
             20-year-old Full-Stack Developer from Morocco. Passionate about building fast, scalable web applications.
            </p>
            
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-12 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-900/35 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:from-indigo-400 hover:to-violet-400 hover:shadow-[0_18px_40px_rgba(99,102,241,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
               View Projects <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a href="#" className="group text-sm/6 font-semibold text-white">
        <LiquidButtonDemo size="lg">Let's Talk </LiquidButtonDemo>       

              </a>
            </div>
          </div>
        </div>
        </motion.div>
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
