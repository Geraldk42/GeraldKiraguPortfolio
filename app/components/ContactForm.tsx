"use client";

import { useState, FormEvent } from "react";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

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

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      reply_to: form.email,
    };

    const options = {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    };

    try {
      // 1. Send notification email to Gerald
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        options
      );

      // 2. Send auto-reply to the visitor
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID!,
        templateParams,
        options
      );

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.log("EmailJS Error:", err, err?.text);
      alert(`Something went wrong. ${err?.text || 'Please try again later.'}`);
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
  );
}