'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import bgImage from '@/public/images/stories.png';

const testimonials = [
  {
    quote: 'Finding the right tutor used to take weeks. With SkillBridge I booked a session in minutes and my grades improved within a month. I believe in learning that actually moves you forward.',
    name: 'Sarah Chen',
    role: 'University Student',
  },
  {
    quote: 'I struggled with calculus for two semesters. My tutor here broke it down in a way no classroom ever did. This platform genuinely changed my academic trajectory.',
    name: 'Marcus Reyes',
    role: 'High School Senior',
  },
  {
    quote: 'As a working professional re-skilling into data science, flexibility was everything. I found a tutor who matched my pace and my schedule. Incredible experience.',
    name: 'Priya Nair',
    role: 'Career Changer',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % testimonials.length);
  };

  const { quote, name, role } = testimonials[index];

  return (
    <div className="my-20 bg-body-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-black leading-tight max-w-2xl mx-auto text-brand-900 font-serif">
            We have 10k+ students &amp; they share success stories
          </h2>
        </div>

        <div className="relative rounded-3xl overflow-hidden h-160">

          <Image
            src={bgImage}
            alt="Student success"
            fill
            className="object-cover object-center"
            priority/>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(45,31,88,0.55)_0%,rgba(45,31,88,0.15)_100%)]"/>

          <div className="absolute inset-0 flex items-center px-10 md:px-16">
            <div className="relative max-w-sm w-full">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={index}
                  custom={dir}
                  initial={{ opacity: 0, x: dir * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: dir * -40 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="rounded-3xl p-8 bg-[linear-gradient(135deg,#7B68C5_0%,#4A3C86_60%,#2D1F58_100%)] shadow-[0_24px_64px_rgba(45,31,88,0.45)]">
                  <div className="mb-5">
                    <svg width="38" height="30" viewBox="0 0 38 30" fill="none">
                      <path
                        d="M0 18.5C0 8.28 6.16 1.96 14 0L16.24 3.22C11.2 5.08 8.12 9.02 7.56 14H14V30H0V18.5ZM22 18.5C22 8.28 28.16 1.96 36 0L38.24 3.22C33.2 5.08 30.12 9.02 29.56 14H36V30H22V18.5Z"
                        fill="rgba(255,255,255,0.35)"
                      />
                    </svg>
                  </div>

                  <p className="text-white text-sm leading-relaxed mb-6 opacity-92">
                    {quote}
                  </p>

                  <p className="text-white font-black text-base">{name}</p>
                  <p className="text-sm mt-0.5 text-[rgba(255,255,255,0.60)]">{role}</p>
                </motion.div>
              </AnimatePresence>
              <div className="absolute -bottom-4 left-14 w-8 h-8 bg-brand-700 [clip-path:polygon(0_0,100%_0,50%_100%)]"/>
            </div>
          </div>

          <div className="absolute bottom-8 left-10 md:left-16 flex items-center gap-4">
            <button onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-[rgba(255,255,255,0.18)] border border-[rgba(255,255,255,0.28)] text-white hover:bg-[rgba(255,255,255,0.30)]"
              aria-label="Previous testimonial">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDir(i > index ? 1 : -1); setIndex(i); }}
                  className={`rounded-full transition-all duration-300 h-2 ${i === index ? 'w-6 bg-white' : 'w-2 bg-[rgba(255,255,255,0.40)]'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all bg-[rgba(255,255,255,0.18)] border border-[rgba(255,255,255,0.28)] text-white hover:bg-[rgba(255,255,255,0.30)]"
              aria-label="Next testimonial">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
