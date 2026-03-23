"use client";

import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <p className="text-[#2DAD9D] mb-2">Hi, my name is</p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
            Gerald Kiragu  
          </h1>

          <h2 className="text-2xl md:text-4xl text-gray-600 dark:text-gray-400 mb-6">
            I build modern  applications & systems.
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            I'm a software developer specializing in building scalable APIs,
            systems, and user-friendly web applications using modern technologies.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="/projects"
              className="bg-[#2DAD9D] text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="border border-[#2DAD9D] text-gray-900 dark:text-white px-6 py-3 rounded-lg hover:bg-[#2DAD9D] hover:text-black dark:hover:text-black transition"
            >
              Contact Me
            </a>

            <a
              href="/resume.pdf"
              download="Gerald_Kiragu_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 bg-[#2DAD9D] text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition"
            >
              Download Resume
              <Download size={20} />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex justify-center">
          <div className="w-72 h-72 bg-[#2DAD9D]/20 rounded-full blur-3xl"></div>
        </div>

      </div>
    </section>
  );
}