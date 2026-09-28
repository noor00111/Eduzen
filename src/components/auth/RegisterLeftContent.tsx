'use client';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const FEATURES = [
  'Book 1-on-1 sessions with expert tutors',
  'Flexible scheduling that fits your life',
  'Track your learning progress over time',
];

export function RegisterLeftContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
        className="relative z-10">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-4 text-accent-300">
          Get started
        </p>

        <h1 className="text-5xl font-black leading-tight mb-6 text-body-500">
          Start Your <br /> Journey Today!
        </h1>

        <p className="text-base font-medium leading-relaxed text-[rgba(245,251,230,0.75)]">
          Whether you want to learn a new skill or share your
          expertise, Eduzen connects you with the right people.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="space-y-3 relative z-10">

        {FEATURES.map((feat) => (
          <div key={feat} className="flex items-center gap-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[rgba(245,251,230,0.15)]">
              <ChevronRight className="w-3 h-3 text-accent-300"/>
            </div>

            <p className="text-sm font-medium text-[rgba(245,251,230,0.75)]">
              {feat}
            </p>
          </div>
        ))}
      </motion.div>
    </>
  );
}