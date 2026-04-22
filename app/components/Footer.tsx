"use client";

import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400 transition-colors">
        
        <p>© {new Date().getFullYear()} Gerald Kiragu All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="https://github.com/Geraldk42" target="_blank" className="flex flex-col items-center gap-1 hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition-colors">
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/gerald-kiragu-ba6786250/" target="_blank" className="flex flex-col items-center gap-1 hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition-colors">
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
          <a href="mailto:gerrykiragu@outlook.com" className="flex flex-col items-center gap-1 hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition-colors">
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a href="https://wa.me/254790283578" target="_blank" className="flex flex-col items-center gap-1 hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition-colors">
            <MessageCircle size={20} />
            <span>WhatsApp/Mobile</span>
          </a>
        </div>

      </div>
    </footer>
  );
}