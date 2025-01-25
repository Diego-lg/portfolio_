"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import ThreeBackground from "./ThreeBackground"

export default function Introduction() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen text-center relative overflow-hidden flex items-center justify-center"
    >
      <div className="absolute inset-0 z-0">
        <ThreeBackground limitHeight={true} />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="mb-8 relative inline-block"
        >
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="Diego Li"
            className="rounded-full w-48 h-48 mx-auto border-4 border-primary"
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0"
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
        >
          Hi, I'm Diego Li
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          <TypeAnimation
            sequence={["I'm a Web Developer", 2000, "I'm a UI/UX Enthusiast", 2000, "I'm a Problem Solver", 2000]}
            wrapper="p"
            cursor={true}
            repeat={Number.POSITIVE_INFINITY}
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

