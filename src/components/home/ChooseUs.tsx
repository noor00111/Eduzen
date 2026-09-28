'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/src/lib/animation';
import { reasons } from '@/src/utils/reasons';

export default function ChooseUs() {
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
            className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-brand-900 font-serif">
            What Makes Eduzen Different
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-3xl mx-auto text-md text-brand-600">
            Eduzen was created to change the way people learn by making it easy for everyone, no matter their background, to access and highly personalized to each learner's journey. With Eduzen, nothing can get in the way of your growth!
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {reasons.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(123,104,197,0.14)' }}
              transition={{ type: 'spring', stiffness: 280 }}
              className="rounded-3xl p-8 group transition-shadow bg-brand-100 border border-[rgba(154,142,209,0.25)]">

              <div className="flex gap-4 mb-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-[rgba(123,104,197,0.12)]">
                  <Icon className="w-5 h-5 text-brand-500" />
                </div>
                <h3 className="text-lg font-semibold text-brand-900">
                  {title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-[#6B5FA0]">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
