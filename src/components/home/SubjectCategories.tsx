'use client';

import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { ChevronRight, Users } from 'lucide-react';
import { categoryService } from '@/src/features/admin/services/category.service';
import { Category } from '@/src/types';
import { fadeUp, stagger } from '@/src/lib/animation';
import { getCategoryIcon } from '@/src/lib/categoryIcons';
import { getCategoryEmoji, CARD_STYLES, getCategoryTagline } from '@/src/lib/categoryMeta';

export default function SubjectCategories() {
  const { data: categories = [], isLoading } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: categoryService.getCategories,
  });

  return (
    <div className="mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center mb-14">
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black leading-tight text-brand-900 font-serif">
            Explore Tutors within Subject
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}>

          {isLoading ? 
          Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-3xl bg-white animate-pulse p-5 h-52 border border-[rgba(212,184,216,0.20)]">
                  <div className="flex justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-surface-400" />
                    <div className="w-12 h-12 rounded-full bg-surface-400" />
                  </div>
                  <div className="h-4 w-20 rounded-full bg-surface-400 mb-2" />
                  <div className="h-3 w-full rounded-full bg-surface-400 mb-1" />
                  <div className="h-3 w-3/4 rounded-full bg-surface-400" />
                </div>
              ))
            : categories.slice(0, 4).map((cat: Category, i: number) => {
                const s = CARD_STYLES[i % CARD_STYLES.length];
                const Icon = getCategoryIcon(cat.name);
                return (
                  <motion.div
                    key={cat.id}
                    variants={fadeUp}
                    whileHover={{ y: -5, boxShadow: `0 16px 40px ${s.borderRaw}` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                    className={`group relative rounded-3xl p-5 flex flex-col cursor-pointer min-h-[210px] shadow-[0_2px_12px_rgba(0,0,0,0.05)] border-[1.5px] ${s.cardBg} ${s.border}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${s.iconGradient}`}>
                        <Icon className="w-6 h-6 text-white" strokeWidth={1.7} />
                      </div>
                      <span
                        className="text-4xl leading-none select-none transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                        {getCategoryEmoji(cat.name)}
                      </span>
                    </div>

                    <p className={`font-black text-lg mb-1 leading-snug ${s.textDark}`}>
                      {cat.name}
                    </p>

                    <p className={`text-sm leading-relaxed flex-1 ${s.textDarkFaded}`}>
                      {getCategoryTagline(cat.name)}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <div
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black ${s.badgeBg} ${s.accent}`}>
                        <Users className="w-3 h-3" strokeWidth={2.5} />
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 ${s.badgeBg}`}>
                        <ChevronRight className={`w-4 h-4 ${s.accent}`} strokeWidth={2.5} />
                      </div>
                    </div>
                  </motion.div>
                );
              })
          }
        </motion.div>

      </div>
    </div>
  );
}
