'use client';

import { motion } from 'framer-motion';
import { format, isPast, isToday } from 'date-fns';
import { Clock, Star, Video, ChevronRight, CalendarDays } from 'lucide-react';
import { Booking } from '@/src/types';

const ROW_TINTS = ['bg-surface-200/50', 'bg-brand-50/60', 'bg-accent-100/40'];

interface SessionTimelineProps {
  bookings: Booking[];
  onReview: (tutorId: string) => void;
}

function getMeetingUrl(bookingId: string) {
  return `https://meet.jit.si/eduzen-${bookingId}`;
}

export function SessionTimeline({ bookings, onReview }: SessionTimelineProps) {
  const sorted = [...bookings].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="relative">
      <svg className="absolute left-[18px] top-2 bottom-2 w-px h-[calc(100%-1rem)]" aria-hidden="true">
        <motion.line
          x1="0.5" y1="0" x2="0.5" y2="100%"
          stroke="var(--color-surface-400)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      </svg>

      <div className="space-y-2">
        {sorted.map((booking, index) => {
          const date = new Date(booking.date);
          const isCompleted = booking.status === 'COMPLETED';
          const isCancelled = booking.status === 'CANCELLED';
          const isPastSession = isPast(date) && !isToday(date);
          const dayLabel = isToday(date) ? 'Today' : format(date, 'MMM d');

          const nodeColor = isCompleted
            ? 'bg-emerald-500 ring-emerald-100'
            : isCancelled
            ? 'bg-surface-400 ring-surface-200'
            : isPastSession
            ? 'bg-surface-400 ring-surface-200'
            : 'bg-brand-600 ring-brand-100';

          return (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative flex gap-5 pl-0">
              
              <div className="relative shrink-0 w-9 flex justify-center pt-1">
                <span className={`relative z-10 w-[14px] h-[14px] rounded-full ring-4 ${nodeColor}`} />
              </div>

              <div className={`flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-2xl px-4 py-3.5 mb-2 ${ROW_TINTS[index % ROW_TINTS.length]}`}>
                <div className="sm:w-20 shrink-0">
                  <p className={`text-xs font-black uppercase tracking-wide flex items-center gap-1.5 ${isToday(date) ? 'text-brand-600' : 'text-brand-700/40'}`}>
                    <CalendarDays className="w-3 h-3" />
                    {dayLabel}
                  </p>
                  <p className="text-[11px] text-brand-700/40 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" />
                    {format(date, 'h:mm a')}
                  </p>
                </div>

                <div className="flex-1 min-w-0 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center font-black text-sm shrink-0">
                    {booking.tutor.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-brand-900 text-sm truncate">{booking.tutor.name}</p>
                    <p className={`text-xs font-semibold ${
                      isCompleted ? 'text-emerald-600' : isCancelled ? 'text-brand-700/40' : 'text-brand-500'
                    }`}>
                      {isCancelled ? 'Cancelled' : isCompleted ? 'Completed' : isPastSession ? 'Session ended' : 'Confirmed'}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 sm:ml-auto">
                  {!isCompleted && !isCancelled && !isPastSession && (
                    <motion.a
                      href={getMeetingUrl(booking.id)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-sm shadow-brand-600/20 transition-colors">
                      <Video className="w-3.5 h-3.5" />
                      Join Call
                    </motion.a>
                  )}
                  {isCompleted && (
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => onReview(booking.tutorId)}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      Leave Feedback
                    </motion.button>
                  )}
                  {isCancelled && (
                    <span className="text-xs font-semibold text-brand-700/40 px-1">No actions available</span>
                  )}
                </div>

                <ChevronRight className="hidden sm:block w-4 h-4 text-brand-700/20 shrink-0" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
