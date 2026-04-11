import ScrollVelocity from '../components/ui/Scrollvelo'

const LOOP_LINE = 'eat() ;  sleep() ;   code() ;  repeat() ; '

export default function Loop() {
    return (
        <section id="loop" className="relative z-10 mx-auto max-w-7xl overflow-hidden px-6 py-32 text-white lg:px-8 lg:py-44">
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
                    <p className="text-xl font-medium tracking-[-0.01em] text-white/90 sm:text-2xl lg:text-3xl">
                        Consistency builds everything.
                    </p>
                    <p className="mt-5 text-[11px] font-medium tracking-[0.3em] text-white/45 sm:text-xs">
                        DEVELOPER MINDSET
                    </p>
                </div>
            <div className="mt-24 space-y-24 lg:mt-28 lg:space-y-28">

                <ScrollVelocity
                    texts={[LOOP_LINE]}
                    velocity={80}
                    damping={70}
                    stiffness={240}
                    numCopies={8}
                    velocityMapping={{ input: [0, 1200], output: [0, 1.2] }}
                    parallaxClassName="w-full"
                    scrollerClassName="!text-[clamp(2.25rem,9vw,6rem)] !font-mono !font-medium !tracking-[-0.01em] !text-white/20 !drop-shadow-none"
                    className="px-6"
                />

                
            </div>
        </section>
    )
}