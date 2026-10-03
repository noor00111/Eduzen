'use client';

import { use } from 'react';
import Image from 'next/image';
import { Star, BookOpen, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTutorProfile } from '@/src/features/tutors/hooks/useTutor';
import { fadeUp, stagger } from '@/src/lib/animation';
import { TutorInfoPanel } from '@/src/features/tutors/tutorComponents/tutorDetails/InfoPanel';
import { TutorBookingCard } from '@/src/features/tutors/tutorComponents/tutorDetails/BookingCard';


export default function TutorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const {user, tutor, isLoading, selectedDate, setSelectedDate, selectedTime, setSelectedTime, bookMutation, handleBooking} = useTutorProfile(id);

  if (isLoading) return (
    <div className="min-h-screen flex items-center justify-center bg-surface-200">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 rounded-full border-4 border-t-transparent border-brand-500"
      />
    </div>
  );

  if (!tutor) return (
    <div className="min-h-screen flex items-center justify-center bg-surface-200">
      <p className="text-xl font-bold text-brand-500">Tutor not found.</p>
    </div>
  );

  return (
    <div className="min-h-screen relative overflow-hidden bg-surface-200">

      <div className="relative overflow-hidden bg-[linear-gradient(135deg,#2D1F58_0%,#4A3C86_55%,#6255A8_100%)]">
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full bg-white/6" />
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-accent-500/10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
            <motion.div variants={fadeUp} custom={0} className="relative shrink-0 mx-auto sm:mx-0">
              <motion.div
                className="absolute -inset-2 rounded-[2rem] bg-brand-500/25"
                animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.15, 0.35] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-[1.75rem] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.25)] ring-1 ring-white/20 flex items-center justify-center text-5xl font-black text-white bg-[linear-gradient(135deg,#8B5CF6,#A78BFA)]">
                {tutor.photoUrl ? (
                  <Image src={tutor.photoUrl} alt={tutor.user.name} fill className="object-cover" priority />
                ) : (
                  tutor.user.name.charAt(0).toUpperCase()
                )}
              </div>
            </motion.div>

            <div className="flex-1 text-center sm:text-left min-w-0">
              <motion.div variants={fadeUp} custom={1} className="flex items-center gap-2 justify-center sm:justify-start mb-2">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent-300">Expert Tutor</span>
              </motion.div>

              <motion.h1
                variants={fadeUp} custom={2}
                className="text-3xl sm:text-4xl font-black tracking-tight mb-3 text-white font-serif truncate">
                {tutor.user.name}
              </motion.h1>

              <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-2.5 justify-center sm:justify-start mb-4">
                <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-bold bg-white/10 text-white border border-white/15">
                  <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                  {tutor.rating.toFixed(1)}
                  <span className="text-white/50 font-medium">({tutor.totalReviews})</span>
                </span>
                <span className="flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-bold bg-white/10 text-white border border-white/15">
                  <span className="font-black">${tutor.hourlyRate}</span>/hr
                </span>
              </motion.div>

              <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {tutor.subjects.map((s: { id: string; name: string }) => (
                  <motion.span
                    key={s.id}
                    whileHover={{ scale: 1.06 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-white/10 text-white/90 border border-white/15">
                    <BookOpen className="w-3 h-3" />
                    {s.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20 -mt-20">
        <TutorInfoPanel tutor={tutor} />
        <TutorBookingCard
          tutor={tutor}
          currentUser={user}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          bookMutation={bookMutation}
          handleBooking={handleBooking}
        />
      </div>
    </div>
  );
}
