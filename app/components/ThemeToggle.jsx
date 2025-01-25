"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    (<motion.button
      className={`w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 flex items-center`}
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}>
      <motion.div
        className="w-4 h-4 bg-white rounded-full shadow-md flex items-center justify-center"
        animate={{
          x: resolvedTheme === "dark" ? 24 : 0,
        }}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}>
        {resolvedTheme === "dark" ? (
          <Moon className="w-3 h-3 text-gray-800" />
        ) : (
          <Sun className="w-3 h-3 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>)
  );
}

