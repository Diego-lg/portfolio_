"use client";
import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "T-Shirt E-commerce AI powered",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "/tshirt.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    github: "https://github.com/Diego-lg?tab=repositories",
    liveDemo: "https://e-commerce-platform-demo.com",
  },
  {
    title: "Task Management App",
    description:
      "A responsive task management application with real-time updates and team collaboration features.",
    image: "/manager.png",
    technologies: ["Vue.js", "Firebase", "Vuex", "Tailwind CSS"],
    github: "https://github.com/Diego-lg?tab=repositories",
    liveDemo: "https://task-management-app-demo.com",
  },
  {
    title: "Weather Forecast Dashboard",
    description:
      "An interactive weather forecast dashboard using real-time data from multiple APIs.",
    image: "/weather.png",
    technologies: ["React", "Redux", "Chart.js", "OpenWeatherMap API"],
    github: "https://github.com/Diego-lg?tab=repositories",
    liveDemo: "https://weather-forecast-dashboard-demo.com",
  },
];

const ProjectShowcase = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisible) => prevVisible + 3);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Project Showcase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMoreProjects}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectShowcase;
