export function LoaderOne() {
  return (
    <div className="flex items-center justify-center gap-2" role="status" aria-label="Loading">
      <span className="h-2.5 w-2.5 rounded-full bg-white/90 animate-bounce [animation-delay:-0.3s]" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/90 animate-bounce [animation-delay:-0.15s]" />
      <span className="h-2.5 w-2.5 rounded-full bg-white/90 animate-bounce" />
    </div>
  )
}
