export default function FlipButton() {
  return (
    <span className="group relative inline-flex align-middle">
      
      {/* Glow */}
      <span className="pointer-events-none absolute -inset-1  bg-purple-500/0 opacity-0 blur-md transition duration-300 group-hover:bg-purple-500/30 group-hover:opacity-100" />

      {/* Button */}
      <span
        className="relative inline-flex h-5 w-15 items-center justify-center overflow-hidden  text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-300/40 hover:shadow-[0_0_18px_rgba(34,211,238,0.22)]"
      >
        {/* FRONT */}
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2 opacity-100 translate-y-0">
          CV
        </span>

        {/* BACK */}
        <span className="absolute inset-0 flex items-center justify-center text-cyan-100 transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M12 3v12" />
            <path d="M7 10l5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
        </span>

        {/* spacer for stable width */}
        <span className="opacity-0">CV</span>
      </span>
    </span>
  )
}