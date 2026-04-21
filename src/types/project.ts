
export type ProjectColor = 'blue' | 'magenta' | 'cyan' | 'green' | 'orange';
export type ProjectCategory = 'ai-ml' | 'fullstack' | 'backend' | 'app' | 'security' | 'mini';
export type ProjectTier = 'featured' | 'mid' | 'other';

export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  techs: string[];
  demoUrl: string;
  codeUrl: string;
  color: ProjectColor;
  featured?: boolean;
  date: string;
  category: ProjectCategory;
  tier: ProjectTier;
  highlights?: string[];
  renameSuggestion?: string;
}

export interface CategoryInfo {
  id: string;
  label: string;
  icon: React.ReactNode;
}
