import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/src/components/ui/Button';
import { Clock, Save, Trash2, CalendarX2 } from 'lucide-react';
import { AvailabilitySlot } from '@/src/types';
import { DAYS_OF_WEEK } from '../../hooks/useAvailability';

interface SlotListProps {
  availabilities: AvailabilitySlot[];
  onRemove: (index: number) => void;
  onSave: () => void;
  isSaving: boolean;
  formatTime: (time: string) => string;
}

export function SlotList({ availabilities, onRemove, onSave, isSaving, formatTime }: SlotListProps) {
  return (
    <div className="bg-white border border-surface-300 rounded-[1.75rem] px-6 sm:px-8 py-7 shadow-[0_4px_24px_rgba(45,31,88,0.05)]">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-brand-100 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5 text-brand-600" />
          </div>
          <div>
            <h2 className="font-black text-brand-900 text-lg">Current Availability ({availabilities.length} slots)</h2>
            <p className="text-brand-700/50 text-sm hidden sm:block">Your added availability slots will appear here.</p>
          </div>
        </div>

        <Button
          onClick={onSave}
          className="rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold shrink-0"
          isLoading={isSaving}>
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      {availabilities.length === 0 ? (
        <div className="text-center py-14">
          <div className="w-16 h-16 bg-surface-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <CalendarX2 className="w-7 h-7 text-brand-400" />
          </div>
          <h3 className="font-black text-brand-900 mb-1">No availability set</h3>
          <p className="text-brand-700/50 text-sm max-w-xs mx-auto">
            Add your first availability slot above to start accepting bookings.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <AnimatePresence>
            {availabilities.map((slot, index) => (
              <motion.div
                key={`${slot.dayOfWeek}-${slot.startTime}-${slot.endTime}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex items-center justify-between p-4 bg-surface-100 rounded-2xl border border-surface-300 hover:bg-surface-200/60 transition-colors">

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-brand-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-900 text-sm">{DAYS_OF_WEEK[slot.dayOfWeek]}</p>
                    <p className="text-brand-700/60 text-sm">
                      {formatTime(slot.startTime)} &ndash; {formatTime(slot.endTime)}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onRemove(index)}
                  className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
