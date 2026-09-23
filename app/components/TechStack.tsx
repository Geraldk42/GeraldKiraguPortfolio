"use client";

const techs = [
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "C#",
  ".NET",
  "Blazor",
  "PHP",
  "Java",
  "Supabase",
  "MongoDB",
  "SQL",
  "Firebase",
  "Docker",
  "flutter",
];

export default function TechStack() {
  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">
        
      

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-3">
          Technologies & Ecosystem
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#6E6E73] dark:text-[#98989D] max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed">
          Languages and frameworks I leverage to build reliable products.
        </p>

        {/* Grid - Fully Mobile Friendly */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#161B22] border border-black/[0.08] dark:border-white/[0.10] rounded-2xl py-4 sm:py-5 px-3 sm:px-4 hover:border-[#2DAD9D]/60 dark:hover:border-[#2DAD9D]/60 transition-colors duration-120 gk-card-shadow flex items-center justify-center min-h-[58px]"
            >
              <span className="text-xs sm:text-sm font-medium text-[#1D1D1F] dark:text-[#F5F5F7] tracking-tight text-center">
                {tech}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}