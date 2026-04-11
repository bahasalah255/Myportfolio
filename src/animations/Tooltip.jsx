import { useEffect, useMemo, useRef, useState } from "react"

export function RadixTooltipDemo({
  side = "bottom",
  sideOffset = 10,
  align = "center",
  alignOffset = 0,
  followCursor,
  children,
}) {
  const triggerRef = useRef(null)
  const [triggerRect, setTriggerRect] = useState(null)
  const [open, setOpen] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [typedLength, setTypedLength] = useState(0)

 const terminalSegments = useMemo(
  () => [
    { text: "baha@dev:~$ ", className: "text-green-400" },
    { text: "init", className: "text-cyan-300" },
    { text: " ", className: "text-gray-200" },
    { text: "--portfolio", className: "text-violet-300" },

    { text: "\n\n", className: "text-gray-200" },

    { text: " Booting system...", className: "text-gray-400" },
    { text: "\n", className: "text-gray-200" },
    { text: "✔ Loading modules", className: "text-emerald-400" },
    { text: "\n", className: "text-gray-200" },
    { text: "✔ Initializing UI engine", className: "text-emerald-400" },

    { text: "\n\n", className: "text-gray-200" },

    { text: "baha@dev:~$ ", className: "text-green-400" },
    { text: "deploy", className: "text-blue-300" },
    { text: " ", className: "text-gray-200" },
    { text: "skills", className: "text-cyan-200" },

    { text: "\n", className: "text-gray-200" },
    { text: "→ React ✓", className: "text-emerald-300" },
    { text: "\n", className: "text-gray-200" },
    { text: "→ Laravel ✓", className: "text-emerald-300" },
    { text: "\n", className: "text-gray-200" },
    { text: "→ MySQL ✓", className: "text-emerald-300" },

    { text: "\n\n", className: "text-gray-200" },

    { text: "baha@dev:~$ ", className: "text-green-400" },
    { text: "run", className: "text-yellow-300" },
    { text: " ", className: "text-gray-200" },
    { text: "projects", className: "text-cyan-200" },

    { text: "\n", className: "text-gray-200" },
    { text: " Devis App launched", className: "text-cyan-300" },
    { text: "\n", className: "text-gray-200" },
    { text: " AutoFix system online", className: "text-cyan-300" },

    { text: "\n\n", className: "text-gray-200" },

    { text: "baha@dev:~$ ", className: "text-green-400" },
    { text: "status", className: "text-pink-300" },

    { text: "\n", className: "text-gray-200" },
    { text: "✔ All systems operational", className: "text-emerald-400" },
    { text: "\n", className: "text-gray-200" },
    { text: "✔ Ready for collaboration", className: "text-emerald-400" },

    { text: "\n\n", className: "text-gray-200" },

    { text: "baha@dev:~$ ", className: "text-green-400" },
    { text: "_", className: "animate-pulse text-white" },
  ],
  []
);

  const totalChars = useMemo(
    () => terminalSegments.reduce((sum, segment) => sum + segment.text.length, 0),
    [terminalSegments]
  )

  useEffect(() => {
    if (!open) return

    const interval = setInterval(() => {
      setTypedLength((current) => {
        if (current >= totalChars) {
          clearInterval(interval)
          return current
        }
        return current + 1
      })
    }, 20)

    return () => clearInterval(interval)
  }, [open, totalChars])

  const getTooltipStyle = (currentSide) => {
    const viewportPadding = 12
    const rect = triggerRect

    const viewportWidth = typeof window !== "undefined" ? window.innerWidth : 1200
    const tooltipWidth = Math.min(336, viewportWidth - viewportPadding * 2)

    if (followCursor) {
      const left = Math.min(
        Math.max(cursor.x + 12, viewportPadding),
        viewportWidth - tooltipWidth - viewportPadding
      )

      return {
        left,
        top: cursor.y + 12,
        width: tooltipWidth,
        "--arrow-left": "20px",
        transform: "translate(0, 0)",
      }
    }

    if (!rect) {
      return {
        left: viewportPadding,
        top: sideOffset,
        width: tooltipWidth,
        "--arrow-left": `${Math.min(32, tooltipWidth / 2)}px`,
        transform: "translate(0, 0)",
      }
    }

    const baseLeft =
      align === "start"
        ? rect.left + alignOffset
        : align === "end"
        ? rect.right - tooltipWidth + alignOffset
        : rect.left + rect.width / 2 - tooltipWidth / 2 + alignOffset

    const clampedLeft = Math.min(
      Math.max(baseLeft, viewportPadding),
      viewportWidth - tooltipWidth - viewportPadding
    )

    const triggerCenterX = rect.left + rect.width / 2
    const arrowLeft = Math.min(
      Math.max(triggerCenterX - clampedLeft, 14),
      tooltipWidth - 14
    )

    const isTop = currentSide === "top"
    const isBottom = currentSide === "bottom"
    const isLeft = currentSide === "left"

    return {
      left: isLeft ? rect.left - sideOffset - tooltipWidth : clampedLeft,
      top:
        isTop
          ? rect.top - sideOffset
          : isBottom
            ? rect.bottom + sideOffset
            : rect.top + rect.height / 2,
      width: tooltipWidth,
      "--arrow-left": `${arrowLeft}px`,
      transform:
        currentSide === "top"
          ? "translateY(-100%)"
          : currentSide === "bottom"
            ? "translateY(0)"
            : currentSide === "left"
              ? "translateY(-50%)"
              : "translateY(-50%)",
    }
  }

  const sides = side === "both" ? ["top", "bottom"] : [side]

  const tooltipPositionClass = "fixed"

  return (
    <div
      ref={triggerRef}
      className="relative inline-flex"
      onMouseEnter={() => {
        setTypedLength(0)
        setTriggerRect(triggerRef.current?.getBoundingClientRect() ?? null)
        setOpen(true)
      }}
      onMouseLeave={() => {
        setOpen(false)
        setTypedLength(0)
      }}
      onMouseMove={(event) => {
        if (!followCursor) return
        setCursor({ x: event.clientX, y: event.clientY })
      }}
    >
      <span
        className={`relative inline-flex origin-center transition-all duration-300 ${open ? "scale-105 drop-shadow-[0_0_16px_rgba(34,211,238,0.45)]" : "scale-100"}`}
      >
        {!open && (
          <>
            <span className="pointer-events-none absolute -right-1 -top-1 flex h-3.5 w-3.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-300/70" />
              <span className="relative inline-flex h-3.5 w-3.5 rounded-full border border-cyan-200/70 bg-cyan-300/80" />
            </span>
            <span className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-cyan-200/30 bg-slate-900/80 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-cyan-100/95 shadow-lg backdrop-blur-sm">
            <svg width="23" height="30" viewBox="0 0 24 36" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 2 L3 30 L9 24 L14 34 L18 32 L13 22 L22 22 Z" fill="#1D9E75" stroke="#0F6E56" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round"/>
</svg>
            </span>
          </>
        )}
        <span className="pointer-events-none absolute -left-3 top-0 h-full w-5 -skew-x-12 bg-cyan-200/25 opacity-70 blur-sm animate-pulse" />
        {children || "<Baha />"}
      </span>

      {sides.map((currentSide) => {
        const motionClass =
          currentSide === "top"
            ? open
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
            : open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"

        let remaining = typedLength
        const typedSegments = terminalSegments
          .map((segment, index) => {
            if (remaining <= 0) return null
            const visibleText = segment.text.slice(0, remaining)
            remaining -= visibleText.length
            return (
              <span key={`${currentSide}-${index}`} className={segment.className}>
                {visibleText}
              </span>
            )
          })
          .filter(Boolean)

        return (
          <div
            key={currentSide}
            className={`pointer-events-none z-50 rounded-xl border border-white/10 bg-[#0d1117]/85 p-3 text-xs text-gray-100 shadow-2xl backdrop-blur-md transition-all duration-300 ${tooltipPositionClass} ${motionClass}`}
            style={getTooltipStyle(currentSide)}
          >
            <span
              aria-hidden="true"
              className="absolute h-3 w-3 -translate-x-1/2 rotate-45 border border-white/10 bg-[#0d1117]/85"
              style={
                currentSide === "bottom"
                  ? { top: -7, left: "var(--arrow-left)" }
                  : { bottom: -7, left: "var(--arrow-left)" }
              }
            />
            <div className="relative whitespace-pre-wrap font-mono leading-5 tracking-[0.01em]">
              {typedSegments}
              {open && typedLength >= totalChars && (
                <span className="ml-0.5 inline-block h-4 w-[1px] animate-pulse bg-cyan-200 align-middle" />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RadixTooltipDemo