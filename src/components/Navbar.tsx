
import React from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon, XIcon } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md py-5 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="relative w-8 h-8 mr-3">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-magenta opacity-70 blur-sm"></div>
            <div className="relative flex items-center justify-center w-full h-full rounded-full bg-black border border-white/10">
              <span className="text-white font-bold text-xs">FV</span>
            </div>
          </div>
          <span className="text-xl font-bold text-white">Sachin Portfolio</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-white hover:text-neon-blue transition-colors">Home</a>
          <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
          <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
          <a href="#git-projects" className="text-white/80 hover:text-white transition-colors">Git Projects</a>
          <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
          <a href="#work-now" className="text-white/80 hover:text-white transition-colors">Now</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
        </div>
        
        <Button
          className="md:hidden text-white"
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </Button>
        
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md p-6 flex flex-col space-y-6 md:hidden border-t border-white/10">
            <a href="#home" className="text-white hover:text-neon-blue transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#git-projects" className="text-white/80 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Git Projects</a>
            <a href="#skills" className="text-white/80 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#work-now" className="text-white/80 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Now</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
