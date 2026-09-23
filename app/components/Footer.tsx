"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/[0.08] dark:border-white/[0.10] py-6 sm:py-8 px-4 sm:px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#6E6E73] dark:text-[#98989D]">
        
        <p className="flex items-center gap-1.5 text-center sm:text-left">
          <span>©</span>
          <span className="tabular-nums font-medium">{new Date().getFullYear()}</span>
          <span>Gerald Kiragu. Built with GK42 Design System.</span>
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs">
          <a
            href="https://github.com/Geraldk42"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition-colors gk-btn-tap"
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/gerald-kiragu-ba6786250/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition-colors gk-btn-tap"
          >
            <Linkedin size={15} />
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:gerrykiragu@outlook.com"
            className="flex items-center gap-1.5 hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition-colors gk-btn-tap"
          >
            <Mail size={15} />
            <span>Email</span>
          </a>
          <a
            href="https://wa.me/254790283578"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition-colors gk-btn-tap"
          >
            <MessageCircle size={15} />
            <span>WhatsApp</span>
          </a>
        </div>

      </div>
    </footer>
  );
}