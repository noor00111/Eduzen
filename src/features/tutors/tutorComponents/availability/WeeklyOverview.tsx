import { CalendarRange, ChevronRight, Plus } from 'lucide-react';
import { AvailabilitySlot } from '@/src/types';
import { DAYS_OF_WEEK } from '../../hooks/useAvailability';

interface WeeklyOverviewProps {
  availabilities: AvailabilitySlot[];
  formatTime: (time: string) => string;
}

function getUpcomingWeekDates() {
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - today.getDay());

  return DAYS_OF_WEEK.map((_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
}

export function WeeklyOverview({ availabilities }: WeeklyOverviewProps) {
  const weekDates = getUpcomingWeekDates();
  const totalHours = availabilities.reduce((sum, slot) => {
    const [sh, sm] = slot.startTime.split(':').map(Number);
    const [eh, em] = slot.endTime.split(':').map(Number);
    return sum + (eh * 60 + em - (sh * 60 + sm)) / 60;
  }, 0);

  return (
    <div className="bg-white border border-surface-300 rounded-[1.75rem] px-6 sm:px-8 py-7 shadow-[0_4px_24px_rgba(45,31,88,0.05)]">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
            <CalendarRange className="w-5 h-5 text-brand-600" />
          </div>
          <div>
            <h2 className="font-black text-brand-900 text-lg">Weekly Overview</h2>
            <p className="text-brand-700/50 text-sm hidden sm:block">Quick view of your availability for the upcoming week.</p>
          </div>
        </div>

        <button className="hidden sm:flex items-center gap-1.5 text-xs font-bold text-brand-700 bg-surface-200 hover:bg-surface-300 transition-colors rounded-full px-3.5 py-2 shrink-0">
          This week &bull; {totalHours}h scheduled
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
        {DAYS_OF_WEEK.map((day, dayIndex) => {
          const daySlots = availabilities.filter((slot) => slot.dayOfWeek === dayIndex);
          const hasSlots = daySlots.length > 0;
          const date = weekDates[dayIndex];
          const isToday = date.toDateString() === new Date().toDateString();

          return (
            <div
              key={day}
              className={`rounded-2xl border p-3.5 text-center transition-colors ${
                isToday ? 'border-brand-400 bg-brand-50' : 'border-surface-300 bg-surface-100'
              }`}>
              <p className="text-[11px] font-bold uppercase tracking-wide text-brand-700/50">{day.slice(0, 3)}</p>
              <p className="text-sm font-black text-brand-900 mb-2.5">
                {date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </p>

              <div className="flex items-center justify-center gap-1.5 mb-1">
                <span className={`w-1.5 h-1.5 rounded-full ${hasSlots ? 'bg-emerald-500' : 'bg-surface-400'}`} />
                <span className="text-[11px] font-semibold text-brand-700/60">
                  {hasSlots ? 'Available' : 'No slots'}
                </span>
              </div>
              <p className="text-[11px] text-brand-700/40 mb-3">
                {hasSlots ? `${daySlots.length} slot${daySlots.length > 1 ? 's' : ''}` : ' '}
              </p>

              <button className="w-full flex items-center justify-center gap-1 text-[11px] font-bold text-brand-600 hover:text-brand-700 py-1.5 rounded-lg hover:bg-brand-100 transition-colors">
                <Plus className="w-3 h-3" />
                Add
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
