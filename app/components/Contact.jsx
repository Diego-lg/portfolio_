"use client"

import { motion, useInView } from "framer-motion"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const formRef = useRef(null)
  const isInView = useInView(formRef, { once: true, amount: 0.5 })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formState)
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-20"
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <motion.form
        ref={formRef}
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-md mx-auto bg-card p-8 rounded-lg shadow-lg border border-border"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-foreground">
            Name
          </label>
          <Input
            type="text"
            id="name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            className="w-full p-2 bg-background border-input rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-foreground">
            Email
          </label>
          <Input
            type="email"
            id="email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            className="w-full p-2 bg-background border-input rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-foreground">
            Message
          </label>
          <Textarea
            id="message"
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            className="w-full p-2 bg-background border-input rounded"
            rows={4}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </motion.form>
    </motion.section>
  )
}

