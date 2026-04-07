import React from "react";
import { RadialIntro } from "@/components/animate-ui/components/community/radial-intro";
import Orbit from '@/components/ui/Orbit'
import { motion } from "framer-motion";

const ITEMS1 = [
  {
    id: 1,
    name: "VS Code",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    id: 2,
    name: "Vim",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vim/vim-original.svg",
  },
  {
    id: 3,
    name: "Linux",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    id: 4,
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 5,
    name: "GitHub",
     src: "https://www.svgrepo.com/show/475654/github-color.svg",
  },
  {
    id: 6,
    name: "Postman",
    src: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
  id: 7,
  name: "Arch Linux",
  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/archlinux/archlinux-original.svg",
},
{
  id: 8,
  name: "Linear",
  src: "https://cdn.simpleicons.org/linear/ffffff",
}
];
const ITEMS = [
  {
    id: 1,
    name: "React",
    src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
  },
  {
    id : 2 ,
    name : "Javascript",
    src : "https://www.codewithharry.com/img/notes/js.webp",
  },
  {
    id: 2,
    name: "PHP",
    src: "https://cdn.iconscout.com/icon/free/png-256/free-php-logo-icon-svg-download-png-2284918.png?f=webp",
  },
  {
    id: 3,
    name: "HTML",
    src: "https://p1.hiclipart.com/preview/930/119/770/html-logo-html5-email-web-feed-theme-orange-line-circle-png-clipart.jpg",
  },
  {
    id: 4,
    name: "Css",
    src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
  },
  {
    id: 5,
    name: "Python",
    src: "https://www.zdnet.fr/wp-content/uploads/zdnet/2024/02/Python202.jpg",
  },
  {
    id: 6,
    name: "Django",
    src: "https://www.svgrepo.com/show/353657/django-icon.svg",
  },
  {
    id: 7,
    name: "Tailwend Css",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
  },
  {
    id: 8,
    name: "Boostrap",
    src: "https://www.developpez.net/forums/attachments/p597349d1/a/a/a",
  },
  {
    id: 9,
    name: "MySql",
    src: "https://images.icon-icons.com/1381/PNG/512/mysqlworkbench_93532.png",
  },
];

export default function Skills() {
    return(
      
      <>
      
    <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 text-white">
      <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="flex justify-center flex-col gap-1">
       <p className="mt-2 text-4xl sm:text-7xl font-bold tracking-tight text-white text-balance leading-none"><span className="text-white">My Tech </span><span className="text-gray-500">Stack</span></p>
       <p className="mt-4 text-gray-300 max-w-2xl  text-lg leading-relaxed">
  A curated set of technologies I use to build modern, scalable, and high-performance web applications.
</p>
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-30">
       <RadialIntro orbitItems={ITEMS}/>
      
       <div className="relative mt-12 flex h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl">
  <div className="absolute left-1/2 top-6 z-10 -translate-x-1/2 rounded-2xl border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md shadow-lg shadow-black/20">
    <div className="flex items-center gap-2.5">
      <span className="h-2 w-2 rounded-full bg-white/80" />
      <div className="leading-tight">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Visualization</p>
        <p className="text-sm font-semibold text-white/95">Tools Orbit</p>
      </div>
    </div>
  </div>
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
  </div>
</div>
</motion.div>
        </section>
        
        </>
    );

}
