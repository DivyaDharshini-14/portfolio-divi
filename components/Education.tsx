"use client";

export default function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science (M.Sc.)",
      institution: "Bharathiar University",
      location: "Tiruppur, Tamil Nadu",
      period: "Sep 2021 – May 2023",
      gradeBadge: "Postgraduate Degree",
      highlights: [
        "Advanced Software Engineering & Distributed Architecture",
        "Object-Oriented System Design (OOPS) & Design Patterns",
        "Relational Database Systems, Query Optimization & Data Modeling",
        "Applied Research in Web Technologies and Scalable Algorithms",
      ],
      icon: (
        <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      ),
    },
    {
      degree: "Bachelor of Science in Information Technology (B.Sc.)",
      institution: "Bharathiar University",
      location: "Tiruppur, Tamil Nadu",
      period: "2018 – 2021",
      gradeBadge: "Undergraduate Degree",
      highlights: [
        "Fundamental Computer Science Principles & Network Protocols",
        "Relational Database Management (RDBMS) & MySQL Foundations",
        "Web Application Development Lifecycle, PHP & Web Standards",
        "Data Structures, Flowcharts & Computational Logic",
      ],
      icon: (
        <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="education" className="py-24 relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400">
            Academic Foundation
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Academic Background
          </h2>
          <p className="mt-3 text-base text-slate-400">
            Strong theoretical computer science foundation providing the groundwork for clean architecture, 
            algorithmic efficiency, and robust software engineering.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl bg-slate-900/40 border border-slate-800/90 p-8 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700/60 shadow-inner">
                    {edu.icon}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-800 text-indigo-300 border border-slate-700/60">
                    {edu.gradeBadge}
                  </span>
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-white leading-snug">
                  {edu.degree}
                </h3>
                <div className="mt-2 text-sm font-semibold text-indigo-400">
                  {edu.institution}
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  {edu.location} • <span className="font-mono text-slate-300">{edu.period}</span>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <p className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-3">
                    Core Coursework & Competencies:
                  </p>
                  <ul className="space-y-2">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start text-xs sm:text-sm text-slate-400">
                        <span className="text-indigo-400 mr-2 font-bold">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

