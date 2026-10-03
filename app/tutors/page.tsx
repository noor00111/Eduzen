'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, BookOpen, Sparkles } from 'lucide-react';

import { Input } from '@/src/components/ui/Input';
import { Button } from '@/src/components/ui/Button';
import { useTutors } from '../../src/features/tutors/hooks/useTutors';
import { TutorCard } from '../../src/features/tutors/tutorComponents/allTutors/TutorCard';
import { Category } from '@/src/types';

export default function TutorsListingPage() {
  const {searchTerm, setSearchTerm, category, setCategory, categories, filteredTutors, isLoading} = useTutors();

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] border border-white/30 bg-white/50 backdrop-blur-2xl shadow-[0_20px_80px_rgba(33,94,97,0.12)] p-8 md:p-12 mb-14">
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-300/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-300/20 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-10">
            <div className="max-w-2xl">

              <div className="inline-flex items-center gap-2 bg-brand-500/10 text-brand-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4 text-accent-400" />
                Trusted by 10k+ students
              </div>

              <h1 className="text-5xl md:text-6xl leading-tight font-blacktext-brand-900">
                Find Your <span className="block"> Perfect Tutor</span>
              </h1>

              <div className="flex items-center gap-3 mt-8 text-brand-700">
                <BookOpen className="w-5 h-5 text-accent-400" />
                <span className="font-medium">
                  Personalized learning experiences!
                </span>
              </div>

              <p className="mt-6 text-lg md:text-xl text-brand-700/80 leading-relaxed">
                Learn from highly skilled educators across multiple subjects,
                book sessions instantly, and level up your learning journey.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-warm rounded-3xl p-6 w-full lg:w-[420px] shadow-xl border border-white/40">

              <h3 className="text-xl font-bold text-brand-900 mb-5">
                Search Tutors
              </h3>

              <div className="relative mb-5">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-accent-400 w-5 h-5" />

                <Input
                  placeholder="Search by subject or name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 rounded-2xl border-0 bg-white/70 shadow-sm text-brand-900 placeholder:text-brand-500/50 focus:ring-2 focus:ring-brand-300"
                />
              </div>

              <div className="relative mb-6">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-14 rounded-2xl border-0 bg-white/70 px-5 text-brand-900 shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-brand-300">
                  <option value="">All Categories</option>
                  {categories?.map((c: Category) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>

                <Filter className="absolute right-4 top-1/2 -translate-y-1/2 text-accent-400 w-5 h-5" />
              </div>

              <Button
                className="w-full h-14 rounded-2xl text-base font-semibold bg-linear-to-r from-brand-500 to-brand-700 hover:scale-[1.02] transition-all duration-300 shadow-lg">
                Explore Tutors
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i}
                className="h-[380px] rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/30 animate-pulse"
              />
            ))}
          </div>
        ) : !filteredTutors || filteredTutors.length === 0 ? (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24 rounded-[40px] bg-white/40 backdrop-blur-xl border border-white/30">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-100 flex items-center justify-center">
              <Search className="w-8 h-8 text-brand-500" />
            </div>

            <h3 className="text-3xl font-black text-brand-900 mb-4">
              No tutors found
            </h3>

            <p className="text-brand-700/70 max-w-md mx-auto">
              Try adjusting your search or explore different categories.
            </p>

            <Button
              onClick={() => {
                setSearchTerm('');
                setCategory('');
              }}
              className="mt-8 rounded-full px-8 h-12 bg-brand-500 hover:bg-brand-600">
              Clear Filters
            </Button>
          </motion.div>

        ) : (

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">

              {filteredTutors.map((tutor, index) => (
                <motion.div
                  key={tutor.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{duration: 0.4,delay: index * 0.05}}>
                  <TutorCard tutor={tutor} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </div>
  );
}
