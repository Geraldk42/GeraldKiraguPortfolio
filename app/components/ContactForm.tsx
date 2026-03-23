"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(data.error || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white dark:bg-[#121821] p-8 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors">
      {submitted && (
        <p className="text-green-600 dark:text-green-400 mb-4">Thank you! Your message has been sent.</p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-50 dark:bg-[#0B0F14] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#2DAD9D] dark:focus:border-[#2DAD9D] transition-colors"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-50 dark:bg-[#0B0F14] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#2DAD9D] dark:focus:border-[#2DAD9D] transition-colors"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className="p-3 rounded-lg bg-gray-50 dark:bg-[#0B0F14] border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:border-[#2DAD9D] dark:focus:border-[#2DAD9D] transition-colors"
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#2DAD9D] text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <div className="mt-6 flex justify-center gap-6 text-gray-600 dark:text-gray-400 text-sm">
        <a href="mailto:gerrykiragu@outlook.com" className="hover:text-[#2DAD9D]">Email</a>
        <a href="https://github.com/geraldk42" target="_blank" className="hover:text-[#2DAD9D]">GitHub</a>
        <a href="https://linkedin.com/in/gerald-kiragu-ba6786250/" target="_blank" className="hover:text-[#2DAD9D]">LinkedIn</a>
      </div>
    </div>
  );
}