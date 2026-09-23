"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#F5F5F7]/85 dark:bg-[#0D1117]/85 backdrop-blur-md border-b border-black/[0.08] dark:border-white/[0.10] z-50 transition-colors">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3.5">
        
        {/* Logo / Brand */}
        <Link 
          href="/" 
          className="font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] text-sm sm:text-lg whitespace-nowrap shrink-0 gk-btn-tap"
        >
          <span>Gerald Kiragu</span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-0.5 sm:gap-2 text-xs sm:text-sm shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2 sm:px-3 py-1.5 rounded-[8px] font-medium transition-colors gk-btn-tap whitespace-nowrap ${
                  isActive
                    ? "text-[#2DAD9D] bg-[#2DAD9D]/10 dark:bg-[#2DAD9D]/15"
                    : "text-[#6E6E73] dark:text-[#98989D] hover:text-[#1D1D1F] dark:hover:text-[#F5F5F7] hover:bg-black/[0.03] dark:hover:bg-white/[0.04]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="ml-0.5 sm:ml-2">
            <ThemeToggle />
          </div>
        </div>

      </div>
    </nav>
  );
}