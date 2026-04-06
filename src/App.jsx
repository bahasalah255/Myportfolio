import { useEffect, useState } from 'react'
import Hero from './sections/Hero'
import LightWavesBackground from './sections/Background'
import Loader from './sections/Loader'
import About from './sections/About'
import Skills from './sections/Skills'

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
      <LightWavesBackground />
      <Hero />
      <About />
      <Skills/>
    </>
  )
}

export default App;