import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Divyadharshini N | Full Stack Laravel Developer",
  description:
    "Portfolio of Divyadharshini N - Full Stack Developer specializing in PHP, Laravel, MySQL, RESTful APIs, and modern frontend technologies.",
  keywords: [
    "Divyadharshini N",
    "Full Stack Developer",
    "Laravel Developer",
    "PHP Developer",
    "React Developer",
    "Bangalore",
    "Software Engineer",
  ],
  authors: [{ name: "Divyadharshini N", url: "https://dharshini.pages.dev" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}

