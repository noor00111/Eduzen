import { BookOpen, CheckCircle2 } from 'lucide-react';

interface StatsCardsProps {
  upcomingCount: number;
  completedCount: number;
}

export function StatsCards({ upcomingCount, completedCount }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
      <div className="group relative rounded-[1.75rem] overflow-hidden px-10 py-8 border border-accent-500 shadow-[0_16px_40px_rgba(74,60,134,0.25)]">
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-accent-500/8" />
        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-purple-800/15 flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <p className="text-md font-semibold">Upcoming Sessions</p>
            <p className="text-xs font-medium text-gray-500">Classes you&apos;re scheduled for</p>
            <p className="text-5xl font-black mt-1">{upcomingCount}</p>
          </div>
        </div>
      </div>

      <div className="group relative rounded-[1.75rem] overflow-hidden bg-white border border-surface-400 px-10 py-8 shadow-[0_4px_24px_rgba(45,31,88,0.06)]">
        <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-emerald-50" />
        <div className="relative flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <p className="text-brand-700/60 text-sm font-semibold">Completed Sessions</p>
            <p className="text-brand-700/40 text-xs font-medium">Total sessions finished</p>
            <p className="text-5xl font-black text-brand-900 mt-1">{completedCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
