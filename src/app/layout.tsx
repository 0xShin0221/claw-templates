import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "OpenClaw Config Templates — Ready-to-Use openclaw.json Configs",
    template: "%s — OpenClaw Config Templates",
  },
  description:
    "A curated library of ready-to-use openclaw.json configuration templates for Telegram, Discord, WhatsApp, and more. Get your AI agent running in minutes.",
  openGraph: {
    title: "OpenClaw Config Templates",
    description:
      "Ready-to-use openclaw.json configs for Telegram, Discord, WhatsApp bots and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100`}
      >
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
              <a href="/" className="flex items-center gap-2 font-semibold text-lg">
                <span>🦞</span>
                <span>ClawTemplates</span>
              </a>
              <a
                href="https://github.com/0xShin0221/claw-templates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                GitHub
              </a>
            </div>
          </header>
          <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 w-full">
            {children}
          </main>
          <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-auto">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
              <div className="flex items-center gap-4">
                <a
                  href="https://x.com/0xShin0221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 transition-colors"
                >
                  Built by Shin0221 with AI family
                </a>
                <a
                  href="https://buymeacoffee.com/shin0221"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:text-yellow-400 transition-colors"
                >
                  ☕ Buy me a coffee
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://digdatech.com/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 transition-colors"
                >
                  Need a custom setup? Contact us
                </a>
                <a
                  href="https://github.com/0xShin0221/claw-templates"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-300 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
