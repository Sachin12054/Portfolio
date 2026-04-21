
import React from 'react';
import { ZapIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <ZapIcon className="h-5 w-5 text-neon-blue mr-2" />
          <span className="text-lg font-semibold neon-text-blue">Sachin</span>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved
          </p>
          <p className="text-white/40 text-xs mt-1">
            Built with focus on AI and practical engineering
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
