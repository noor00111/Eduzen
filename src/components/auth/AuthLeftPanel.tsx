'use client';
import { motion } from 'framer-motion';
 

export function AuthLeftPanel({ children }: {children: React.ReactNode}) {
  return (
    <motion.div
      initial={{ x: -60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="hidden lg:flex lg:w-1/2 justify-between items-center p-16 relative overflow-hidden bg-[linear-gradient(145deg,var(--color-brand-900)_0%,var(--color-brand-500)_55%,var(--color-brand-300)_100%)]">
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3 bg-body-500"/>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 translate-y-1/3 -translate-x-1/3 bg-accent-300"/>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2 bg-body-500"/>
      <div className="relative z-10" />
      {children}
    </motion.div>
  );
}