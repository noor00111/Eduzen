'use client';

import { format } from 'date-fns';
import { Star, BookOpen, MessageSquare, GraduationCap, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TutorInfoPanelProps } from '@/src/types';
import { fadeUp, stagger } from '@/src/lib/animation';

export function TutorInfoPanel({ tutor }: TutorInfoPanelProps) {

  return (
    <motion.div
      className="lg:col-span-2 space-y-6"
      initial="hidden"
      animate="visible"
      variants={stagger}>

      <motion.div variants={fadeUp} custom={0}>
        <div className="rounded-[1.75rem] overflow-hidden bg-white border border-surface-300 shadow-[0_4px_24px_rgba(45,31,88,0.06)]">
          <div className="px-6 sm:px-8 py-6 flex items-center justify-between gap-3 border-b border-surface-300">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-brand-600" />
              </div>
              <h2 className="font-black text-brand-900 text-lg">About Me</h2>
            </div>
          </div>

          <div className="px-6 sm:px-8 py-6">
            <p className="leading-relaxed text-[15px] text-brand-800/85">
              {tutor.bio || "This tutor hasn't added a bio yet."}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 px-6 sm:px-8 pb-6">
            {[
              { icon: Star, label: 'Rating', value: tutor.rating.toFixed(1) },
              { icon: MessageSquare, label: 'Reviews', value: tutor.totalReviews },
              { icon: BookOpen, label: 'Subjects', value: tutor.subjects.length },
            ].map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-2xl bg-surface-200/60 p-4 text-center">
                <Icon className="w-4 h-4 mx-auto mb-1.5 text-brand-500" />
                <p className="text-xl font-black text-brand-900">{value}</p>
                <p className="text-[11px] font-bold uppercase tracking-wide text-brand-700/50">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} custom={1}>
        <div className="rounded-[1.75rem] overflow-hidden bg-white border border-surface-300 shadow-[0_4px_24px_rgba(45,31,88,0.06)]">
          <div className="px-6 sm:px-8 py-6 flex items-center gap-3 border-b border-surface-300">
            <div className="w-11 h-11 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5 text-brand-600" />
            </div>
            <h2 className="font-black text-brand-900 text-lg">
              Student Reviews
              <span className="ml-2 text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-100 text-brand-700">
                {tutor.reviews?.length || 0}
              </span>
            </h2>
          </div>

          <div className="px-6 sm:px-8 py-6 space-y-4">
            <AnimatePresence>
              {tutor.reviews?.length ? tutor.reviews.map((review, i) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-2xl p-5 bg-surface-200/60 border border-surface-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black shrink-0 bg-brand-100 text-brand-700">
                      {review.student.name.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm leading-none mb-1 text-brand-900 truncate">{review.student.name}</p>
                      <p className="text-xs text-brand-700/50">{format(new Date(review.createdAt), 'MMM d, yyyy')}</p>
                    </div>
                    <div className="flex gap-0.5 shrink-0">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className={`w-3.5 h-3.5 ${star <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-surface-400'}`} />
                      ))}
                    </div>
                  </div>
                  {review.comment && (
                    <p className="text-sm leading-relaxed italic pl-1 text-brand-800/75">
                      &ldquo;{review.comment}&rdquo;
                    </p>
                  )}
                </motion.div>
              )) : (
                <div className="text-center py-10">
                  <MessageSquare className="w-9 h-9 mx-auto mb-3 text-brand-300" />
                  <p className="font-medium text-brand-700/50 text-sm">No reviews yet. Be the first to book!</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
