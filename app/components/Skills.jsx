"use client"

import { motion } from "framer-motion"
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiGraphql, SiTailwindcss } from "react-icons/si"

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
]

export default function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-4 rounded-lg shadow-md border border-border flex flex-col items-center justify-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`text-4xl mb-2 ${skill.color}`}
              >
                <skill.icon />
              </motion.div>
              <h3 className="text-sm font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

