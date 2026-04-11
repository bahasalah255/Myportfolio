import { useEffect, useState } from "react"

export default function Loader({ onComplete }) {
  const commandText = "open baha.portfolio"
  const welcomeText = "welcome."

  const [isVisible, setIsVisible] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [typedCommand, setTypedCommand] = useState("")
  const [typedWelcome, setTypedWelcome] = useState("")

  useEffect(() => {
    const timeouts = []
    const pushTimeout = (callback, delay) => {
      const id = setTimeout(callback, delay)
      timeouts.push(id)
    }

    setIsVisible(true)

    const charDelay = 45
    const firstStart = 140

    for (let index = 1; index <= commandText.length; index++) {
      pushTimeout(() => {
        setTypedCommand(commandText.slice(0, index))
      }, firstStart + index * charDelay)
    }

    const secondStart = firstStart + commandText.length * charDelay + 160
    pushTimeout(() => setShowWelcome(true), secondStart)

    for (let index = 1; index <= welcomeText.length; index++) {
      pushTimeout(() => {
        setTypedWelcome(welcomeText.slice(0, index))
      }, secondStart + index * charDelay)
    }

    const fadeStart = secondStart + welcomeText.length * charDelay + 180
    pushTimeout(() => setIsFadingOut(true), fadeStart)
    pushTimeout(() => onComplete?.(), fadeStart + 500)

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [commandText, welcomeText, onComplete])

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(52,211,153,0.06),transparent_35%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.06),transparent_35%),linear-gradient(180deg,#020617,#01030a)] transition-opacity duration-500 ${isVisible && !isFadingOut ? "opacity-100" : "opacity-0"}`}
    >
      <div className="w-full max-w-xl px-6 text-left font-mono">
        <div className="overflow-hidden rounded-2xl border border-emerald-300/15 bg-[#0b1118]/88 shadow-[0_0_50px_rgba(2,12,27,0.7),0_0_24px_rgba(52,211,153,0.08)] backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-white/10 bg-[#101720]/95 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.22em] text-slate-400">terminal</span>
          </div>

          <div className="p-5 sm:p-6">
            <p className="text-sm leading-7 text-zinc-200/90 sm:text-base">
              <span className="text-emerald-300">baha@portfolio</span>
              <span className="text-slate-500">:</span>
              <span className="text-violet-300">~</span>
              <span className="text-slate-400">$</span>{" "}
              <span className="text-zinc-100">{typedCommand}</span>
              {!showWelcome && <span className="ml-0.5 animate-pulse text-emerald-200">|</span>}
            </p>

            {showWelcome && (
              <p className="mt-1 text-sm leading-7 text-zinc-300/85 sm:text-base">
                <span className="text-sky-300">&gt;</span>{" "}
                <span className="text-zinc-200">{typedWelcome}</span>
                <span className="ml-0.5 animate-pulse text-emerald-200">|</span>
              </p>
            )}

            <div className="mt-3 h-px w-full bg-gradient-to-r from-emerald-300/25 via-transparent to-violet-300/25" />
          </div>
        </div>
      </div>
    </div>
  )
}