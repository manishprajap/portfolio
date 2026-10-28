import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maneesh Prajapati | Full-Stack Developer",
  description: "Maneesh Prajapati, full-stack web developer from Lucknow. Laravel, Next.js and Ionic React.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" />
      </head>
      <body>{children}</body>
    </html>
  );
}