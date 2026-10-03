'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { fadeUp, stagger } from '@/src/lib/animation';
import { steps } from '@/src/utils/steps';
import findImage from '@/public/images/find.png';

const STEP_TEXT_COLORS = ['text-brand-500', 'text-[#22C55E]', 'text-[#F59E0B]'];
const STEP_BG_COLORS = ['bg-[rgba(123,104,197,0.12)]', 'bg-[rgba(34,197,94,0.12)]', 'bg-[rgba(245,158,11,0.12)]'];

export default function FindTutor() {
  return (
    <div className="mt-24 overflow-hidden bg-[#F5F0FF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 items-stretch">
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="flex flex-col justify-between gap-8">
            <div>
              <motion.h2
                variants={fadeUp}
                className="text-5xl font-black leading-tight mb-6 text-brand-900 font-serif">
                Find Your Perfect Tutor
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-base text-justify leading-relaxed max-w-md mb-5 text-[#6B5FA0]">
                A smarter way to connect with expert tutors designed to remove
                the guesswork from learning and replace it with clarity,
                confidence, and real progress.
              </motion.p>

              <motion.p
                variants={fadeUp}
                className="text-base text-justify leading-relaxed max-w-md text-[#6B5FA0]">
                No complicated processes, no wasted time just a seamless experience
                that delivers powerful, measurable results. Whether you're improving grades,
                mastering new skills, or preparing for exams, everything becomes easier
                and more effective!
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex justify-center items-center w-95">
              <Image src={findImage}
                alt="Find your perfect tutor"
                className="w-full h-8/12 object-cover"
                priority/>
          </motion.div>

          <motion.div initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="space-y-4">

            {steps.map(({ icon: Icon, title, description, step }, i) => {
              return (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{x: 4, boxShadow: "0 12px 40px rgba(123,104,197,0.12)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white shadow-[0_4px_20px_rgba(123,104,197,0.07)] border border-[rgba(212,184,216,0.30)]">

                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${STEP_BG_COLORS[i]}`}>
                    <Icon
                      className={`w-5 h-5 ${STEP_TEXT_COLORS[i]}`}
                      strokeWidth={2}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-base mb-1 text-brand-900">
                      {title}
                    </h3>
                    <p className="text-xs leading-relaxed text-brand-400">
                      {description}
                    </p>
                  </div>

                  <span className={`font-black text-sm shrink-0 ${STEP_TEXT_COLORS[i]}`}>
                    {step}
                  </span>
                </motion.div>
              );
            })}

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-semibold bg-[rgba(123,104,197,0.07)] text-[#6B5FA0]">
              <ShieldCheck className="w-4 h-4 text-brand-500" />
              Safe &bull; Verified &bull; Student Focused
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
