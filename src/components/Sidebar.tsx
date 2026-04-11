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
      {/* Mobile Toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed bottom-6 right-6 lg:hidden z-50 rounded-full shadow-lg bg-primary text-primary-foreground hover:bg-primary/90"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </Button>

      <aside
        className={cn(
          "fixed top-16 left-0 bottom-0 w-80 bg-background border-r transition-transform duration-300 z-40 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ScrollArea className="h-full px-4 py-6">
          <div className="space-y-1">
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
                    "w-full text-left p-4 rounded-xl transition-all duration-200 group flex items-start gap-3",
                    isActive 
                      ? "bg-secondary text-primary shadow-sm" 
                      : "hover:bg-muted"
                  )}
                >
                  <div className="mt-1">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <Circle className={cn(
                        "w-5 h-5",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )} />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-tighter">
                        Module {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className={cn(
                      "font-semibold text-sm leading-tight",
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
