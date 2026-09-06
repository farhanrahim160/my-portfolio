import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const hoverScale = useMotionValue(1);

  const springX = useSpring(cursorX, { stiffness: 800, damping: 40, mass: 0.3 });
  const springY = useSpring(cursorY, { stiffness: 800, damping: 40, mass: 0.3 });
  const springScale = useSpring(hoverScale, { stiffness: 300, damping: 20 });

  const ringRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
      const target = e.target.closest("a, button");
      hoverScale.set(target ? 1.8 : 1);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY, hoverScale]);

  return (
    <motion.div
      ref={ringRef}
      style={{ x: springX, y: springY, scale: springScale }}
      className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-blue-500 pointer-events-none z-[9999] hidden md:block mix-blend-difference"
    />
  );
}
