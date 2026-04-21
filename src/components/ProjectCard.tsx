import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';
import { Code2, ChevronRight, Github, Eye, Zap, Star, Calendar, Bookmark, BookmarkCheck, Share2, Tag, ArrowUpRight } from 'lucide-react';
import { colorStyles } from '@/styles/projectColors';

interface ProjectCardProps {
  project: Project;
  onBookmark: (id: number) => void;
}

const ProjectCard = ({ project, onBookmark }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Format date
  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short'
  });

  // Handle bookmark toggle
  const toggleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
    onBookmark(project.id);
  };

  // Handle share action
  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Mock implementation - would use Web Share API in production
    alert(`Sharing project: ${project.title}`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    if (cardRef.current) observer.observe(cardRef.current);
    return () => cardRef.current && observer.unobserve(cardRef.current);
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative rounded-xl transition-all duration-700 transform h-full
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} 
        ${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
        ${isHovered ? `shadow-xl scale-[1.02] ${colorStyles[project.color].glow}` : 'shadow-md'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setShowDetails(!showDetails)}
      style={{ transitionDelay: `${project.id * 100}ms` }}
    >
      {/* Card border with gradient */}
      <div className={`absolute inset-0 p-[1px] rounded-xl bg-gradient-to-br ${colorStyles[project.color].border} opacity-70`}>
        <div className="absolute inset-0 rounded-xl bg-[#0a0a14]"></div>
      </div>

      {/* Card content */}
      <div className="relative p-5 h-full flex flex-col backdrop-blur-sm bg-black/30 overflow-hidden rounded-xl">
        {/* Category badge */}
        <div className="absolute top-4 left-4 px-2 py-1 text-xs font-medium rounded-full bg-white/10 text-white/80 uppercase tracking-wider flex items-center z-10">
          <Tag className="w-3 h-3 mr-1" />
          {project.category}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white uppercase tracking-wider flex items-center z-10">
            <Zap className="w-3 h-3 mr-1" />
            Featured
          </div>
        )}

        <div className="relative mb-5 overflow-hidden rounded-lg group">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-52 object-cover transition-all duration-700 ease-out 
              ${isHovered ? 'scale-105 blur-[1px]' : 'scale-100'}`}
          />
          
          {/* Overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
            transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} 
            flex items-center justify-center`}>
            <div className="flex gap-4">
              <a 
                href={project.codeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center
                  hover:bg-white/20 transition-all duration-300 text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div className={`w-1 h-6 rounded-full ${colorStyles[project.color].accent} mr-3`}></div>
              <h3 className={`text-xl font-bold ${colorStyles[project.color].text}`}>
                {project.title}
              </h3>
            </div>
            
            {/* Action buttons */}
            <div className="flex space-x-2">
              <button 
                onClick={toggleBookmark} 
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                {isBookmarked ? 
                  <BookmarkCheck className="w-4 h-4 text-white/80" /> : 
                  <Bookmark className="w-4 h-4 text-white/60" />
                }
              </button>
              <button 
                onClick={handleShare}
                className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all"
              >
                <Share2 className="w-4 h-4 text-white/60" />
              </button>
            </div>
          </div>

          {/* Date display */}
          <div className="flex items-center mb-3 text-white/50 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            {formattedDate}
          </div>

          <p className="text-white/70 mb-4 line-clamp-3 text-sm md:text-base">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.techs.map((tech, idx) => (
              <span 
                key={idx} 
                className={`text-xs px-2 py-1 rounded-full 
                  bg-white/5 border border-white/10 text-white/70
                  transition-all duration-300 ${isHovered ? 'bg-white/10' : ''}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between pt-4 border-t border-white/10">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`${colorStyles[project.color].text} hover:bg-white/5 transition-all duration-300 group`} 
            asChild
          >
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4 mr-2" /> 
              Live Demo
              <ChevronRight className={`w-4 h-4 ml-1 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
            </a>
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-white/60 hover:text-white/90 hover:bg-white/5" 
            asChild
          >
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Code2 className="w-4 h-4 mr-2" /> 
              Source Code
            </a>
          </Button>
        </div>

        {/* Project Details Modal/Drawer - Slides in from bottom when card is clicked */}
        <div 
          className={`absolute inset-0 bg-[#0a0a16] rounded-xl p-6 transition-all duration-500 ease-in-out z-20
            ${showDetails ? 'top-0 opacity-100' : 'top-full opacity-0'}`}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center">
              <div className={`w-2 h-8 rounded-full ${colorStyles[project.color].accent} mr-3`}></div>
              <h3 className={`text-2xl font-bold ${colorStyles[project.color].text}`}>
                {project.title}
              </h3>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              className="rounded-full h-8 w-8 p-0"
              onClick={(e) => {
                e.stopPropagation();
                setShowDetails(false);
              }}
            >
              <span className="sr-only">Close</span>
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/70">
                <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
              </svg>
            </Button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className={`px-3 py-1 rounded-full ${colorStyles[project.color].lightBg} ${colorStyles[project.color].text} text-sm font-medium`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </div>
            <div className="flex items-center text-white/50 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {formattedDate}
            </div>
          </div>

          <div className="relative h-64 rounded-lg overflow-hidden mb-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 mb-6">
            <div>
              <h4 className="text-white/90 text-lg font-medium mb-2">Overview</h4>
              <p className="text-white/70 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h4 className="text-white/90 text-lg font-medium mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className={`text-sm px-3 py-1 rounded-full 
                      ${colorStyles[project.color].lightBg} ${colorStyles[project.color].text}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white/90 text-lg font-medium mb-3">Key Features</h4>
              <ul className="space-y-2">
                {Array(3).fill(0).map((_, idx) => (
                  <li key={idx} className="flex items-center text-white/70">
                    <Star className="w-4 h-4 mr-2 text-yellow-400" />
                    Example key feature {idx + 1} for {project.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-8">
            <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 rounded-full" asChild>
              <a 
                href={project.codeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
