"use client";

import { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

function subscribeTheme(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getThemeSnapshot(): "light" | "dark" {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): "light" {
  return "light";
}

const emptySubscribe = () => () => {};

export default function ThemeToggle() {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerSnapshot
  );

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    const nextTheme = isDark ? "light" : "dark";
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", nextTheme);
  };

  if (!isClient) {
    return <div className="w-9 h-9 rounded-xl border border-black/[0.08] dark:border-white/[0.10] bg-white dark:bg-[#161B22]" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-9 h-9 rounded-xl bg-white dark:bg-[#161B22] text-[#1D1D1F] dark:text-[#F5F5F7] border border-black/[0.08] dark:border-white/[0.10] hover:border-[#2DAD9D]/50 dark:hover:border-[#2DAD9D]/50 flex items-center justify-center gk-btn-tap gk-card-shadow cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun size={18} className="text-[#2DAD9D]" /> : <Moon size={18} className="text-[#1D1D1F]" />}
    </button>
  );
}
