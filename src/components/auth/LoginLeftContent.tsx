'use client';

import { motion } from 'framer-motion';
export function LoginLeftContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          
        <h1
          className="text-5xl font-black leading-tight mb-6 text-body-500">
          Continue Your<br />
          Learning Journey!
        </h1>

        <p className="text-base font-medium leading-relaxed text-gray-300">
          Become a member of a progressive learning platform where learners can meet knowledgeable tutors, receive individualized instruction, and develop the self-assurance they need to succeed in school, the workplace, and more.        </p>
      </motion.div>
    </>
  );
}
