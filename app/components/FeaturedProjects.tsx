"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Veridian Tenant Management System",
    description:
      "Veridian TMS is a comprehensive property management solution designed specifically for the Kenyan market.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/Geraldk42/TMS-Veridian",
    live: "https://veridian-tms.gt.tc/",
  },
  {
    title: "Signal Trace",
    description:
      "A web-based puzzle game where players rotate circuit traces to restore the signal network.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Geraldk42/signal-trace.git",
    live: "https://signaltracer.vercel.app/",
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
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-center text-[#1D1D1F] dark:text-[#F5F5F7] mb-3">
          Featured Projects
        </h2>

        <p className="text-sm sm:text-base text-[#6E6E73] dark:text-[#98989D] text-center mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed">
          Here are some of my featured projects, ranging from web applications to mobile applications.
        </p>

        {/* Responsive Grid - 1 Col on Mobile to ensure zero cramped text, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* GK42 Section 8 Floating Action Pill CTA */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#1D1D1F] dark:bg-[#21262D] text-white hover:bg-black dark:hover:bg-[#2c333c] text-xs sm:text-sm font-semibold gk-btn-tap gk-pill-shadow transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
}