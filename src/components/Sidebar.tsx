import React from 'react';
import { modules, Module } from '../data/courseContent';
import { cn } from '../lib/utils';
import { CheckCircle2, Circle, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

interface SidebarProps {
  currentModuleId: string;
  completedModuleIds: string[];
  onModuleSelect: (id: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentModuleId,
  completedModuleIds,
  onModuleSelect,
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      {/* Mobile Toggle — oversized for seniors */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-8 right-8 lg:hidden z-50 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90 w-16 h-16"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </Button>

      <aside
        className={cn(
          "fixed top-20 left-0 bottom-0 w-80 border-r transition-transform duration-300 z-40 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
        style={{
          background: 'linear-gradient(180deg, hsl(30, 18%, 94%) 0%, hsl(38, 28%, 95%) 100%)',
          borderColor: 'hsl(30, 15%, 86%)'
        }}
      >
        <ScrollArea className="h-full px-5 py-8">
          <div className="space-y-2">
            {modules.map((module, index) => {
              const isActive = currentModuleId === module.id;
              const isCompleted = completedModuleIds.includes(module.id);

              return (
                <button
                  key={module.id}
                  onClick={() => {
                    onModuleSelect(module.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full text-left px-5 py-5 rounded-xl transition-all duration-200 group flex items-start gap-4 border-l-4",
                    isActive
                      ? "bg-primary/10 border-l-primary shadow-sm"
                      : "border-l-transparent hover:bg-muted/50 hover:border-l-muted-foreground/20"
                  )}
                >
                  <div className="mt-0.5 flex-shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6" style={{ color: 'hsl(142, 50%, 35%)' }} />
                    ) : (
                      <Circle className={cn(
                        "w-6 h-6",
                        isActive ? "text-primary" : "text-muted-foreground/50"
                      )} />
                    )}
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                      Module {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className={cn(
                      "font-semibold text-base leading-snug mt-1",
                      isActive ? "text-primary" : "text-foreground"
                    )}>
                      {module.title}
                    </h3>
                  </div>
                </button>
              );
            })}
          </div>
        </ScrollArea>
      </aside>
    </>
  );
};
