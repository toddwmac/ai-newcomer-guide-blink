import React from 'react';
import { Progress } from './ui/progress';

interface HeaderProps {
  progress: number;
}

export const Header: React.FC<HeaderProps> = ({ progress }) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-background/90 backdrop-blur-md z-50 px-8 flex items-center justify-between">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="flex items-center gap-4">
        <a href="https://www.appliedailabs.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Applied AI Labs" className="h-14 w-auto object-contain" />
        </a>
        <div className="h-10 w-px bg-border hidden sm:block mx-2" />
        <span className="font-serif text-2xl font-bold tracking-tight hidden sm:block">
          PC Newcomers Guide to AI
        </span>
      </div>

      <div className="flex flex-col items-end gap-2 w-1/3 max-w-xs">
        <span className="text-sm font-semibold text-foreground/70">
          Course Progress: {Math.round(progress)}%
        </span>
        <Progress value={progress} className="h-2.5" />
      </div>
    </header>
  );
};
