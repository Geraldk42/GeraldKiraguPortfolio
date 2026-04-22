"use client";

const techs = [
  "C#",
  ".NET",
  "Blazor",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "PHP",
  "Firebase",
  "Docker",
  "Supabase",
  "Tailwind",
  "Bootstrap",
  "React",
  "Next.js",
  "Java"

];

export default function TechStack() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Tech Stack
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Technologies I use to build modern applications
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#121821] border border-gray-200 dark:border-gray-800 rounded-xl py-6 hover:border-[#2DAD9D] dark:hover:border-[#2DAD9D] hover:scale-105 transition-all shadow-sm dark:shadow-none"
            >
              <p className="font-medium text-gray-800 dark:text-gray-200">{tech}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}