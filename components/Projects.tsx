"use client";

import { useState } from "react";

interface Project {
  title: string;
  category: "enterprise" | "fullstack" | "saas";
  subtitle: string;
  description: string;
  highlights: string[];
  tags: string[];
  featured: boolean;
  type: string;
  gradient: string;
  githubUrl?: string;
  liveUrl?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      title: "Waqin Multi-Tenant Business Platform",
      category: "enterprise",
      type: "Professional Enterprise Platform",
      subtitle: "Multi-tenant cloud platform powering gyms, boutiques, optical stores, and retail businesses.",
      description:
        "Architected and developed modular backend services with isolated tenant-specific database connections to guarantee high data security. Engineered RESTful APIs powering both web dashboards and mobile applications.",
      highlights: [
        "Dynamic tenant-specific database connection switching & secure data isolation",
        "Automated order management, invoicing, customer billing, and employee tracking",
        "Comprehensive REST APIs connecting mobile client apps and web administrative consoles",
        "Role-Based Access Control (RBAC) ensuring fine-grained tenant privilege policies",
      ],
      tags: ["PHP", "Laravel", "MySQL", "REST APIs", "Multi-Tenancy", "RBAC", "Swagger"],
      featured: true,
      gradient: "from-blue-600/20 via-indigo-600/15 to-purple-600/20",
      liveUrl: "https://dharshini.pages.dev",
      githubUrl: "https://github.com/DivyaDharshini-14",
    },
    {
      title: "Smart Local Mart (S-Mart) – Q-Commerce",
      category: "fullstack",
      type: "Full Stack Quick Commerce",
      subtitle: "High-speed local grocery & essentials delivery platform with dual customer & admin portals.",
      description:
        "Built a responsive e-commerce web application with real-time stock management, interactive shopping cart, order tracking, and administrative analytics dashboards.",
      highlights: [
        "Full stack architecture using Laravel backend with React.js & Inertia.js frontend",
        "Comprehensive inventory management system with automated low-stock notifications",
        "Optimized MySQL relational database schema for high-throughput order processing",
        "Mobile-first responsive design styled with Tailwind CSS",
      ],
      tags: ["Laravel", "React.js", "Inertia.js", "MySQL", "Tailwind CSS", "REST APIs"],
      featured: true,
      gradient: "from-emerald-600/20 via-teal-600/15 to-cyan-600/20",
      liveUrl: "https://dharshini.pages.dev",
      githubUrl: "https://github.com/DivyaDharshini-14",
    },
    {
      title: "Enterprise Accounting & ERP Engine",
      category: "enterprise",
      type: "Garment Manufacturing ERP",
      subtitle: "Comprehensive financial accounting software tailored for garment manufacturing enterprises.",
      description:
        "Engineered backend modules and reactive Livewire components handling double-entry bookkeeping, ledger generation, sales/purchase management, and real-time financial reporting.",
      highlights: [
        "Built journal entries, general ledgers, sales, purchases, and expense workflows",
        "Integrated Eloquent ORM with optimized MySQL queries for heavy accounting queries",
        "Reactive, SPA-like interfaces using Laravel Livewire and Tailwind CSS without complex JS",
        "Rigorous API & calculation testing with Postman to prevent accounting inaccuracies",
      ],
      tags: ["PHP", "Laravel", "Livewire", "MySQL", "Tailwind CSS", "REST APIs", "Git"],
      featured: true,
      gradient: "from-amber-600/20 via-orange-600/15 to-indigo-600/20",
      liveUrl: "https://dharshini.pages.dev",
      githubUrl: "https://github.com/DivyaDharshini-14",
    },
    {
      title: "Healthcare ClinicOS (User & Admin Portals)",
      category: "saas",
      type: "Healthcare Management System",
      subtitle: "Digital clinic suite for patient scheduling, medical record keeping, and doctor consultation workflows.",
      description:
        "Built a healthcare platform featuring separate patient appointment booking and administrator management dashboards, backed by secure RESTful APIs for web and mobile clients.",
      highlights: [
        "Multi-role RBAC for doctors, clinic staff, receptionists, and patients",
        "Secure patient records, appointment booking, and doctor availability calendars",
        "Clean RESTful APIs for third-party mobile health application integration",
        "Fast, lightweight UI built with Tailwind CSS and Alpine.js micro-interactions",
      ],
      tags: ["Laravel", "MySQL", "Tailwind CSS", "Alpine.js", "Sanctum Auth", "RBAC"],
      featured: false,
      gradient: "from-rose-600/20 via-pink-600/15 to-indigo-600/20",
      liveUrl: "https://dharshini.pages.dev",
      githubUrl: "https://github.com/DivyaDharshini-14",
    },
    {
      title: "Mindhive – E-Learning Admin Platform",
      category: "saas",
      type: "LMS & Course Admin Suite",
      subtitle: "Administrative backend & curriculum distribution platform for e-learning organizations.",
      description:
        "Developed backend services and administrative portals for course creation, multimedia content distribution, learner enrollments, and progression tracking.",
      highlights: [
        "Course syllabus management with multi-tier module structures",
        "Learner access control, student enrollment verification, and progress monitoring",
        "Optimized database indexing for high concurrent query performance",
        "Structured MVC architecture adhering to clean OOP design principles",
      ],
      tags: ["Laravel", "MySQL", "Bootstrap", "CSS", "MVC Architecture", "OOP"],
      featured: false,
      gradient: "from-violet-600/20 via-purple-600/15 to-indigo-600/20",
      liveUrl: "https://dharshini.pages.dev",
      githubUrl: "https://github.com/DivyaDharshini-14",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400">
              Featured Work
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Applications & Architecture
            </h2>
            <p className="mt-3 text-base text-slate-400">
              A curated collection of enterprise multi-tenant systems, high-speed quick commerce platforms, 
              and financial software.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-900/80 border border-slate-800 rounded-full backdrop-blur-md self-start md:self-auto">
            {[
              { id: "all", label: "All Projects" },
              { id: "enterprise", label: "Enterprise & ERP" },
              { id: "fullstack", label: "Full Stack & E-Com" },
              { id: "saas", label: "SaaS & Systems" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeFilter === f.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative rounded-3xl bg-slate-900/40 border border-slate-800/90 overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between ${
                project.featured && idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Top ambient glow banner */}
              <div
                className={`h-3 w-full bg-gradient-to-r ${
                  idx % 3 === 0
                    ? "from-indigo-500 via-purple-500 to-cyan-500"
                    : idx % 3 === 1
                    ? "from-emerald-500 via-teal-500 to-cyan-500"
                    : "from-amber-500 via-orange-500 to-rose-500"
                }`}
              />

              <div className="p-7 sm:p-9 flex flex-col flex-1 justify-between">
                <div>
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-800 text-indigo-300 border border-slate-700/60">
                      {project.type}
                    </span>
                    {project.featured && (
                      <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-0.5 rounded-full">
                        ★ Highlight Project
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-slate-300">
                    {project.subtitle}
                  </p>

                  <p className="mt-4 text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="mt-6 space-y-2">
                    <p className="text-xs uppercase font-mono tracking-wider text-slate-400">
                      Architectural Highlights:
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start text-xs sm:text-sm text-slate-300">
                          <span className="text-indigo-400 mr-2.5 mt-0.5">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer with Tags & Actions */}
                <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 shrink-0">
                    <a
                      href={project.githubUrl || "https://github.com/DivyaDharshini-14"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-700/90 rounded-lg border border-slate-700 transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl || "https://dharshini.pages.dev"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
                    >
                      <span>Overview</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
