import { useEffect, useState } from "react";

export default function DesktopHint() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 sm:hidden">
      <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/70 px-4 py-2 text-xs text-white/80 backdrop-blur-md shadow-lg">
        <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
        For a better experience, visit on desktop
        <button
          onClick={() => setShow(false)}
          className="ml-2 text-white/50 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
}