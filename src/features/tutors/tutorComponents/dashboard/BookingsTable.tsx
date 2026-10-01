import { BookingsTableProps } from '@/src/types';
import { format } from 'date-fns';
import { CalendarX2 } from 'lucide-react';

export function BookingsTable({ bookings, isLoading }: BookingsTableProps) {
  if (isLoading) {
    return (
      <div className="animate-pulse space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-20 bg-surface-200 rounded-2xl" />
        ))}
      </div>
    );
  }

  if (!bookings || bookings.length === 0) {
    return (
      <div className="p-12 text-center rounded-[1.75rem] border-2 border-dashed border-surface-400 bg-surface-100/60">
        <div className="w-14 h-14 rounded-2xl bg-surface-300 flex items-center justify-center mx-auto mb-4">
          <CalendarX2 className="w-6 h-6 text-brand-400" />
        </div>
        <p className="font-bold text-brand-900 mb-1">No sessions booked yet</p>
        <p className="text-brand-700/50 text-sm max-w-xs mx-auto">
          Keep your profile and availability up to date so students can find and book you.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[1.75rem] border border-surface-300 shadow-[0_4px_24px_rgba(45,31,88,0.06)] overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-brand-700/50 uppercase font-bold text-[11px] tracking-wide border-b border-surface-300">
            <tr>
              <th className="px-12 py-6">Student</th>
              <th className="px-12 py-6">Date &amp; Time</th>
              <th className="px-12 py-6">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-300">
            {bookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-surface-100/60 transition-colors">
                <td className="px-6 py-4 font-bold text-brand-900 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-xs font-black shrink-0">
                    {booking.student.name.charAt(0)}
                  </div>
                  {booking.student.name}
                </td>
                <td className="px-6 py-4 text-brand-700/70">
                  {format(new Date(booking.date), 'MMM dd, yyyy')}
                  <span className="text-brand-700/30 mx-1.5">&bull;</span>
                  {format(new Date(booking.date), 'h:mm a')}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                      booking.status === 'COMPLETED'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-brand-100 text-brand-700'
                    }`}>
                    {booking.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
