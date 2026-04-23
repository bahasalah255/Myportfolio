import { useState } from 'react'
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
import Button from './components/Top'
import DesktopHint from './components/Pop'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      <ScrollProgressBar />
      <LightWavesBackground />
      <AmbientTrustText />
      <DesktopHint/>
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      <Journey/>
      <Work/>
      <Loop/>
      <Contact/>
      <Button/>
      <Footer/>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
    </>
  )
}

export default App;