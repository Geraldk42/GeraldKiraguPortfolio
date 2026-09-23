"use client";

import { useState, useMemo } from "react";
import { Search, X, FolderGit2 } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

type ProjectCategory = "All" | "Web & Apps" | "Backend & APIs" | "Games & Interactive";

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  category: "Web & Apps" | "Backend & APIs" | "Games & Interactive";
}

const projects: ProjectItem[] = [
  {
    title: "Signal Trace",
    description:
      "A web-based puzzle game where players rotate circuit traces to restore the signal network.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Geraldk42/signal-trace.git",
    live: "https://signaltracer.vercel.app/",
    category: "Games & Interactive",
  },
  {
    title: "Veridian Tenant Management System",
    description:
      "Veridian TMS is a comprehensive property management solution designed specifically for the Kenyan market.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/Geraldk42/TMS-Veridian",
    live: "https://veridian-tms.gt.tc/",
    category: "Web & Apps",
  },
  {
    title: "Pologger",
    description:
      "A scalable digital police OB system for complaint logging, officer assignment, and case tracking, built with Next.js, Supabase, and Vercel.",
    tech: ["Next.js", "Supabase", "Vercel"],
    github: "https://github.com/Geraldk42/Pologger",
    live: "https://pologger.vercel.app/",
    category: "Web & Apps",
  },
  {
    title: "ServiceHub",
    description:
      "Local Services Booking & Management API. A backend system connecting clients to service providers (plumbers, cleaners, electricians, caregivers).",
    tech: ["Node.js Express", "MongoDB Atlas", "Postman"],
    github: "https://github.com/Geraldk42/servicehub-API",
    category: "Backend & APIs",
  },
  {
    title: "Analytics Dashboard",
    description:
      "A web-based dashboard displaying employee work hours with visual charts and real-time analytics.",
    tech: ["Blazor", "C#", "Chart.js"],
    github: "https://github.com/Geraldk42/Managemate",
    category: "Web & Apps",
  },
  {
    title: "LinkCal",
    description:
      "A mobile app that simplifies scheduling by allowing users to link calendars and find mutual availability.",
    tech: ["Java", "Firebase"],
    github: "https://github.com/Geraldk42/mobile-fanta-lite.git",
    category: "Web & Apps",
  },
  {
    title: "Land Property Management System",
    description:
      "A web-based Land Property Management System using core PHP that enables efficient management of property records, contracts, and transactions.",
    tech: ["PHP", "MySQL"],
    github: "https://github.com/Geraldk42/Land-Property-Management-System",
    category: "Web & Apps",
  },
];

const categories: ProjectCategory[] = ["All", "Web & Apps", "Backend & APIs", "Games & Interactive"];

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.tech.some((t) => t.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("All");
  };

  return (
    <main className="pt-20 sm:pt-24 min-h-screen px-4 sm:px-6 pb-20">
      <div className="max-w-6xl mx-auto py-10 sm:py-16">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-3">
            Projects & Systems
          </h1>
        </div>

        {/* GK42 Section 7: Full-Width Search Bar */}
        <div className="mb-4">
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8E8E93] dark:text-[#636366] pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name, tech stack, or keyword..."
              className="w-full h-12 pl-11 pr-10 rounded-xl bg-white dark:bg-[#161B22] border border-black/[0.08] dark:border-white/[0.10] text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#8E8E93] dark:placeholder-[#636366] text-sm focus:outline-none focus:border-[#2DAD9D] dark:focus:border-[#2DAD9D] gk-card-shadow transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#8E8E93] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] p-1 rounded-full gk-btn-tap"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* GK42 Section 7: Filter Sub-Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 sm:mb-10 pb-4 border-b border-black/[0.06] dark:border-white/[0.06]">
          {/* Left: Tabular count indicator */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#8E8E93] dark:text-[#636366]">
              Showing
            </span>
            <span className="tabular-nums px-2 py-0.5 rounded-[8px] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.05] dark:border-white/[0.08] text-xs font-medium text-[#1D1D1F] dark:text-[#F5F5F7]">
              {filteredProjects.length} of {projects.length}
            </span>
          </div>

          {/* Right: Quick action filter chips */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-[8px] text-xs font-medium gk-btn-tap transition-colors ${
                    isSelected
                      ? "bg-[#2DAD9D] text-white shadow-sm"
                      : "bg-white dark:bg-[#161B22] text-[#6E6E73] dark:text-[#98989D] border border-black/[0.08] dark:border-white/[0.10] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        ) : (
          /* GK42 Section 11: Empty State */
          <div className="max-w-md mx-auto text-center py-12 px-6 rounded-2xl bg-[#2DAD9D]/[0.05] border border-[#2DAD9D]/20 gk-card-shadow">
            <div className="w-12 h-12 rounded-full bg-white dark:bg-[#161B22] border border-[#2DAD9D]/30 flex items-center justify-center mx-auto mb-4 text-[#2DAD9D]">
              <FolderGit2 size={22} />
            </div>
            <h3 className="text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
              No matching projects found
            </h3>
            <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#98989D] mb-5 leading-relaxed">
              No results match your active criteria. Clear filters to explore all engineering projects.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-[#2DAD9D] text-white hover:bg-[#238B7E] gk-btn-tap shadow-sm"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </div>
    </main>
  );
}