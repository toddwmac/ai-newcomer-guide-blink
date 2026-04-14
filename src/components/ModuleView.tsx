import React, { useCallback, useEffect, useMemo } from 'react';
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

const COPY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
const CHECK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;

export const ModuleView: React.FC<ModuleViewProps> = ({
  module,
  onNext,
  onPrev,
  onComplete,
  isCompleted,
  isFirst,
  isLast,
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [module.id]);

  const processedContent = useMemo(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(module.content, 'text/html');
    const prompts = doc.querySelectorAll('.copy-prompt');

    prompts.forEach((el) => {
      const wrapper = doc.createElement('div');
      wrapper.className = 'copy-prompt-wrapper';

      const btn = doc.createElement('button');
      btn.className = 'copy-btn';
      btn.setAttribute('data-tooltip', 'Copy and then paste in favorite chat bot');
      btn.setAttribute('aria-label', 'Copy prompt to clipboard');
      btn.innerHTML = COPY_ICON;

      el.parentNode?.insertBefore(wrapper, el);
      wrapper.appendChild(el);
      wrapper.appendChild(btn);
    });

    return doc.body.innerHTML;
  }, [module.content]);

  const handleContentClick = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    const target = (e.target as HTMLElement).closest('.copy-btn');
    if (!target) return;

    const btn = target as HTMLElement;
    const wrapper = btn.closest('.copy-prompt-wrapper');
    const promptEl = wrapper?.querySelector('.copy-prompt') as HTMLElement | null;
    if (!promptEl) return;

    let text = promptEl.textContent || '';
    text = text.replace(/^Try this:\s*/i, '').replace(/^\s*"|"\s*$/g, '').trim();

    try {
      await navigator.clipboard.writeText(text);
      btn.classList.add('copied');
      btn.setAttribute('data-tooltip', 'Copied!');
      btn.innerHTML = CHECK_ICON;
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.setAttribute('data-tooltip', 'Copy and then paste in favorite chat bot');
        btn.innerHTML = COPY_ICON;
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }, []);

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
            onClick={handleContentClick}
            dangerouslySetInnerHTML={{ __html: processedContent }}
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
