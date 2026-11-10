"use client";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows & Grid */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-indigo-600/25 via-purple-600/15 to-cyan-500/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-10 -left-40 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full" />
        
        {/* Subtle dot matrix overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-lg shadow-black/40 mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-300">
                Available for New Roles & High-Impact Projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Divyadharshini N
              </span>
            </h1>

            <div className="mt-4 text-xl sm:text-2xl font-bold text-slate-300 flex items-center gap-2">
              <span>Full Stack Laravel Developer</span>
              <span className="text-indigo-400">•</span>
              <span className="text-slate-400 font-medium text-lg">Bangalore, IN</span>
            </div>

            <p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl font-normal">
              Specialized in engineering robust backend architectures, scalable multi-tenant platforms, 
              and enterprise RESTful APIs using <strong className="text-slate-200 font-semibold">PHP, Laravel, and MySQL</strong>. 
              Equipped with deep expertise in <strong className="text-slate-200 font-semibold">React.js, Livewire, and Tailwind CSS</strong> to 
              deliver seamless, full-lifecycle digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Explore Featured Work</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 border border-slate-700/80 hover:border-slate-500 hover:text-white hover:bg-slate-800/80 backdrop-blur-md shadow-lg transition-all"
              >
                <span>Get in Touch</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="https://dharshini.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-400 hover:text-indigo-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Live Portfolio Site</span>
              </a>
            </div>

            {/* Micro Quick Tech Stack Badges */}
            <div className="mt-10 pt-6 border-t border-slate-800/80 w-full flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase font-mono tracking-wider text-slate-400">Core Stack:</span>
              {["PHP", "Laravel", "MySQL", "RESTful APIs", "React.js", "Livewire", "Tailwind CSS"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium text-indigo-300 bg-indigo-950/40 border border-indigo-800/50 rounded-lg shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Code & Architecture Bento Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-500/30 blur-lg opacity-70 group-hover:opacity-100 transition duration-500" />

              <div className="relative rounded-2xl bg-[#0d1322]/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-xl">
                {/* Code Window Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400">DivyaDharshini.service.php</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    PHP 8.2 • Laravel 11
                  </span>
                </div>

                {/* Simulated High-End Code Snippet */}
                <div className="mt-4 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
                  <p className="text-slate-400">{"// Developer Profile Definition"}</p>
                  <p className="text-purple-400">namespace <span className="text-slate-200">App\Engineers;</span></p>
                  <br />
                  <p className="text-indigo-400">class <span className="text-cyan-300 font-bold">Divyadharshini</span> <span className="text-slate-400">implements</span> <span className="text-amber-300">FullStackEngineer</span> &#123;</p>
                  <div className="pl-4 border-l border-slate-800/80 ml-1 space-y-1 my-1">
                    <p><span className="text-purple-400">public string</span> <span className="text-cyan-200">$location</span> = <span className="text-emerald-300">&quot;Bangalore, Karnataka&quot;</span>;</p>
                    <p><span className="text-purple-400">public int</span> <span className="text-cyan-200">$experienceYears</span> = <span className="text-amber-400">1</span>;</p>
                    <p><span className="text-purple-400">public array</span> <span className="text-cyan-200">$specialties</span> = [</p>
                    <p className="pl-4 text-emerald-300">&quot;Multi-Tenant SaaS&quot;, &quot;Clean REST APIs&quot;,</p>
                    <p className="pl-4 text-emerald-300">&quot;Sanctum RBAC&quot;, &quot;ERP & Accounting Systems&quot;,</p>
                    <p className="pl-4 text-emerald-300">&quot;React & Livewire Dynamic Interfaces&quot;</p>
                    <p>];</p>
                    <br />
                    <p><span className="text-purple-400">public function</span> <span className="text-amber-300">buildReliableSoftware</span>(): <span className="text-cyan-300">Deployment</span> &#123;</p>
                    <p className="pl-4 text-slate-300"><span className="text-purple-400">return</span> <span className="text-indigo-400">$this</span>-&gt;<span className="text-cyan-300">collaborateAndDeliver</span>([</p>
                    <p className="pl-8 text-emerald-300">&apos;code_quality&apos; =&gt; &apos;clean &amp; maintainable&apos;,</p>
                    <p className="pl-8 text-emerald-300">&apos;performance&apos; =&gt; &apos;optimized MySQL queries&apos;,</p>
                    <p className="pl-8 text-emerald-300">&apos;documentation&apos; =&gt; &apos;OpenAPI / Swagger&apos;,</p>
                    <p className="pl-4">]);</p>
                    <p>&#125;</p>
                  </div>
                  <p className="text-indigo-400">&#125;</p>
                </div>

                {/* Live Bento Stats Row */}
                <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-3 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-xl font-extrabold text-white">1+</div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Years Exp</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-xl font-extrabold text-indigo-400">5+</div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Key Projects</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-xl font-extrabold text-emerald-400">100%</div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Full Stack</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

