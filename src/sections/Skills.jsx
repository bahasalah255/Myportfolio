import React from "react";
import { RadialIntro } from "@/components/animate-ui/components/community/radial-intro";
import CircularGallery from './Circular'

const ITEMS = [
  {
    id: 1,
    name: "Framer University",
    src: "https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png",
  },
  {
    id: 2,
    name: "arhamkhnz",
    src: "https://cdn.iconscout.com/icon/free/png-256/free-php-logo-icon-svg-download-png-2284918.png?f=webp",
  },
  {
    id: 3,
    name: "Skyleen",
    src: "https://p1.hiclipart.com/preview/930/119/770/html-logo-html5-email-web-feed-theme-orange-line-circle-png-clipart.jpg",
  },
  {
    id: 4,
    name: "Shadcn",
    src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
  },
  {
    id: 5,
    name: "Adam Wathan",
    src: "https://www.zdnet.fr/wp-content/uploads/zdnet/2024/02/Python202.jpg",
  },
  {
    id: 6,
    name: "Guillermo Rauch",
    src: "https://www.svgrepo.com/show/353657/django-icon.svg",
  },
  {
    id: 7,
    name: "Jhey",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
  },
  {
    id: 8,
    name: "David Haz",
    src: "https://www.developpez.net/forums/attachments/p597349d1/a/a/a",
  },
  {
    id: 9,
    name: "Matt Perry",
    src: "https://images.icon-icons.com/1381/PNG/512/mysqlworkbench_93532.png",
  },
];

export default function Skills() {
    return(
    <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 text-white">
        <div className="flex justify-center flex-col gap-1">
       <p className="mt-2 text-4xl sm:text-7xl font-bold tracking-tight text-white text-balance leading-none"><span className="text-white">My Tech </span><span className="text-gray-500">Stack</span></p>
       <p className="mt-4 text-gray-300 max-w-2xl  text-lg leading-relaxed">
  A curated set of technologies I use to build modern, scalable, and high-performance web applications.
</p>
       </div>
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
       <RadialIntro orbitItems={ITEMS}/>
       <div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery
    bend={1}
    textColor="#ffffff"
    borderRadius={0.05}
    scrollSpeed={2}
    scrollEase={0.05}
  />
  </div>
</div>
        </section>
    );

}
