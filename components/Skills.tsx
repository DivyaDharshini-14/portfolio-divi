"use client";

import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const skillCategories = [
    {
      id: "backend",
      name: "Backend & Core",
      skills: [
        { name: "PHP", level: "Expert", desc: "Core language, Modern PHP 8+, Object-Oriented Architecture" },
        { name: "Laravel", level: "Expert", desc: "Eloquent ORM, Service Providers, Middleware, Artisan, Events" },
        { name: "Livewire", level: "Advanced", desc: "Full-stack reactive components without writing complex JS" },
        { name: "MVC Architecture", level: "Expert", desc: "Model-View-Controller design pattern separation of concerns" },
        { name: "OOP Concepts", level: "Expert", desc: "Encapsulation, Inheritance, Polymorphism & Clean Code Principles" },
      ],
    },
    {
      id: "frontend",
      name: "Frontend & UI",
      skills: [
        { name: "React.js", level: "Advanced", desc: "Modern functional components, Hooks, State management, SPAs" },
        { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/Await, DOM manipulation, Fetch API, modern syntax" },
        { name: "Tailwind CSS", level: "Expert", desc: "Utility-first responsive layouts, custom design systems" },
        { name: "Alpine.js", level: "Advanced", desc: "Lightweight reactive micro-interactions in Laravel templates" },
        { name: "Bootstrap & CSS", level: "Advanced", desc: "Flexbox, CSS Grid, mobile-first responsive architecture" },
      ],
    },
    {
      id: "database",
      name: "Database & Data",
      skills: [
        { name: "MySQL", level: "Expert", desc: "Relational modeling, indexing, foreign keys, complex joins" },
        { name: "Eloquent ORM", level: "Expert", desc: "Relationships (1:1, 1:N, N:M, Polymorphic), query optimization" },
        { name: "Database Migrations", level: "Expert", desc: "Schema versioning, seeders, transactions, rollbacks" },
        { name: "Multi-Tenant DBs", level: "Advanced", desc: "Dynamic connection switching, secure tenant data isolation" },
      ],
    },
    {
      id: "api",
      name: "API & Security",
      skills: [
        { name: "RESTful APIs", level: "Expert", desc: "JSON responses, HTTP status codes, versioning, pagination" },
        { name: "Laravel Sanctum", level: "Expert", desc: "SPA authentication, mobile API tokens, secure cookies" },
        { name: "JWT Auth", level: "Advanced", desc: "JSON Web Tokens, stateless authentication & refresh cycles" },
        { name: "OpenAPI (Swagger)", level: "Advanced", desc: "Standardized API schemas, interactive documentation" },
        { name: "RBAC", level: "Expert", desc: "Role-Based Access Control, gates, policies, permissions" },
      ],
    },
    {
      id: "devops",
      name: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub", level: "Expert", desc: "Branching, PRs, version control, conflict resolution" },
        { name: "Postman", level: "Expert", desc: "API testing, automated test collections, environment variables" },
        { name: "cPanel & Hostinger", level: "Advanced", desc: "Domain setup, SSL certificates, deployment scripts" },
        { name: "InfinityFree", level: "Advanced", desc: "Cloud deployment testing & staging environments" },
      ],
    },
  ];

  const displayedCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative border-t border-slate-800/60 bg-[#070b14]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400">
            Technical Arsenal
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Specialized Skills & Production Tooling
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            Battle-tested technologies utilized across production applications, enterprise accounting tools, 
            and scalable multi-tenant platforms.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === "all"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Technologies
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="mt-14 space-y-10">
          {displayedCategories.map((cat) => (
            <div key={cat.id} className="relative">
              <h3 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                {cat.name}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group relative rounded-xl bg-slate-900/40 border border-slate-800/80 p-5 hover:border-indigo-500/40 transition-all duration-300 hover:bg-slate-900/70"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 border border-indigo-800/40 text-indigo-300">
                        {skill.level}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

