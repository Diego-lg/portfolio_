"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiGraphql,
  SiTailwindcss,
} from "react-icons/si";
import ThreeJsIcon from "./ThreeJsIcon";

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Python", icon: FaPython, color: "text-blue-500" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "Three.js", icon: ThreeJsIcon, color: "text-[#049ef4]" },
];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-4 rounded-lg shadow-md border border-border flex flex-col items-center justify-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-16 h-16 mb-2"
              >
                {skill.name === "Three.js" ? (
                  <div className="w-16 h-16">
                    <skill.icon />
                  </div>
                ) : (
                  <skill.icon className={`text-4xl ${skill.color}`} />
                )}
              </motion.div>
              <h3 className="text-sm font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
