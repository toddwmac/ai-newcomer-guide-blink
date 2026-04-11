import React, { useEffect, useRef } from 'react';
import { Module } from '../data/courseContent';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

interface ModuleViewProps {
  module: Module;
  onNext: () => void;
  onPrev: () => void;
  onComplete: () => void;
  isCompleted: boolean;
  isFirst: boolean;
  isLast: boolean;
}

export const ModuleView: React.FC<ModuleViewProps> = ({
  module,
  onNext,
  onPrev,
  onComplete,
  isCompleted,
  isFirst,
  isLast,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top when module changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [module.id]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 lg:py-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={module.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="lesson-content"
        >
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {module.title}
            </h1>
            <p className="text-xl text-muted-foreground italic">
              {module.description}
            </p>
          </div>

          <div 
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: module.content }} 
          />

          <div className="mt-16 pt-12 border-t flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={onPrev}
                disabled={isFirst}
                className="rounded-full px-6"
              >
                <ChevronLeft className="mr-2 w-4 h-4" />
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={onNext}
                disabled={isLast}
                className="rounded-full px-6"
              >
                Next
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <Button
              onClick={onComplete}
              className={isCompleted ? "bg-green-600 hover:bg-green-700 rounded-full px-8" : "rounded-full px-8"}
            >
              {isCompleted ? (
                <>
                  <Check className="mr-2 w-4 h-4" />
                  Completed
                </>
              ) : (
                "Mark as Complete"
              )}
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
