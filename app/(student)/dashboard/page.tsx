'use client';

import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays } from 'lucide-react';
import { useAuthStore } from '@/src/store/useAuthStore';
import { AccessDenied } from '@/src/components/ui/AccessDenied';
import { useStudentDashboard } from '@/src/features/student/hooks/useStudentDashboard';
import { WelcomeBanner } from '@/src/features/student/studentComponents/dashboard/WelcomeBanner';
import { SessionTimeline } from '@/src/features/student/studentComponents/dashboard/SessionTimeline';
import { EmptyBookings } from '@/src/features/student/studentComponents/dashboard/EmptyBookings';
import { ReviewModal } from '@/src/features/student/studentComponents/dashboard/ReviewModal';
import { Booking } from '@/src/types';

export default function StudentDashboard() {
  const { user } = useAuthStore();
  const {bookings, isLoading, reviewModalOpen, setReviewModalOpen, rating, setRating, comment, setComment, reviewMutation, handleOpenReview} = useStudentDashboard();

  if (!user || user.role !== 'STUDENT') {
    return <AccessDenied role="STUDENT" />;
  }

  const upcomingCount = bookings?.filter((b: Booking) => b.status === 'CONFIRMED').length ?? 0;
  const completedCount = bookings?.filter((b: Booking) => b.status === 'COMPLETED').length ?? 0;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-surface-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
          <WelcomeBanner name={user.name} />
        </motion.div>

        {isLoading ? (
          <div className="bg-white border border-surface-300 rounded-[1.75rem] px-6 sm:px-8 py-8 space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-16 bg-surface-200 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : !bookings?.length ? (
          <EmptyBookings />
        ) : (
          <div className="bg-white border border-surface-300 rounded-[1.75rem] overflow-hidden shadow-[0_4px_24px_rgba(45,31,88,0.05)]">
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 sm:px-8 py-6 border-b border-surface-300">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
                  <CalendarDays className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h2 className="font-black text-brand-900 text-lg">My Learning Dashboard</h2>
                  <p className="text-brand-700/50 text-xs font-medium flex items-center gap-1.5 flex-wrap">
                    <GraduationCap className="w-3.5 h-3.5 shrink-0" />
                    Your upcoming and past tutoring sessions.
                    <span className="text-surface-400">&bull;</span>
                    <span className="font-bold text-brand-700/70">
                      <span className="text-brand-900 font-black">{upcomingCount}</span> upcoming
                    </span>
                    <span className="font-bold text-brand-700/70">
                      <span className="text-brand-900 font-black">{completedCount}</span> completed
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="px-6 sm:px-8 py-6">
              <SessionTimeline bookings={bookings} onReview={handleOpenReview} />
            </div>
          </div>
        )}

        <ReviewModal
          open={reviewModalOpen}
          rating={rating}
          comment={comment}
          isPending={reviewMutation.isPending}
          onClose={() => setReviewModalOpen(false)}
          onRating={setRating}
          onComment={setComment}
          onSubmit={() => reviewMutation.mutate()}
        />
      </div>
    </div>
  );
}
