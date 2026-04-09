import { useEffect, useMemo, useState } from 'react'
import { cn } from '@/lib/utils'

const sizeStyles = {
  sm: 'h-8 px-3 text-xs',
  md: 'h-9 px-3.5 text-sm',
  lg: 'h-10 px-4 text-sm',
}

export function GitHubStarsButton({
  variant,
  size = 'md',
  username,
  repo,
  className,
}) {
  const [stars, setStars] = useState(null)
  const [displayStars, setDisplayStars] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [hoverRunId, setHoverRunId] = useState(0)

  const repoUrl = useMemo(() => {
    if (variant && variant !== '#') return variant
    if (!username || !repo) return '#'
    return `https://github.com/${username}/${repo}`
  }, [variant, username, repo])

  useEffect(() => {
    let cancelled = false

    if (!username || !repo) {
      setIsLoading(false)
      return
    }

    const key = `gh-stars:${username}/${repo}`
    const cached = localStorage.getItem(key)

    if (cached) {
      try {
        const parsed = JSON.parse(cached)
        const isFresh = Date.now() - parsed.timestamp < 1000 * 60 * 30
        if (isFresh && typeof parsed.value === 'number') {
          setStars(parsed.value)
          setIsLoading(false)
          return
        }
      } catch {
      }
    }

    async function loadStars() {
      try {
        const response = await fetch(`https://api.github.com/repos/${username}/${repo}`)
        if (!response.ok) throw new Error('Failed to fetch GitHub stars')
        const data = await response.json()
        const count = typeof data?.stargazers_count === 'number' ? data.stargazers_count : null

        if (!cancelled) {
          setStars(count)
          setIsLoading(false)
        }

        if (count !== null) {
          localStorage.setItem(
            key,
            JSON.stringify({ value: count, timestamp: Date.now() })
          )
        }
      } catch {
        if (!cancelled) {
          setStars(null)
          setIsLoading(false)
        }
      }
    }

    loadStars()

    return () => {
      cancelled = true
    }
  }, [username, repo])

  useEffect(() => {
    if (typeof stars !== 'number') {
      setDisplayStars(0)
      return
    }

    if (hoverRunId === 0) {
      setDisplayStars(stars)
      return
    }

    const duration = 750
    let frameId = 0
    let startTime = 0

    const tick = (time) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplayStars(Math.round(stars * eased))

      if (progress < 1) {
        frameId = requestAnimationFrame(tick)
      }
    }

    setDisplayStars(0)
    frameId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frameId)
    }
  }, [stars, hoverRunId])

  const disabled = repoUrl === '#'

  const handleHover = () => {
    if (!disabled && typeof stars === 'number') {
      setHoverRunId((value) => value + 1)
    }
  }

  const starsLabel = isLoading
    ? '...'
    : stars === null
    ? '--'
    : String(displayStars)

  const content = (
    <>
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55 0-.27-.01-.99-.02-1.95-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.27.72-1.56-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.28 1.2-3.08-.12-.3-.52-1.5.11-3.14 0 0 .98-.31 3.2 1.18a11.12 11.12 0 0 1 5.83 0c2.21-1.49 3.19-1.18 3.19-1.18.63 1.64.23 2.84.11 3.14.75.8 1.2 1.82 1.2 3.08 0 4.42-2.69 5.4-5.26 5.68.41.36.78 1.08.78 2.17 0 1.57-.02 2.84-.02 3.23 0 .3.2.65.79.54A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
      <span className="font-medium leading-none">{starsLabel}</span>
      <span className="text-yellow-400" aria-hidden="true">★</span>
    </>
  )

  if (disabled) {
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-xl border border-black/10 bg-white text-black/45',
          sizeStyles[size] ?? sizeStyles.md,
          className
        )}
      >
        {content}
      </span>
    )
  }

  return (
    <a
      href={repoUrl}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={handleHover}
      onFocus={handleHover}
      className={cn(
        'pointer-events-auto inline-flex items-center gap-1.5 rounded-xl border border-black/10 bg-white text-black transition hover:bg-white/90',
        sizeStyles[size] ?? sizeStyles.md,
        className
      )}
      aria-label={`View ${username}/${repo} on GitHub`}
    >
      {content}
    </a>
  )
}
