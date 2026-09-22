'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/src/lib/animation';
import { reasons } from '@/src/utils/reasons';


export default function ChooseUs() {
  return (
    <section className="pb-24" style={{ backgroundColor: '#F5FBE6' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center mb-16">

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ color: '#233D4D', fontFamily: 'var(--font-playfair)' }}>
            Why Choose Us?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="max-w-3xl mx-auto subtitle text-md">
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
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280 }}
              className="rounded-3xl p-8 group"
              style={{backgroundColor: '#F5FBE6', border: '1px solid rgba(21,94,97,0.12)'}}>

              <div className='flex gap-4'>
                  <Icon className="w-6 h-6" style={{ color: '#FE7F2D' }} />
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#233D4D' }}>
                  {title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-[#6B7280]">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
