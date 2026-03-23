"use client";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 px-6 transition-colors">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-400 transition-colors">
        
        <p>© {new Date().getFullYear()} Gerald Kiragu All rights reserved.</p>

        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://github.com/Geraldk42" target="_blank" className="hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/gerald-kiragu-ba6786250/" target="_blank" className="hover:text-[#2DAD9D] dark:hover:text-[#2DAD9D] transition-colors">
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}