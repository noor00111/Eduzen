'use client';

import { useAuthStore } from '@/src/store/useAuthStore';
import { useDashboard } from '@/src/features/tutors/hooks/useDashboard';
import { StatsCards } from '@/src/features/tutors/tutorComponents/dashboard/StatsCards';
import { BookingsTable } from '@/src/features/tutors/tutorComponents/dashboard/BookingsTable';
import { AccessDenied } from '@/src/components/ui/AccessDenied';
import { format } from 'date-fns';
import { GraduationCap, Sparkles, Star } from 'lucide-react';

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 18) return 'Good afternoon';
  return 'Good evening';
}

export default function TutorDashboard() {
  const { user } = useAuthStore();
  const { bookings, isLoading, upcomingCount, completedCount } = useDashboard();
  const firstName = user?.name?.split(' ')[0];

  if (!user || user.role !== 'TUTOR') {
    return <AccessDenied role="TUTOR" />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <div className="relative rounded-4xl overflow-hidden mb-8 px-6 sm:px-10 py-9 sm:py-11 border border-blue-300">
        <GraduationCap className="absolute -right-6 -top-10 w-56 h-56 text-brand-500/10 rotate-12" strokeWidth={1} />
        <Sparkles className="absolute right-16 bottom-8 w-8 h-8 text-accent-400/40" strokeWidth={1.5} />
        <Sparkles className="absolute right-44 top-10 w-5 h-5 text-accent-400/30" strokeWidth={1.5} />
        <Star className="absolute right-8 top-20 w-4 h-4 fill-accent-400/25 text-accent-400/25" />
        <Star className="absolute right-64 bottom-14 w-3 h-3 fill-brand-400/30 text-brand-400/30" />
        <Sparkles className="absolute right-28 top-1/2 w-3.5 h-3.5 text-brand-400/25" strokeWidth={1.5} />

        <div className="relative p-6">
          <p className="text-sm font-semibold mb-2">
            {getGreeting()}, {firstName}!
          </p>
          <h1 className="text-3xl sm:text-4xl font-black font-serif leading-tight max-w-lg">
            Your Teaching Journey Matters!
          </h1>
          <p className="text-sm mt-2 max-w-md">
            Here&apos;s what&apos;s ahead — keep the momentum going.
          </p>
        </div>
      </div>

      <StatsCards upcomingCount={upcomingCount} completedCount={completedCount} />

      <div className="flex items-center justify-between mt-2 mb-6 px-3">
        <h2 className="text-xl font-black text-brand-900">Your Teaching Schedule</h2>
        <span className="text-sm font-semibold text-brand-700/50">
          {format(new Date(), 'EEEE, MMM d')}
        </span>
      </div>

      <BookingsTable bookings={bookings} isLoading={isLoading} />
    </div>
  );
}
