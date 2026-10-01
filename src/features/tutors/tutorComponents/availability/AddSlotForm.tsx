import { Plus, CalendarDays, Clock, ShieldCheck } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { AvailabilitySlot } from '@/src/types';
import { DAYS_OF_WEEK } from '../../hooks/useAvailability';

interface AddSlotFormProps {
  newSlot: AvailabilitySlot;
  setNewSlot: (slot: AvailabilitySlot) => void;
  onAdd: () => void;
}

export function AddSlotForm({ newSlot, setNewSlot, onAdd }: AddSlotFormProps) {
  return (
    <div className="bg-white border border-surface-300 rounded-[1.75rem] px-6 sm:px-8 py-7 shadow-[0_4px_24px_rgba(45,31,88,0.05)]">
      <div className="flex items-start justify-between gap-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
            <CalendarDays className="w-5 h-5 text-brand-600" />
          </div>
          <div>
            <h2 className="font-black text-brand-900 text-lg">Add Availability Slot</h2>
            <p className="text-brand-700/50 text-sm">Choose the day, start time and end time for your available slot.</p>
          </div>
        </div>

        <div className="hidden sm:flex items-start gap-2 text-right shrink-0 max-w-40">
          <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
          <div>
            <p className="text-xs font-bold text-brand-900">Be consistent</p>
            <p className="text-[11px] text-brand-700/50 leading-snug">Regular slots help students plan and book with confidence.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_1fr_1fr_auto] gap-3">
        <div>
          <label className="block text-[11px] font-bold text-brand-700/50 uppercase tracking-widest mb-1.5">
            Day
          </label>
          <div className="relative">
            <CalendarDays className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400 pointer-events-none" />
            <select
              value={newSlot.dayOfWeek}
              onChange={(e) => setNewSlot({ ...newSlot, dayOfWeek: parseInt(e.target.value) })}
              className="w-full rounded-xl border border-surface-400 pl-10 pr-3 py-3 text-sm font-semibold text-brand-900 bg-surface-100 focus:outline-none focus:border-brand-400 transition-colors appearance-none">
              {DAYS_OF_WEEK.map((day, index) => (
                <option key={index} value={index}>{day}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-brand-700/50 uppercase tracking-widest mb-1.5">
            Start Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400 pointer-events-none" />
            <input
              type="time"
              value={newSlot.startTime}
              onChange={(e) => setNewSlot({ ...newSlot, startTime: e.target.value })}
              className="w-full rounded-xl border border-surface-400 pl-10 pr-3 py-3 text-sm font-semibold text-brand-900 bg-surface-100 focus:outline-none focus:border-brand-400 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold text-brand-700/50 uppercase tracking-widest mb-1.5">
            End Time
          </label>
          <div className="relative">
            <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-400 pointer-events-none" />
            <input
              type="time"
              value={newSlot.endTime}
              onChange={(e) => setNewSlot({ ...newSlot, endTime: e.target.value })}
              className="w-full rounded-xl border border-surface-400 pl-10 pr-3 py-3 text-sm font-semibold text-brand-900 bg-surface-100 focus:outline-none focus:border-brand-400 transition-colors"
            />
          </div>
        </div>

        <div className="flex items-end">
          <Button
            onClick={onAdd}
            className="w-full sm:w-auto h-11.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold px-6">
            <Plus className="w-4 h-4 mr-1.5" />
            Add Slot
          </Button>
        </div>
      </div>
    </div>
  );
}
