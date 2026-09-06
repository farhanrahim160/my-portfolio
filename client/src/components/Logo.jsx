import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.a
      href="#home"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2"
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <motion.rect
          x="1" y="1" width="38" height="38" rx="10"
          stroke="url(#logoGradient)" strokeWidth="2" fill="rgba(59,130,246,0.08)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <text x="50%" y="56%" textAnchor="middle" fontSize="16" fontWeight="700" fill="url(#logoGradient)" fontFamily="Arial, sans-serif">
          FR
        </text>
      </svg>
      <span className="text-lg font-bold text-white hidden sm:block">
        Farhan<span className="text-blue-500">.</span>
      </span>
    </motion.a>
  );
}
