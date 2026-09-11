import { useEffect, useState } from "react";

/** Returns `0` when the user prefers reduced motion; otherwise `preferred`. */
export function useShaderSpeed(preferred = 1): number {
  const [speed, setSpeed] = useState(preferred);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setSpeed(mq.matches ? 0 : preferred);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [preferred]);
  return speed;
}
