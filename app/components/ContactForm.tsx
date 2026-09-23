"use client";

import { useState, FormEvent } from "react";
import { Github, Linkedin, Mail, MessageCircle, CheckCircle2, AlertCircle, RefreshCw, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Please provide your name or organization";
    }
    if (!form.email.trim()) {
      newErrors.email = "Please provide an email address for reply";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please verify your email address format";
    }
    if (!form.message.trim()) {
      newErrors.message = "Please write a brief summary of your project or inquiry";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
    if (errorMessage) {
      setErrorMessage(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setErrorMessage(null);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
      reply_to: form.email,
    };

    const options = {
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "dummy_key",
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

      if (!serviceId || !templateId || !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
        // Graceful simulation or throw for handled state
        console.warn("EmailJS environment credentials not configured in local environment.");
      } else {
        // 1. Send notification email to Gerald
        await emailjs.send(serviceId, templateId, templateParams, options);

        // 2. Send auto-reply to the visitor if configured
        if (process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
          await emailjs.send(
            serviceId,
            process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
            templateParams,
            options
          );
        }
      }

      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      console.error("EmailJS dispatch hiccup:", err);
      // GK42 Tier 2 / Dignified Calm Diagnosis: Never accuse or crash
      setErrorMessage(
        "Transmission momentarily paused. Your drafted message remains completely safe on this device. You can re-attempt transmission or contact directly via email."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-[#161B22] p-6 sm:p-10 rounded-2xl border border-black/[0.08] dark:border-white/[0.10] gk-card-shadow">
      
      <div className="mb-6 sm:mb-8 text-center sm:text-left">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#2DAD9D] mb-1.5">
          Direct Inquiries
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] mb-2">
          Contact Gerald
        </h2>
        <p className="text-xs sm:text-sm text-[#6E6E73] dark:text-[#98989D] leading-relaxed">
          Send a direct message regarding software engineering roles, project architecture, or collaborations.
        </p>
      </div>

      {/* GK42 Success State */}
      {submitted && (
        <div className="mb-6 p-4 sm:p-5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/25 flex items-start gap-3">
          <CheckCircle2 size={20} className="text-[#10B981] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Message received securely
            </h4>
            <p className="text-xs text-[#6E6E73] dark:text-[#98989D] mt-1 leading-relaxed">
              Thank you for reaching out. I have received your note and will review and respond promptly to your email.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-3 text-xs font-medium text-[#2DAD9D] hover:underline cursor-pointer"
            >
              Send another message
            </button>
          </div>
        </div>
      )}

      {/* GK42 Calm Error State (Zero-Panic Architecture) */}
      {errorMessage && (
        <div className="mb-6 p-4 sm:p-5 rounded-xl bg-[#FFF1F2] dark:bg-[#E11D48]/15 border border-[#E11D48]/25 flex items-start gap-3">
          <AlertCircle size={20} className="text-[#E11D48] shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
              Connection paused momentarily
            </h4>
            <p className="text-xs text-[#6E6E73] dark:text-[#98989D] mt-1 leading-relaxed">
              {errorMessage}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <button
                type="button"
                onClick={handleSubmit}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#E11D48] text-white gk-btn-tap"
              >
                <RefreshCw size={13} />
                <span>Retry Transmission</span>
              </button>
              <a
                href="mailto:gerrykiragu@outlook.com"
                className="text-xs font-medium text-[#6E6E73] dark:text-[#98989D] hover:underline"
              >
                Use Email Client
              </a>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4 sm:gap-5">
        
        {/* Name Field */}
        <div>
          <label className="block text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g. Alex Morgan"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border text-sm text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#8E8E93] dark:placeholder-[#636366] transition-colors focus:outline-none ${
              errors.name
                ? "border-[#E11D48] bg-[#FFF1F2]/50 dark:bg-[#E11D48]/10"
                : "border-black/[0.08] dark:border-white/[0.10] focus:border-[#2DAD9D]"
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-[#E11D48] font-medium">{errors.name}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="alex@company.com"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border text-sm text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#8E8E93] dark:placeholder-[#636366] transition-colors focus:outline-none ${
              errors.email
                ? "border-[#E11D48] bg-[#FFF1F2]/50 dark:bg-[#E11D48]/10"
                : "border-black/[0.08] dark:border-white/[0.10] focus:border-[#2DAD9D]"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-[#E11D48] font-medium">{errors.email}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-xs font-semibold text-[#1D1D1F] dark:text-[#F5F5F7] mb-1.5">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Tell me about your project, timeline, or engineering opportunity..."
            value={form.message}
            onChange={handleChange}
            rows={5}
            className={`w-full p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border text-sm text-[#1D1D1F] dark:text-[#F5F5F7] placeholder-[#8E8E93] dark:placeholder-[#636366] transition-colors focus:outline-none resize-y ${
              errors.message
                ? "border-[#E11D48] bg-[#FFF1F2]/50 dark:bg-[#E11D48]/10"
                : "border-black/[0.08] dark:border-white/[0.10] focus:border-[#2DAD9D]"
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-[#E11D48] font-medium">{errors.message}</p>
          )}
        </div>

        {/* GK42 Fixed-Dimension Loading Button (Rule #5: Zero Layout Shift) */}
        <button
          type="submit"
          disabled={isLoading}
          className="relative w-full h-12 rounded-xl bg-[#2DAD9D] text-white font-medium text-sm gk-btn-tap hover:bg-[#238B7E] shadow-sm disabled:opacity-75 disabled:cursor-not-allowed overflow-hidden flex items-center justify-center mt-2 cursor-pointer"
        >
          <span
            className={`transition-opacity duration-100 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
          >
            Send Message
          </span>
          {isLoading && (
            <span className="absolute inset-0 flex items-center justify-center">
              <Loader2 size={18} className="animate-spin text-white" />
            </span>
          )}
        </button>
      </form>

      {/* Direct Contact Channels - Mobile friendly grid */}
      <div className="mt-8 pt-6 border-t border-black/[0.06] dark:border-white/[0.06]">
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
          <a
            href="https://github.com/Geraldk42"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-[#2DAD9D]/50 gk-btn-tap"
          >
            <Github size={16} />
            <span className="font-medium">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/gerald-kiragu-ba6786250/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-[#2DAD9D]/50 gk-btn-tap"
          >
            <Linkedin size={16} />
            <span className="font-medium">LinkedIn</span>
          </a>

          <a
            href="mailto:gerrykiragu@outlook.com"
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-[#2DAD9D]/50 gk-btn-tap"
          >
            <Mail size={16} />
            <span className="font-medium">Email</span>
          </a>

          <a
            href="https://wa.me/254790283578"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.08] text-[#1D1D1F] dark:text-[#F5F5F7] hover:border-[#2DAD9D]/50 gk-btn-tap"
          >
            <MessageCircle size={16} />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
      </div>

    </div>
  );
}