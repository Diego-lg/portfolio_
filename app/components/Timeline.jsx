"use client"

import { motion } from "framer-motion"

const timelineItems = [
  {
    year: "2023",
    title: "Senior Web Developer",
    company: "Tech Innovators Inc.",
    description: "Led a team of developers in creating cutting-edge web applications.",
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description: "Developed and maintained various client projects using modern web technologies.",
  },
  {
    year: "2019",
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    description: "Assisted in the development of responsive websites and web applications.",
  },
  {
    year: "2018",
    title: "Computer Science Degree",
    company: "Tech University",
    description: "Graduated with honors in Computer Science.",
  },
]

const Timeline = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience & Education</h2>
      <div className="max-w-4xl mx-auto">
        {timelineItems.map((item, index) => (
          <motion.div
            key={index}
            className="mb-8 flex"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-col items-center mr-4">
              <div className="w-px h-full bg-border"></div>
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-background"></div>
              </div>
            </div>
            <div className="bg-card p-4 rounded-lg shadow-md border border-border flex-1">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-sm text-muted-foreground">{item.year}</span>
              </div>
              <p className="text-muted-foreground mb-2">{item.company}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Timeline

