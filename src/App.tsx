import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ModuleView } from './components/ModuleView';
import { modules } from './data/courseContent';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner';

function App() {
  const [currentModuleId, setCurrentModuleId] = useState(() => {
    return localStorage.getItem('currentModuleId') || modules[0].id;
  });
  const [completedModuleIds, setCompletedModuleIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('completedModuleIds');
    return saved ? JSON.parse(saved) : [];
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('currentModuleId', currentModuleId);
  }, [currentModuleId]);

  useEffect(() => {
    localStorage.setItem('completedModuleIds', JSON.stringify(completedModuleIds));
  }, [completedModuleIds]);

  const currentModuleIndex = modules.findIndex(m => m.id === currentModuleId);
  const currentModule = modules[currentModuleIndex] || modules[0];
  
  const progress = (completedModuleIds.length / modules.length) * 100;

  const handleNext = () => {
    if (currentModuleIndex < modules.length - 1) {
      setCurrentModuleId(modules[currentModuleIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleId(modules[currentModuleIndex - 1].id);
    }
  };

  const handleComplete = () => {
    if (!completedModuleIds.includes(currentModuleId)) {
      const newCompleted = [...completedModuleIds, currentModuleId];
      setCompletedModuleIds(newCompleted);
      toast.success("Module completed!", {
        description: "Your progress has been saved locally.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      <Header progress={progress} />
      
      <div className="flex">
        <Sidebar
          currentModuleId={currentModuleId}
          completedModuleIds={completedModuleIds}
          onModuleSelect={setCurrentModuleId}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />
        
        <main className="flex-1 lg:pl-80 pt-20 flex flex-col min-h-screen">
          <div className="flex-1">
            <ModuleView
              module={currentModule}
              onNext={handleNext}
              onPrev={handlePrev}
              onComplete={handleComplete}
              isCompleted={completedModuleIds.includes(currentModuleId)}
              isFirst={currentModuleIndex === 0}
              isLast={currentModuleIndex === modules.length - 1}
            />
          </div>
          
          <footer className="py-10 border-t" style={{ borderColor: 'hsl(30, 15%, 88%)' }}>
            <div className="container mx-auto px-8 text-center">
              <a
                href="https://www.appliedailabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-muted-foreground hover:text-primary transition-colors font-semibold"
              >
                &copy; 2026 Applied AI Labs
              </a>
            </div>
          </footer>
        </main>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
