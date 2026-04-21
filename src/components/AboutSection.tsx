import React from 'react';
import { Brain, Database, Network, Trophy } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-b from-[#0b0c18] to-[#090a12] px-6 py-24 md:px-10">
      <div className="absolute left-0 top-0 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Professional <span className="text-cyan-400">Summary</span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg">
            Computer Science (AI) student focused on building real-world AI-powered and full-stack applications.
            Strong in Data Structures, Machine Learning, and scalable backend systems. Passionate about solving
            practical problems using AI, NLP, and data-driven systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-7">
            <h3 className="mb-4 flex items-center text-xl font-semibold text-white">
              <Trophy className="mr-2 h-5 w-5 text-cyan-400" />
              Achievements
            </h3>
            <ul className="space-y-3 text-white/80">
              <li>Built an AI-based IDS with 98.83% accuracy.</li>
              <li>Developed multiple full-stack and AI projects across web and app domains.</li>
              <li>Strong problem-solving foundation in DSA and core CS subjects.</li>
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-7">
            <h3 className="mb-4 flex items-center text-xl font-semibold text-white">
              <Brain className="mr-2 h-5 w-5 text-fuchsia-400" />
              Core Focus
            </h3>
            <div className="grid grid-cols-1 gap-3 text-sm text-white/80 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">AI + NLP Systems</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">Scalable Backend APIs</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">Data-Driven Workflows</div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">Production-Oriented Full Stack</div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-7">
            <h3 className="mb-4 flex items-center text-xl font-semibold text-white">
              <Database className="mr-2 h-5 w-5 text-emerald-400" />
              Foundations
            </h3>
            <p className="text-white/80">
              DSA, Operating Systems, DBMS, and Computer Networks form the backbone of my implementation approach,
              helping me design efficient and reliable software.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-7">
            <h3 className="mb-4 flex items-center text-xl font-semibold text-white">
              <Network className="mr-2 h-5 w-5 text-blue-400" />
              Current Direction
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>AI-powered receipt scanner for mobile workflows</li>
              <li>IDS real-time deployment and monitoring improvements</li>
              <li>Building full-stack AI apps for production readiness</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
