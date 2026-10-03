'use client';

import { CalendarDays, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TutorBookingCardProps} from '@/src/types';
import { DAYS } from '../../hooks/useTutor';



export function TutorBookingCard({tutor, currentUser, selectedDate, setSelectedDate, selectedTime, setSelectedTime, bookMutation, handleBooking}: TutorBookingCardProps) {

  return (
    <motion.div className="lg:col-span-1"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}>

      <div className="sticky top-24 rounded-[1.75rem] overflow-hidden bg-white border border-surface-300 shadow-[0_12px_40px_rgba(45,31,88,0.10)]">
        <div className="relative px-6 sm:px-8 py-6 overflow-hidden bg-[linear-gradient(120deg,#4A3C86,#7B68C5)]">
          <div className="absolute -top-4 -right-6 w-28 h-28 rounded-full bg-white/8" />
          <h3 className="text-xl font-black relative z-10 text-white">Book a Session</h3>
          <p className="text-sm font-medium mt-1 relative z-10 text-white/65">
            Reserve your spot with {tutor.user.name.split(' ')[0]}
          </p>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <CalendarDays className="w-4 h-4 text-brand-500" />
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-700/50">Availability</p>
            </div>
            {tutor.availabilities?.length ? (
              <div className="space-y-2">
                {tutor.availabilities.map((avail) => (
                  <div key={avail.id}
                    className="flex justify-between items-center px-4 py-3 rounded-2xl text-sm bg-surface-200/60 border border-surface-300">
                    <span className="font-bold text-brand-900">{DAYS[avail.dayOfWeek]}</span>
                    <span className="flex items-center gap-1 font-bold text-xs px-2.5 py-1 rounded-full bg-brand-100 text-brand-700">
                      <Clock className="w-3 h-3" />
                      {avail.startTime} – {avail.endTime}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm p-4 rounded-2xl font-medium bg-surface-200/60 text-brand-700/50">
                No availability set yet.
              </p>
            )}
          </div>
          <div className="space-y-4 border-t border-surface-300 pt-5">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.15em] mb-2 text-brand-700/50">
                Select Date
              </label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full h-12 rounded-2xl px-4 text-sm outline-none transition-colors bg-surface-100 text-brand-900 border border-surface-400 focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.15em] mb-2 text-brand-700/50">
                Select Time
              </label>
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className="w-full h-12 rounded-2xl px-4 text-sm outline-none transition-colors bg-surface-100 text-brand-900 border border-surface-400 focus:border-brand-500"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBooking}
            disabled={bookMutation.isPending || !tutor.availabilities?.length}
            className="w-full h-14 rounded-2xl font-black text-base flex items-center justify-center gap-2 shadow-lg shadow-brand-600/20 transition-opacity disabled:opacity-60 bg-brand-600 hover:bg-brand-700 text-white">
            {bookMutation.isPending ? (
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                className="w-5 h-5 rounded-full border-2 border-t-transparent border-white" />
            ) : (
              <>Confirm Booking <ChevronRight className="w-5 h-5" /></>
            )}
          </motion.button>

          {currentUser?.role === 'TUTOR' && (
            <p className="text-center text-xs font-semibold px-4 py-2.5 rounded-xl bg-surface-200/60 text-brand-700/60">
              Tutors cannot book sessions with other tutors.
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
