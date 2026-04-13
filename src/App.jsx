import { useState } from 'react'
import { MotionConfig } from 'framer-motion'
import Hero from './sections/Hero'
import LightWavesBackground from './sections/Background'
import Loader from './sections/Loader'
import About from './sections/About'
import Skills from './sections/Skills'
import Journey from './sections/Journey'
import ScrollProgressBar from './components/ScrollProgressBar'
import Projects from './sections/Projects'
import AmbientTrustText from './components/ui/AmbientTrustText'
import Work from './sections/Work'
import Loop from './sections/Loop'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import useReducedMotionPreference from './hooks/useReducedMotionPreference'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const reduceMotion = useReducedMotionPreference()

  return (
    <MotionConfig reducedMotion={reduceMotion ? 'always' : 'user'}>
      <>
        {!reduceMotion && <ScrollProgressBar />}
        {!reduceMotion && <LightWavesBackground />}
        {!reduceMotion && <AmbientTrustText />}
        <Hero />
        <About />
        <Skills reduceMotion={reduceMotion} />
        <Journey/>
        <Projects/>
        <Work/>
        <Loop reduceMotion={reduceMotion} />
        <Contact/>
        <Footer/>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </>
    </MotionConfig>
  )
}

export default App;