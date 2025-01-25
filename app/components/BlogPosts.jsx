"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring upcoming trends and technologies in web development.",
    date: "2023-06-15",
    slug: "future-of-web-development",
  },
  {
    title: "Mastering React Hooks",
    excerpt: "A comprehensive guide to using React Hooks effectively.",
    date: "2023-05-22",
    slug: "mastering-react-hooks",
  },
  {
    title: "Building Scalable APIs with GraphQL",
    excerpt: "Learn how to create efficient and flexible APIs using GraphQL.",
    date: "2023-04-10",
    slug: "building-scalable-apis-graphql",
  },
]

const BlogPosts = () => {
  return (
    <section id="blog" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            className="bg-card p-6 rounded-lg shadow-md border border-border"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">{post.date}</span>
              <Link href={`/blog/${post.slug}`} className="text-primary hover:underline">
                Read more
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default BlogPosts

