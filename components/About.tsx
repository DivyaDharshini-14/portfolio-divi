"use client";

export default function About() {
  const pillars = [
    {
      title: "Backend & API Architecture",
      description:
        "Specialized in PHP and Laravel development, implementing clean RESTful API standards, Laravel Sanctum, JWT, and granular Role-Based Access Control (RBAC).",
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      tag: "Core Backend",
    },
    {
      title: "Multi-Tenant & Business Workflows",
      description:
        "Hands-on experience architecting multi-tenant databases with tenant-specific connections, enterprise accounting ledgers, and order management platforms.",
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      tag: "Scalability",
    },
    {
      title: "Modern UI & Mobile-Ready Interfaces",
      description:
        "Crafting responsive web applications and admin dashboards using React.js, Livewire, Tailwind CSS, and Alpine.js, collaborating closely with mobile teams.",
      icon: (
        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      tag: "Frontend & Full Stack",
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400">
            About Me
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Clean Backends & Scalable Business Software
          </h2>
          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            I am a Full Stack Developer based in Bangalore with over a year of hands-on professional 
            experience building production-ready applications. My focus lies in creating reliable, high-performance 
            backend systems, integrating complex APIs, and architecting database structures that power seamless business operations.
          </p>
        </div>

        {/* Bento Grid Features */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-slate-900/40 border border-slate-800/80 p-7 hover:border-slate-700/80 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-inner">
                      {pillar.icon}
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/40">
                      {pillar.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-medium text-indigo-400">
                  <span>Learn more in projects below</span>
                  <svg className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
