"use client";

import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  github,
  live,
}: Project) {
  return (
    <div className="bg-white dark:bg-[#161B22] border border-black/[0.08] dark:border-white/[0.10] rounded-2xl p-5 sm:p-6 hover:border-[#2DAD9D]/50 dark:hover:border-[#2DAD9D]/50 transition-colors duration-120 gk-card-shadow flex flex-col justify-between h-full">
      <div>
        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#98989D] leading-relaxed mb-4">
          {description}
        </p>

        {/* Tech tags - 8dp squircle */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
          {tech.map((item, index) => (
            <span
              key={index}
              className="text-[11px] sm:text-xs font-medium bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.08] text-[#6E6E73] dark:text-[#98989D] px-2.5 py-1 rounded-[8px]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-black/[0.04] dark:border-white/[0.05]">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.07] dark:hover:bg-white/[0.09] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/[0.06] dark:border-white/[0.08] gk-btn-tap"
        >
          <Github size={14} />
          <span>Code</span>
        </a>

        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#2DAD9D] text-white hover:bg-[#238B7E] gk-btn-tap shadow-sm"
          >
            <span>Live Demo</span>
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}