import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Skills from "./components/Skills"
import ProjectShowcase from "./components/ProjectShowcase"
import Contact from "./components/Contact"
import Timeline from "./components/Timeline"
import BlogPosts from "./components/BlogPosts"
import { ScrollToTopButton } from "./components/ScrollToTopButton"

export default function Home() {
  return (
    (<div
      className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="relative z-10">
        <Introduction />
        <Skills />
        <ProjectShowcase />
        <Timeline />
        <BlogPosts />
        <Contact />
      </main>
      <ScrollToTopButton />
    </div>)
  );
}

