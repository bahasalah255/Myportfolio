import { PlusIcon } from "@heroicons/react/24/outline"

export default function LiquidButtonDemo({ variant = "default", size = "md", children }) {
  const sizeClass =
    size === "icon"
      ? "h-15 w-20"
      : size === "lg"
        ? "px-7 py-3 text-base"
        : "px-6 py-2.5 text-sm"

  const variantClass =
    variant === "outline"
      ? "border border-white/25 bg-white/5 text-white hover:bg-white/10"
      : "border border-white/25 bg-transparent text-white hover:bg-white-400"

  return (
    <span
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-xl font-semibold transition-all duration-300 ${sizeClass} ${variantClass}`}
    >
      <span className="pointer-events-none absolute -left-16 top-0 h-full w-12 -skew-x-12 bg-white/20 blur-sm transition-all duration-500 group-hover:left-[120%]" />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-indigo-300/20 to-purple-400/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10 inline-flex items-center gap-2">
        {size === "icon" ? <PlusIcon className="h-5 w-5" /> : (children || "Let’s Talk")}
      </span>
    </span>
  )
}