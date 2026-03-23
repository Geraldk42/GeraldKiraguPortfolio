"use client";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "LinkCal",
    description:
      "A mobile app that simplifies scheduling by allowing users to link calendars and find mutual availability.",
    tech: ["Java", "Firebase"],
    github: "https://github.com/Geraldk42/mobile-fanta-lite.git",
    
  },
  {
    title: "Land Property Management System",
    description:
      "A web-based Land Property Management System using core PHP that enables efficient management of property records, contracts, and transactions",
    tech: ["PHP", "MySQL"],
    github: "https://github.com/Geraldk42/Land-Property-Management-System",
    
  },
  {
    title: "Analytics Dashboard",
    description:
      "A web-based dashboard displaying employee work hours with visual charts and real-time analytics.",
    tech: ["Blazor", "C#", "Chart.js"],
    github: "https://github.com/Geraldk42/Managemate.git",
    
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white transition-colors">
          Featured Projects
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-center mb-12 transition-colors">
          Some of the projects I've worked on
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

      </div>
    </section>
  );
}