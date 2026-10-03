'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/src/lib/animation';
import { reasons } from '@/src/utils/reasons';

const BADGE_COLORS = [
  'bg-brand-100 text-brand-600',
  'bg-amber-100 text-amber-600',
  'bg-emerald-100 text-emerald-600',
  'bg-sky-100 text-sky-600',
  'bg-rose-100 text-rose-500',
  'bg-violet-100 text-violet-600',
];

export default function ChooseUs() {
  return (
    <div className="mt-24 bg-body-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center mb-16">

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-brand-900 font-serif">
            What Makes Eduzen Different
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-3xl mx-auto text-md text-brand-600">
            Eduzen was created to change the way people learn by making it easy for everyone, no matter their background, to access and highly personalized to each learner&apos;s journey. With Eduzen, nothing can get in the way of your growth!
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">

          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="flex flex-col items-center text-center gap-4 cursor-default">

              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center ${BADGE_COLORS[i % BADGE_COLORS.length]}`}>
                <Icon className="w-9 h-9" strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="text-lg font-black leading-snug text-brand-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-600 max-w-xs mx-auto">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
