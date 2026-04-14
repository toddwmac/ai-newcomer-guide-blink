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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [module.id]);

  return (
    <div className="max-w-4xl mx-auto px-8 py-16 lg:py-28 warm-glow">
      <AnimatePresence mode="wait">
        <motion.div
          key={module.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="lesson-content"
        >
          <div className="mb-14">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
              style={{
                background: 'hsl(150, 30%, 28% / 0.08)',
                color: 'hsl(150, 30%, 28%)'
              }}
            >
              Module
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-[1.1]" style={{ color: 'hsl(20, 15%, 13%)' }}>
              {module.title}
            </h1>
            <p className="text-2xl leading-relaxed" style={{ color: 'hsl(20, 8%, 42%)', fontFamily: "'Merriweather', Georgia, serif" }}>
              {module.description}
            </p>
          </div>

          <div
            ref={contentRef}
            dangerouslySetInnerHTML={{ __html: module.content }}
          />

          <div className="mt-20 pt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={onPrev}
                disabled={isFirst}
                className="rounded-full px-8 py-6 text-lg"
              >
                <ChevronLeft className="mr-2 w-5 h-5" />
                Previous
              </Button>
              <Button
                variant="outline"
                onClick={onNext}
                disabled={isLast}
                className="rounded-full px-8 py-6 text-lg"
              >
                Next
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <Button
              onClick={onComplete}
              className="rounded-full px-10 py-6 text-lg"
              style={isCompleted ? {
                background: 'hsl(142, 50%, 35%)',
                color: 'white'
              } : {}}
            >
              {isCompleted ? (
                <>
                  <Check className="mr-2 w-5 h-5" />
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
