import React, { useMemo } from 'react';
import { Github, Tag } from 'lucide-react';
import { projects } from '@/data/projects';

const GitProjectsListSection = () => {
  const allProjects = useMemo(() => projects, []);

  return (
    <section id="git-projects" className="relative overflow-hidden bg-gradient-to-b from-[#07070d] to-[#050508] px-6 py-24 md:px-10">
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            All <span className="text-cyan-400">Git Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/70">
            Full repository list from your GitHub projects, shown in a compact format for quick scanning.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allProjects.map((project, index) => (
            <article key={project.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-cyan-300/90">
                    <Tag className="h-3.5 w-3.5" />
                    {project.category}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {index + 1}. {project.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-white/60">
                  {project.tier}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-white/70">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techs.slice(0, 4).map((tech) => (
                  <span key={tech} className="rounded-full border border-white/10 bg-black/20 px-2 py-1 text-[11px] text-white/70">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <a
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-cyan-300 hover:text-cyan-200"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </div>

              {project.renameSuggestion && (
                <p className="mt-4 text-xs text-amber-300/90">Rename suggestion: {project.renameSuggestion}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GitProjectsListSection;