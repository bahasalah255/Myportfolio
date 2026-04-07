import Timeline from '../components/ui/Timeline.jsx'
export default function Journey(){
    return(
        <>
         <section id="journey" className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 text-white">
        <div className="flex justify-center flex-col gap-1">
       <p className="mt-2 text-4xl sm:text-7xl font-bold tracking-tight text-white text-balance leading-none"><span className="text-white">My</span> <span className="text-gray-500"> Journey</span></p>
       <p className="mt-4 text-gray-300 max-w-2xl  text-lg leading-relaxed">Experience
A timeline of my growth, projects, and professional work</p>
       </div>
       <Timeline/>
       </section>
        </>
    );
}