'use client';

import Link from 'next/link';
import { useAuthStore } from '@/src/store/useAuthStore';
import { Button } from '../ui/Button';
import { LogOut, User as UserIcon, BookOpen, Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const { user, logout, isHydrated } = useAuthStore();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => { logout(); setMobileOpen(false); router.push('/'); };
  const close = () => setMobileOpen(false);
  const linkClass = 'text-sm font-bold text-brand-800/70 hover:text-brand-600 transition-colors';

  const renderLinks = (mobile = false) => {
    if (!isHydrated) return null;
    const container = mobile ? 'flex flex-col gap-5' : 'flex items-center gap-8';

    const logoutBtn = (
      <button key="logout" onClick={handleLogout}
        className="flex items-center gap-2 text-sm font-bold text-brand-800/70 hover:text-brand-600 transition-colors">
        <LogOut className="w-4 h-4" /> Logout
      </button>
    );

    if (!user) return (
      <div className={mobile ? 'flex flex-col gap-5' : 'flex items-center gap-6'}>
        <Link href="/login" onClick={close} className={linkClass}>Log in</Link>
        <Link href="/register" onClick={close}>
          <Button size="sm" className={`rounded-full font-bold ${mobile ? 'w-full' : ''}`}>
            Get Started
          </Button>
        </Link>
      </div>
    );

    if (user.role === 'STUDENT') return (
      <div className={container}>
        <Link href="/dashboard" onClick={close} className={linkClass}>Dashboard</Link>
        <Link href="/dashboard/profile" onClick={close} className={linkClass}>Profile</Link>
        {logoutBtn}
      </div>
    );

    if (user.role === 'TUTOR') return (
      <div className={container}>
        <Link href="/tutor/dashboard" onClick={close} className={linkClass}>My Sessions</Link>
        <Link href="/tutor/availability" onClick={close} className={linkClass}>Calendar</Link>
        <Link href="/tutor/profile" onClick={close}>
          <Button variant="soft" size="sm" className="rounded-full font-bold">
            <UserIcon className="w-4 h-4 mr-2" /> Profile
          </Button>
        </Link>
        {logoutBtn}
      </div>
    );

    if (user.role === 'ADMIN') return (
      <div className={container}>
        <Link href="/admin" onClick={close} className={linkClass}>Dashboard</Link>
        <Link href="/admin/users" onClick={close} className={linkClass}>Users</Link>
        <Link href="/admin/bookings" onClick={close} className={linkClass}>Bookings</Link>
        <Link href="/admin/categories" onClick={close} className={linkClass}>Categories</Link>
        {logoutBtn}
      </div>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#F5FAE1]/80 backdrop-blur-md border-b border-brand-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-brand-600 text-white p-2 rounded-2xl shadow-lg shadow-brand-600/20 transition-all duration-300">
              <BookOpen className="text-accent-300 w-6 h-6 group-hover:rotate-12 transition-transform" />
            </div>
            <span className="font-black text-2xl tracking-tighter text-brand-900 group-hover:text-brand-600 transition-colors">
              Eduzen
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-12">
            {(!user || user?.role === 'STUDENT') && (
              <Link href="/tutors" className={linkClass}>Browse</Link>
            )}
            {renderLinks()}
          </div>
          <button
            className="md:hidden p-2 rounded-xl text-accent-400 hover:bg-brand-100/60 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#F5FAE1]/95 backdrop-blur-md border-t border-brand-100/40">
            <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-5">
              {(!user || user?.role === 'STUDENT') && (
                <Link href="/tutors" onClick={close} className={linkClass}>Browse</Link>
              )}
              {renderLinks(true)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
