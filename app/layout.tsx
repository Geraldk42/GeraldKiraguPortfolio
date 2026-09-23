import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "./components/Navbar";
import Script from "next/script";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gerald Portfolio',
  description: 'Software Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen bg-[#F5F5F7] dark:bg-[#0D1117] text-[#1D1D1F] dark:text-[#F5F5F7] selection:bg-[#2DAD9D]/20 selection:text-[#2DAD9D] transition-colors duration-200 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
