"use client";

import { motion } from "framer-motion";

const timelineItems = [
  {
    year: "2025",
    title: "Web Developer",
    company: "Freelance",
    description:
      "Designed and developed responsive websites and web applications for small businesses and startups. Specialized in modern JavaScript frameworks and best practices.",
  },
  {
    year: "2024",
    title: "Associate Degree in Web Development",
    company: "City College of San Francisco",
    description:
      "Completed a comprehensive program in web development, focusing on front-end and back-end technologies, including HTML, CSS, JavaScript, and React.",
  },
  {
    year: "2023",
    title: "Shopify Liquid Web Developer",
    company: "Freelance",
    description:
      "Customized Shopify themes using Liquid, HTML, CSS, and JavaScript to create dynamic and engaging e-commerce storefronts. Integrated third-party apps and optimized pages for SEO and performance.",
  },
  {
    year: "2022",
    title: "Freelance Web Designer",
    company: "Self-Employed",
    description:
      "Created engaging, responsive websites for local businesses, focusing on user experience and SEO optimization.",
  },
  {
    year: "2021",
    title: "Web Development Course at University of Helsinki",
    company: "Online Certification Program",
    description:
      "Learned React, Redux, Node.js, MongoDB, GraphQL, and TypeScript in an all-in-one course. Focused on building single-page applications using ReactJS and REST APIs with Node.js.",
  },
];

const Timeline = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Experience & Education
      </h2>
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
                <span className="text-sm text-muted-foreground">
                  {item.year}
                </span>
              </div>
              <p className="text-muted-foreground mb-2">{item.company}</p>
              <p className="text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
