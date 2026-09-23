'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { steps } from '@/src/utils/steps';

export default function FindTutor() {
  return (
    <div className="pb-28 mt-10">
      <h2 className="text-4xl md:text-5xl font-black mb-10 text-center leading-tight"
        style={{ color: '#2D1F58', fontFamily: 'var(--font-playfair)' }}>
        Find Your Perfect Tutor
      </h2>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <div className="animate-slide-up">

          <p className="text-md leading-relaxed text-slate-600 mb-10 max-w-lg">
            A smarter way to connect with expert tutors designed to remove the guesswork
            from learning and replace it with clarity, confidence, and real progress.
            With just a few simple steps, you can find the right tutor who understands
            your goals, matches your pace, and adapts to your learning style!
            <br /><br />
            No complicated processes, no wasted time just a experience that
            delivers powerful, measurable results. Whether you're improving grades,
            mastering new skills, or preparing for exams, everything becomes easier
            and more effective!
          </p>

          <div className="flex gap-5 flex-wrap">
            <Link href="/tutors">
              <button className="px-9 py-4 rounded-full font-bold text-sm bg-brand-500 text-white hover:bg-brand-600 transition flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105">
                Browse Tutors
                <ChevronRight size={18} />
              </button>
            </Link>
            <Link href="/register">
              <button className="px-9 py-4 rounded-full font-bold text-sm border-2 border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white transition hover:shadow-lg hover:scale-105">
                Sign Up Free
              </button>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 flex gap-5 items-start group">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-brand-100 group-hover:bg-brand-500 transition">
                <Icon className="w-6 h-6 text-brand-500 group-hover:text-white transition" />
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-800 mb-1">
                  {title}
                </h3>
                <p className="text-sm text-slate-500">
                  {description}
                </p>
              </div>

              <span className="ml-auto font-bold text-sm text-accent-400">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
