import { LoaderOne } from "@/components/ui/loader"

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#030712]">
      <div className="w-100 text-center">
        <p className="mb-4 sm:text-[1rem] font-semibold uppercase tracking-[0.28em] text-transparent bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text drop-shadow-[0_0_10px_rgba(129,140,248,0.35)]">
           Initializing Portfolio 
        </p>
        <LoaderOne />
      </div>
    </div>
  )
}