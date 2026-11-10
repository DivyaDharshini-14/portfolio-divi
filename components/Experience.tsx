"use client";

export default function Experience() {
  const experiences = [
    {
      role: "Full Stack Laravel Developer",
      company: "Appstronaut IT Solution",
      location: "Bangalore, Karnataka",
      period: "Aug 2025 – Present",
      status: "Current Role",
      summary:
        "Leading the development of core web applications and RESTful API ecosystems using PHP, Laravel, and MySQL, bridging mobile and web clients with secure, scalable services.",
      achievements: [
        "Architected and deployed high-performance RESTful APIs supporting business-critical workflows for web and mobile apps.",
        "Engineered robust security with Laravel Sanctum authentication and granular Role-Based Access Control (RBAC).",
        "Designed and optimized MySQL schemas, complex relationships, and query performance under production loads.",
        "Integrated third-party APIs and external web services seamlessly to automate core company operations.",
        "Constructed intuitive administrative interfaces using React.js, Tailwind CSS, and Laravel Blade/Inertia.",
        "Authored comprehensive API documentation with Swagger (OpenAPI) and conducted rigorous Postman automated test suites.",
      ],
      skills: ["PHP", "Laravel", "MySQL", "React.js", "Tailwind CSS", "Sanctum", "Swagger", "Postman", "REST APIs"],
    },
    {
      role: "Web Developer",
      company: "Aaran Infotech",
      location: "Tiruppur, Tamil Nadu",
      period: "May 2025 – Jul 2025",
      status: "Completed",
      summary:
        "Engineered business accounting software solutions for garment manufacturing enterprises using PHP, Laravel, Livewire, MySQL, and Tailwind CSS.",
      achievements: [
        "Developed financial accounting modules including journal entries, ledgers, inventory tracking, and client billing.",
        "Implemented Eloquent ORM data relationships, server-side validations, and reliable backend CRUD infrastructure.",
        "Enhanced application responsiveness and dynamic workflows with reactive Laravel Livewire components.",
        "Identified and resolved complex business logic bugs, improving overall application uptime and responsiveness.",
        "Conducted end-to-end API testing and debugging with Postman to guarantee data integrity across financial transactions.",
        "Collaborated with senior software architects utilizing Git and GitHub workflows, participating in rigorous code reviews.",
      ],
      skills: ["PHP", "Laravel", "Livewire", "MySQL", "Tailwind CSS", "Eloquent ORM", "Git", "Postman"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative border-t border-slate-800/60 bg-[#070b14]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400">
            Career Journey
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience & Milestones
          </h2>
          <p className="mt-3 text-base text-slate-400">
            A track record of engineering production web services, enterprise accounting software, 
            and scalable RESTful architectures.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 relative">
          {/* Vertical connecting line */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[27px] w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-slate-800" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex flex-col md:flex-row md:items-start gap-8">
                {/* Node marker */}
                <div className="hidden md:flex shrink-0 w-14 h-14 rounded-2xl bg-slate-900 border-2 border-indigo-500 items-center justify-center shadow-lg shadow-indigo-500/20 z-10">
                  <span className="font-mono text-xs font-bold text-indigo-400">
                    0{idx + 1}
                  </span>
                </div>

                {/* Experience Card */}
                <div className="flex-1 rounded-3xl bg-slate-900/40 border border-slate-800/90 p-7 sm:p-9 hover:border-slate-700 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-800/80">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-2xl font-extrabold text-white">
                          {exp.role}
                        </h3>
                        {exp.status === "Current Role" && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-base font-semibold text-indigo-400 flex items-center gap-2">
                        <span>{exp.company}</span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 text-sm font-normal">{exp.location}</span>
                      </div>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 font-mono text-xs text-slate-300">
                      {exp.period}
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-slate-300 font-medium leading-relaxed">
                    {exp.summary}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <p className="text-xs uppercase font-mono tracking-wider text-slate-400">
                      Key Impact & Responsibilities:
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, aIdx) => (
                        <li key={aIdx} className="flex items-start text-xs sm:text-sm text-slate-400 leading-relaxed">
                          <span className="text-indigo-400 mr-2.5 mt-0.5 font-bold">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills badges */}
                  <div className="mt-8 pt-5 border-t border-slate-800/80 flex flex-wrap gap-2">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800/60 border border-slate-700/40 rounded-md"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

