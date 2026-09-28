'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import { Star, ChevronRight } from 'lucide-react';
import { fadeUp, stagger } from '@/src/lib/animation';
import { getTutors } from '@/src/features/tutors/services/tutors.service';
import { Tutor } from '@/src/types';

export default function TopTutor() {
  const { data: tutors, isLoading } = useQuery<Tutor[]>({
    queryKey: ['tutors', ''],
    queryFn: () => getTutors(),
  });

  const topTutors = tutors?.slice(0, 3) ?? [];

  return (
    <div className="my-20 bg-body-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center mb-16">

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-brand-900 font-serif">
            Our Top Tutors
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-md max-w-xl mx-auto text-brand-600">
            Hand picked teachers with strong track records and great reviews from students. Each one was carefully chosen for their knowledge, determination, and proven ability to help students really improve their grades!!
          </motion.p>
        </motion.div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-72 rounded-3xl animate-pulse bg-brand-100" />
            ))}
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topTutors.map((tutor, i) => (
              <motion.div
                key={tutor.id}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}>
                <div
                  className="rounded-3xl p-8 h-full flex flex-col shadow-lg bg-brand-100 border border-[rgba(154,142,209,0.28)] shadow-[0_8px_32px_rgba(123,104,197,0.08)]">

                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black shadow-md bg-[linear-gradient(135deg,#7B68C5,#6255A8)] text-brand-50">
                      {tutor.user.name.charAt(0).toUpperCase()}
                    </div>
                    <span
                      className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-bold bg-[rgba(123,104,197,0.12)] text-brand-700">
                      <Star className="w-3.5 h-3.5 fill-current text-brand-400" />
                      {tutor.rating.toFixed(1)}
                    </span>
                  </div>

                  <h3 className="text-xl font-black mb-1 text-brand-900">
                    {tutor.user.name}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tutor.subjects.slice(0, 3).map((s) => (
                      <span
                        key={s.id}
                        className="text-xs font-bold px-3 py-1 rounded-full bg-[rgba(154,142,209,0.18)] text-brand-700">
                        {s.name}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm leading-relaxed flex-1 mb-6 text-[#6B5FA0]">
                    {tutor.bio || 'Passionate educator dedicated to helping students reach their full potential.'}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xl font-black text-brand-900">
                      ${tutor.hourlyRate}<span className="text-sm font-medium text-brand-400">/hr</span>
                    </span>
                    <Link href={`/tutors/${tutor.id}`}>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 rounded-full font-black text-sm text-white bg-[linear-gradient(135deg,#7B68C5,#6255A8)] shadow-[0_6px_20px_rgba(123,104,197,0.30)]">
                        Book
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12">

          <Link href="/tutors">
            <motion.button
              whileHover={{ scale: 1.03, borderColor: '#7B68C5', color: '#7B68C5' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-md border-2 transition-all border-brand-400 text-brand-400">
              View All Tutors
              <ChevronRight className="w-4 h-4" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
