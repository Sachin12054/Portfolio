import React, { useMemo, useState } from 'react';
import { Github, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

const ProjectsSection = () => {
  const [showOther, setShowOther] = useState(false);

  const featuredProjects = useMemo(() => projects.filter((project) => project.tier === 'featured'), []);
  const midLevelProjects = useMemo(() => projects.filter((project) => project.tier === 'mid'), []);
  const otherProjects = useMemo(() => projects.filter((project) => project.tier === 'other'), []);

  return (
    <section id="projects" className="relative overflow-hidden bg-gradient-to-b from-[#0a0a14] to-[#08080f] px-6 py-24 md:px-10">
      <div className="absolute -top-16 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Portfolio <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-white/70">
            Curated for recruiters: flagship AI projects first, then mid-level full-stack work, followed by compact side builds.
          </p>
        </div>

        <div className="mb-14">
          <h3 className="mb-6 text-2xl font-semibold text-white">Featured Projects</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.slice(0, 6).map((project) => (
              <article key={project.id} className="glass-card rounded-2xl border border-white/10 p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                  <span className="rounded-full bg-cyan-500/15 px-3 py-1 text-xs text-cyan-300">{project.category}</span>
                </div>

                <p className="text-sm leading-relaxed text-white/75">{project.description}</p>

                {project.highlights && project.highlights.length > 0 && (
                  <ul className="mt-4 space-y-2 text-sm text-white/80">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>- {highlight}</li>
                    ))}
                  </ul>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/70">
                      {tech}
                    </span>
                  ))}
                </div>

                {project.renameSuggestion && (
                  <p className="mt-4 text-xs text-amber-300/90">Suggested repo rename: {project.renameSuggestion}</p>
                )}

                <div className="mt-6 flex gap-3">
                  <Button asChild size="sm" className="bg-cyan-600 text-white hover:bg-cyan-700">
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h3 className="mb-6 text-2xl font-semibold text-white">Mid-Level Projects</h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {midLevelProjects.map((project) => (
              <article key={project.id} className="rounded-xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                <p className="mt-2 text-sm text-white/70">{project.description}</p>
                <div className="mt-4 flex gap-3">
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-300 hover:text-cyan-200">
                    Source
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={() => setShowOther((prev) => !prev)}
            className="mb-4 flex items-center text-lg font-semibold text-white hover:text-cyan-300"
          >
            Other Projects
            {showOther ? <ChevronUp className="ml-2 h-5 w-5" /> : <ChevronDown className="ml-2 h-5 w-5" />}
          </button>

          {showOther && (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {otherProjects.map((project) => (
                <article key={project.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <h4 className="text-base font-medium text-white">{project.title}</h4>
                  <p className="mt-1 text-xs text-white/65">{project.description}</p>
                  {project.renameSuggestion && (
                    <p className="mt-2 text-xs text-amber-300/90">Rename: {project.renameSuggestion}</p>
                  )}
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-cyan-300 hover:text-cyan-200"
                  >
                    Open Repo
                  </a>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
