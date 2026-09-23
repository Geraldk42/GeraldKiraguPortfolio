"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 text-center">
      <div className="max-w-4xl mx-auto bg-white dark:bg-[#161B22] border border-black/[0.08] dark:border-white/[0.10] rounded-2xl p-6 sm:p-12 gk-card-shadow">
        
        {/* Section Header Caption */}
        <p className="text-xs font-semibold uppercase tracking-wider text-[#2DAD9D] mb-2">
          Collaboration & Opportunities
        </p>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-3">
          Let’s build something exceptional together
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#6E6E73] dark:text-[#98989D] max-w-xl mx-auto mb-8 leading-relaxed">
          Whether you have an upcoming project, architecture questions, or a full-time engineering opportunity, I’m always open to discussing high-impact engineering.
        </p>

        {/* Action Affordance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2DAD9D] text-white hover:bg-[#238B7E] font-medium px-7 py-3 rounded-xl gk-btn-tap shadow-sm text-sm"
          >
            <span>Get In Touch</span>
            <ArrowRight size={16} />
          </Link>

          <a
            href="mailto:gerrykiragu@outlook.com"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black/[0.03] dark:bg-white/[0.05] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/[0.08] dark:border-white/[0.10] font-medium px-6 py-3 rounded-xl gk-btn-tap text-sm"
          >
            <Mail size={16} />
            <span>Email Directly</span>
          </a>
        </div>

      </div>
    </section>
  );
}