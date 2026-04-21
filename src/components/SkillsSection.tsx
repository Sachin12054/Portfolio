import React from 'react';

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C']
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'React', 'React Native', 'Tailwind CSS']
  },
  {
    title: 'App Development',
    items: ['React Native', 'Expo', 'Mobile UI', 'Firebase', 'Cross-platform Apps']
  },
  {
    title: 'Backend',
    items: ['Flask', 'Node.js (Basic)', 'REST APIs']
  },
  {
    title: 'AI / ML',
    items: ['TensorFlow', 'Scikit-learn', 'BERT', 'NLP']
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Firebase', 'Docker', 'Tesseract OCR']
  },
  {
    title: 'Core Concepts',
    items: ['DSA', 'Operating Systems', 'DBMS', 'Computer Networks']
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-gradient-to-b from-[#090912] to-[#07070d] px-6 py-24 md:px-10">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Skills <span className="text-cyan-400">Stack</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Updated with the technologies and concepts actively used in my projects.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="glass-card rounded-2xl p-6">
              <h3 className="mb-4 text-lg font-semibold text-white">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
