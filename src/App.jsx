import { useEffect, useState } from 'react'
import Hero from './sections/Hero'
import LightWavesBackground from './sections/Background'
import Loader from './sections/Loader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <Loader />
  }

  return(
    <>
    <LightWavesBackground/>
    <Hero/>
    </>
  );
}

export default App;