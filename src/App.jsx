import { useEffect, useState } from 'react'
import Hero from './sections/Hero'
import LightWavesBackground from './sections/Background'
import Loader from './sections/Loader'
import About from './sections/About'
import Skills from './sections/Skills'
import Journey from './sections/Journey'
import ScrollProgressBar from './components/ScrollProgressBar'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return (
    <>
      <ScrollProgressBar />
      <LightWavesBackground />
      <Hero />
      <About />
      <Skills/>
      <Journey/>
    </>
  )
}

export default App;