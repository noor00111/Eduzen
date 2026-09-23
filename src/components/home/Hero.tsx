'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Users, GraduationCap } from 'lucide-react';
import { fadeUp, stagger } from '@/src/lib/animation';
import heroImage from '@/public/images/edu-hero.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <div
      className="min-h-screen overflow-hidden flex flex-col lg:flex-row items-center relative"
      style={{ backgroundColor: '#F5F0FF' }}>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="blob-drift absolute -top-24 -left-24 w-[560px] h-[560px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(212,184,216,0.55) 0%, transparent 70%)' }}
        />
        <div
          className="blob-drift-b absolute top-1/3 -right-32 w-[640px] h-[640px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(154,142,209,0.40) 0%, transparent 70%)' }}
        />
        <div
          className="blob-drift-c absolute -bottom-16 left-1/4 w-[420px] h-[420px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(237,232,250,0.60) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-10 w-full flex-1 relative z-10">
        <div className="max-w-4xl">
          <motion.div initial="hidden" animate="visible" variants={stagger}>

            <motion.div variants={fadeUp} className="mb-8">
              <span
                className="inline-flex items-center px-7 py-3 rounded-full border text-sm font-bold tracking-[0.25em] uppercase backdrop-blur-xl"
                style={{
                  borderColor: 'rgba(123,104,197,0.20)',
                  background: 'linear-gradient(135deg, rgba(212,184,216,0.25), rgba(255,255,255,0.60))',
                  color: '#4A3C86',
                  boxShadow: '0 10px 30px rgba(154,142,209,0.14)',
                }}>
                Learn. Grow. Succeed!
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[0.95] tracking-[-0.05em] mb-8"
              style={{ fontFamily: 'var(--font-playfair)', color: '#2D1F58' }}>
              Your Journey to Success
              Starts Smoothly Here!
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
              style={{ color: '#6B5FA0' }}>
              Get in touch with knowledgeable tutors, schedule
              individualized lessons, and expedite your educational
              process, all in one location!
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 mb-8">
              <Link href="/register">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-lg text-white transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #7B68C5 0%, #6255A8 100%)',
                    boxShadow: '0 12px 40px rgba(123,104,197,0.38)',
                  }}>
                  Get Started
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </motion.button>
              </Link>

              <Link href="/tutors">
                <motion.button
                  whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.96)' }}
                  whileTap={{ scale: 0.97 }}
                  className="px-10 py-5 rounded-2xl font-black text-lg border backdrop-blur-xl transition-all shadow-lg bg-white/60"
                  style={{ color: '#2D1F58', borderColor: '#D4B8D8' }}>
                  Find a Tutor
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center px-6 pb-12 lg:pb-0 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="relative">

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -left-6 rounded-2xl px-5 py-4 z-20 hidden md:block"
            style={{
              background: 'rgba(255,255,255,0.90)',
              backdropFilter: 'blur(14px)',
              border: '1px solid rgba(212,184,216,0.35)',
              boxShadow: '0 12px 40px rgba(123,104,197,0.15)',
            }}>
            <p className="text-sm font-medium" style={{ color: '#9A8ED1' }}>
              Trusted by Students
            </p>
            <h4 className="text-xl font-black" style={{ color: '#2D1F58' }}>
              10K+ Learners
            </h4>
          </motion.div>

          <div
            className="overflow-hidden rounded-full"
            style={{ boxShadow: '0 30px 80px rgba(123,104,197,0.32)' }}>
            <Image
              src={heroImage}
              alt="hero image"
              width={620}
              height={700}
              priority
              className="object-cover hover:scale-105 transition-transform duration-700" />
          </div>

          <div
            className="ring-pulse absolute inset-0 rounded-full pointer-events-none -z-10"
            style={{ border: '2px solid rgba(154,142,209,0.30)', transform: 'scale(1.10)' }}
          />
          <div
            className="ring-pulse-slow absolute inset-0 rounded-full pointer-events-none -z-10"
            style={{ border: '2px solid rgba(212,184,216,0.22)', transform: 'scale(1.22)' }}
          />
        </motion.div>
      </div>
    </div>
  );
}
