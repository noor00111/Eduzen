'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface WelcomeBannerProps {
  name?: string;
}

export function WelcomeBanner({ name }: WelcomeBannerProps) {
  const firstName = name?.split(' ')[0];

  return (
    <div className="relative rounded-[1.75rem] overflow-hidden mb-6 px-6 sm:px-10 py-8 bg-[linear-gradient(120deg,#EDE8FA,#F5F0FF)] border border-surface-300">
      <Star className="absolute right-10 top-6 w-5 h-5 text-accent-400/50" strokeWidth={1.5} />
      <Star className="absolute right-24 top-14 w-3 h-3 fill-brand-400/30 text-brand-400/30" />
      <Star className="absolute right-6 bottom-6 w-4 h-4 text-brand-400/30" strokeWidth={1.5} />

      <motion.p
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-1.5 text-brand-600 text-sm font-bold mb-1">
        Welcome back{firstName ? `, ${firstName}` : ''}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="text-3xl sm:text-4xl font-black text-brand-900 font-serif tracking-tight">
        Keep Going!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-brand-700/60 text-sm font-medium mt-1.5 flex items-center gap-1.5">
        Small steps today, big dreams tomorrow.
      </motion.p>
    </div>
  );
}
