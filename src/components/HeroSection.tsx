
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon, Download, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const imageCardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleImageMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!imageCardRef.current || !glareRef.current) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    const rotateY = (px - 0.5) * 16;
    const rotateX = (0.5 - py) * 14;
    const moveX = (px - 0.5) * 10;
    const moveY = (py - 0.5) * 10;

    imageCardRef.current.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0)`;

    glareRef.current.style.opacity = '1';
    glareRef.current.style.background = `radial-gradient(circle at ${Math.round(px * 100)}% ${Math.round(py * 100)}%, rgba(255, 255, 255, 0.3) 0%, rgba(34, 211, 238, 0.15) 22%, rgba(255, 255, 255, 0) 55%)`;
  };

  const handleImageMouseLeave = () => {
    if (!imageCardRef.current || !glareRef.current) {
      return;
    }

    imageCardRef.current.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)';
    glareRef.current.style.opacity = '0';
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#090a16] via-[#0d1222] to-[#0a0a14]">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute inset-0 cyber-grid opacity-25" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 pt-24 md:px-10 lg:flex-row lg:justify-between">
        <div className="max-w-3xl lg:w-1/2">
          <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-sm text-cyan-300">
            <Sparkles className="mr-2 h-4 w-4" />
            Computer Science (AI) Student
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            Building practical AI and full-stack products for real-world problems.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Focused on AI-powered apps, scalable backend systems, and strong engineering fundamentals in DSA, OS, DBMS, and Computer Networks.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 text-white hover:from-cyan-600 hover:to-blue-700">
              <a href="#projects" className="flex items-center">
                View Featured Projects
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-black/30 px-8 text-white hover:bg-white/10">
              <a
                href="https://drive.google.com/file/d/1NWTgr20HE6SP8oFQE3BWH4bsj_4TQVy-/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume PDF
              </a>
            </Button>
          </div>
        </div>

        <div className="relative hidden w-full max-w-xl lg:block lg:w-1/2">
          <div className="animate-float-soft">
            <div
              ref={imageCardRef}
              onMouseMove={handleImageMouseMove}
              onMouseLeave={handleImageMouseLeave}
              className="interactive-card group relative rounded-2xl border border-cyan-300/30 bg-black/40 p-2 shadow-[0_20px_60px_rgba(34,211,238,0.15)] backdrop-blur-sm"
            >
              <img
                src="/lovable-uploads/e00c383b-fb7c-4c17-8e45-84da4c064da5.png"
                alt="Featured portfolio visual"
                className="h-auto w-full rounded-xl"
              />
              <div ref={glareRef} className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200" />
              <div className="absolute -bottom-4 left-6 rounded-full border border-cyan-300/40 bg-cyan-500/20 px-3 py-1 text-xs text-cyan-200">
                Featured Visual
              </div>
            </div>
          </div>

          <div className="absolute -left-8 top-8 h-20 w-20 rounded-full border border-white/20 bg-white/5 backdrop-blur-md" />
          <div className="absolute -right-6 bottom-4 h-14 w-14 rounded-full border border-fuchsia-300/40 bg-fuchsia-500/20 backdrop-blur-md" />
        </div>
      </div>

      <style>{`
        @keyframes float-soft {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        .animate-float-soft {
          animation: float-soft 6s ease-in-out infinite;
        }

        .interactive-card {
          transform-style: preserve-3d;
          transition: transform 160ms ease-out;
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
