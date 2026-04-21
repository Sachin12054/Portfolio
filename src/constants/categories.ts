
import { CategoryInfo } from "@/types/project";
import { Layers, Eye, Database, Smartphone, Cpu } from 'lucide-react';
import React from 'react';

export const categories: CategoryInfo[] = [
  { id: "all", label: "All Projects", icon: React.createElement(Layers, { className: "w-4 h-4" }) },
  { id: "frontend", label: "Frontend", icon: React.createElement(Eye, { className: "w-4 h-4" }) },
  { id: "backend", label: "Backend", icon: React.createElement(Database, { className: "w-4 h-4" }) },
  { id: "mobile", label: "Mobile", icon: React.createElement(Smartphone, { className: "w-4 h-4" }) },
  { id: "hardware", label: "Hardware", icon: React.createElement(Cpu, { className: "w-4 h-4" }) },
  { id: "fullstack", label: "Full Stack", icon: React.createElement(Layers, { className: "w-4 h-4" }) }
];
