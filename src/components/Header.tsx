import React from 'react';
import { Progress } from './ui/progress';

interface HeaderProps {
  progress: number;
}

export const Header: React.FC<HeaderProps> = ({ progress }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b z-50 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <a href="https://www.appliedailabs.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="Applied AI Labs" className="h-[52px] w-auto object-contain" />
        </a>
        <div className="h-8 w-px bg-border hidden sm:block mx-1" />
        <span className="font-serif text-xl font-bold tracking-tight hidden sm:block">
          PC Newcomers Guide to AI
        </span>
      </div>
      
      <div className="flex flex-col items-end gap-1 w-1/3 max-w-xs">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
          Course Progress: {Math.round(progress)}%
        </span>
        <Progress value={progress} className="h-1.5" />
      </div>
    </header>
  );
};
