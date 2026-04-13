import { useEffect, useState } from 'react'

function getReducedMotionPreference() {
  if (typeof window === 'undefined') return false

  return (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    window.matchMedia('(max-width: 768px)').matches ||
    window.matchMedia('(pointer: coarse)').matches
  )
}

export default function useReducedMotionPreference() {
  const [reducedMotion, setReducedMotion] = useState(getReducedMotionPreference)

  useEffect(() => {
    const queries = [
      window.matchMedia('(prefers-reduced-motion: reduce)'),
      window.matchMedia('(max-width: 768px)'),
      window.matchMedia('(pointer: coarse)'),
    ]

    const updatePreference = () => {
      setReducedMotion(queries.some((query) => query.matches))
    }

    updatePreference()
    queries.forEach((query) => {
      if (typeof query.addEventListener === 'function') {
        query.addEventListener('change', updatePreference)
      }
    })

    window.addEventListener('resize', updatePreference)

    return () => {
      queries.forEach((query) => {
        if (typeof query.removeEventListener === 'function') {
          query.removeEventListener('change', updatePreference)
        }
      })
      window.removeEventListener('resize', updatePreference)
    }
  }, [])

  return reducedMotion
}
