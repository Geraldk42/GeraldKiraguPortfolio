"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-[#0B0F14]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50 transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-[#2DAD9D]">
          Gerald Kiragu
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-gray-800 dark:text-gray-200">
          <Link href="/" className="hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition">
            Contact
          </Link>
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
}