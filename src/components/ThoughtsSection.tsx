import React from 'react';
import { Github, Activity, Code2, FolderGit2 } from 'lucide-react';

const ThoughtsSection = () => {
  return (
    <section id="work-now" className="relative overflow-hidden bg-gradient-to-b from-[#08080f] to-[#06060b] px-6 py-24 md:px-10">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            What I'm <span className="text-cyan-400">Working On</span>
          </h2>
        </div>

        <div className="mb-14 grid gap-5 md:grid-cols-3">
          <article className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">AI-powered Receipt Scanner</h3>
            <p className="mt-2 text-sm text-white/75">Improving OCR + category intelligence in a React Native workflow.</p>
          </article>

          <article className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">IDS Real-time Deployment</h3>
            <p className="mt-2 text-sm text-white/75">Moving from model performance to reliable, monitorable real-time operation.</p>
          </article>

          <article className="glass-card rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white">Full-stack AI Applications</h3>
            <p className="mt-2 text-sm text-white/75">Building production-oriented AI products with practical user outcomes.</p>
          </article>
        </div>

        <div className="rounded-2xl border border-white/10 bg-black/40 p-7 backdrop-blur-sm">
          <h3 className="mb-5 text-2xl font-semibold text-white">GitHub Snapshot</h3>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center text-cyan-300">
                <FolderGit2 className="mr-2 h-4 w-4" /> Repo Count
              </div>
              <p className="mt-2 text-sm text-white/75">Active projects across AI, web, and system domains.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center text-cyan-300">
                <Activity className="mr-2 h-4 w-4" /> Contributions
              </div>
              <p className="mt-2 text-sm text-white/75">Consistent development through practical builds and experiments.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center text-cyan-300">
                <Code2 className="mr-2 h-4 w-4" /> Top Languages
              </div>
              <p className="mt-2 text-sm text-white/75">Python, JavaScript, TypeScript, and C.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="flex items-center text-cyan-300">
                <Github className="mr-2 h-4 w-4" /> Profile
              </div>
              <a
                href="https://github.com/Sachin12054"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm text-white hover:text-cyan-300"
              >
                github.com/Sachin12054
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThoughtsSection;
