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
    <html lang="en" suppressHydrationWarning>
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
      <body className={`${inter.className} bg-white dark:bg-[#0B0F14] text-gray-900 dark:text-white transition-colors duration-300`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
