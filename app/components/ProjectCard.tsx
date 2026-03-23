"use client";

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
    <div className="bg-white dark:bg-[#121821] border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-[#2DAD9D] dark:hover:border-[#2DAD9D] hover:-translate-y-1 transition-all shadow-sm dark:shadow-none">

      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>

      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 dark:bg-[#0B0F14] border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded transition-colors"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4 text-sm">
        <a
          href={github}
          target="_blank"
          className="text-[#2DAD9D] hover:underline"
        >
          GitHub
        </a>

        {live && (
          <a
            href={live}
            target="_blank"
            className="text-[#ADF0D1] hover:underline"
          >
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}