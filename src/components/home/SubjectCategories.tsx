'use client';

import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import {GraduationCap, Calculator, FlaskConical, Code2, Microscope, Languages, Atom} from 'lucide-react';

type Icon = React.ComponentType<{ className?: string; strokeWidth?: number }>;
const ICON_MAP: Record<string, Icon> = {
  programming: Code2,
  mathematics: Calculator, math: Calculator,
  chemistry: FlaskConical,
  biology: Microscope, physics: Atom,
  languages: Languages,
};

function getIcon(name: string): Icon {
  return ICON_MAP[name.toLowerCase().trim()] ?? GraduationCap;
}

import { categoryService } from '@/src/features/admin/services/category.service';
import { Category } from '@/src/types';
import { fadeUp, stagger } from '@/src/lib/animation';

const COLORS = ['bg-[#f7e4e4]', 'bg-[#daf2e3]', 'bg-[#b5bfc4]', 'bg-[#faf4e6]'];

export default function SubjectCategories() {
  const { data: categories = [], isLoading } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: categoryService.getCategories,
  });

  return (
    <div className="my-14 bg-body-500">
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}>

          {isLoading
            ? Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-3xl flex flex-col items-center animate-pulse bg-brand-100 px-8 py-12 min-h-70">
                  <div className="w-20 h-20 rounded-2xl mb-8 bg-surface-400" />
                  <div className="h-5 w-28 rounded-full bg-surface-400" />
                </div>
              ))
            : categories.slice(0, 4).map((cat: Category, i: number) => (
                <motion.div
                  key={cat.id}
                  variants={fadeUp}
                  whileHover={{ y: -10, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`relative rounded-3xl flex flex-col items-center text-center cursor-pointer overflow-hidden px-8 py-12 min-h-70 ${COLORS[i % COLORS.length]}`}>

                  <div className="absolute top-5 left-5 w-28 h-28 rounded-3xl rotate-12 bg-[rgba(255,255,255,0.18)]" />
                  <div className="absolute top-9 left-9 w-28 h-28 rounded-3xl rotate-45 bg-[rgba(255,255,255,0.12)]" />
                  <div className="relative z-10 mb-8 mt-2">
                    {(() => { const Icon = getIcon(cat.name); return <Icon className="w-20 h-20 text-blue-950" strokeWidth={1.4} />; })()}
                  </div>
                  <p className="relative z-10 font-black text-xl text-blue-900 leading-tight">
                    {cat.name}
                  </p>
                </motion.div>
              ))
          }
        </motion.div>

      </div>
    </div>
  );
}
