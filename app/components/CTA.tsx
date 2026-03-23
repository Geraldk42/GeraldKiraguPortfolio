"use client";

export default function CTA() {
  return (
    <section className="py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white transition-colors">
          Let’s build something together!! 
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors">
          I'm always open to new opportunities, collaborations, or just a chat about tech.
        </p>

        <a
          href="/contact"
          className="bg-[#2DAD9D] text-black px-8 py-3 rounded-lg font-medium hover:opacity-80 transition"
        >
          Get In Touch
        </a>

      </div>
    </section>
  );
}