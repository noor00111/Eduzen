'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeUp, stagger } from '@/src/lib/animation';
import about1 from '@/public/images/about1.png';
import about2 from '@/public/images/about2.jpg';
import about3 from '@/public/images/about3.jpg';

const benefits = [
  'Connect with 500+ verified expert tutors',
  'Learn at your own pace, on your schedule',
  'Track progress and achieve measurable results',
];

export default function AboutSection() {
  return (
    <div className="my-24 overflow-hidden bg-body-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative grid grid-cols-[1fr_1.6fr] gap-4 h-[480px]">
            <div className="flex flex-col gap-4">
              <div
                className="flex-1 overflow-hidden rounded-3xl shadow-[0_8px_32px_rgba(123,104,197,0.14)]">
                <Image
                  src={about1}
                  alt="Student learning"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div
                className="flex-1 overflow-hidden rounded-3xl shadow-[0_8px_32px_rgba(123,104,197,0.14)]">
                <Image
                  src={about2}
                  alt="Tutor session"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div
              className="overflow-hidden rounded-3xl shadow-[0_16px_48px_rgba(123,104,197,0.20)]">
              <Image
                src={about3}
                alt="Professional development"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="lg:pl-6">
            <motion.div
              variants={fadeUp}
              className="w-10 h-1 rounded-full mb-6 bg-brand-500"/>

            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 text-brand-900 font-serif">
              Accelerate your learning with expert guidance
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-base leading-relaxed mb-8 text-[#6B5FA0]">
              You can start and finish personalized sessions with top tutors in
              under a day — on your schedule. Whether you're preparing for exams,
              building new skills, or advancing your career, the right expert is
              here for you.
            </motion.p>

            <motion.ul variants={stagger} className="space-y-4 mb-10">
              {benefits.map((b) => (
                <motion.li
                  key={b}
                  variants={fadeUp}
                  className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-[rgba(123,104,197,0.14)]">
                    <Check className="w-3 h-3 text-brand-500" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-brand-700">
                    {b}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
