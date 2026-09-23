"use client";

import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-6 pb-12 sm:pt-0 sm:pb-0 sm:min-h-[88vh] flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-6xl w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* LEFT COLUMN: Humanistic Copy & Action Affordances */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-sm sm:text-base text-[#2DAD9D] leading-relaxed max-w-xl mb-2 sm:mb-3">
            Hi, my name is</p>
          {/* Large Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-2 sm:mb-3">
            Gerald Kiragu
          </h1>

          {/* Subtitle */}
          <h2 className="text-lg sm:text-2xl lg:text-3xl font-medium text-[#6E6E73] dark:text-[#98989D] mb-3 sm:mb-4">
            I build scalable applications & systems.
          </h2>

          {/* Body */}
          <p className="text-sm sm:text-base text-[#6E6E73] dark:text-[#98989D] leading-relaxed max-w-xl mb-6 sm:mb-8">
            I'm a software developer specializing in building scalable APIs, systems, and user-friendly web applications using modern technologies.
          </p>

          {/* GK42 Button Architecture: 2-Row Thumb Layout on Mobile, Horizontal on Desktop */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto">
            {/* Primary Action (Full-width on mobile) */}
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2DAD9D] text-white hover:bg-[#238B7E] font-medium px-5 sm:px-6 py-3 rounded-xl gk-btn-tap shadow-sm text-sm"
            >
              <span>Explore Projects</span>
              <ArrowRight size={16} />
            </Link>

            {/* Secondary Actions (2-column row on mobile, inline on desktop) */}
            <div className="grid grid-cols-2 gap-2.5 w-full sm:flex sm:w-auto sm:gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white dark:bg-[#161B22] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/[0.08] dark:border-white/[0.10] hover:border-black/[0.16] dark:hover:border-white/[0.20] font-medium px-4 sm:px-6 py-3 rounded-xl gk-btn-tap gk-card-shadow text-sm text-center"
              >
                Get In Touch
              </Link>

              <a
                href="/resume.pdf"
                download="Gerald_Kiragu_Resume.pdf"
                className="inline-flex items-center justify-center gap-1.5 bg-[#2DAD9D]/10 dark:bg-[#2DAD9D]/15 text-[#2DAD9D] border border-[#2DAD9D]/20 hover:bg-[#2DAD9D]/20 font-medium px-4 sm:px-6 py-3 rounded-xl gk-btn-tap text-sm text-center"
              >
                <span>Resume</span>
                <Download size={15} />
              </a>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: Subtle Desktop Ambient Glow (Untouched) */}
        <div className="lg:col-span-5 hidden md:flex justify-center">
          <div className="w-72 h-72 bg-[#2DAD9D]/20 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
}