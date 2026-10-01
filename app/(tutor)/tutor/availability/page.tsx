'use client';

import { motion } from 'framer-motion';
import { CalendarClock } from 'lucide-react';
import { useAuthStore } from '@/src/store/useAuthStore';
import { useAvailability } from '@/src/features/tutors/hooks/useAvailability';
import { AddSlotForm } from '@/src/features/tutors/tutorComponents/availability/AddSlotForm';
import { SlotList } from '@/src/features/tutors/tutorComponents/availability/SlotList';
import { WeeklyOverview } from '@/src/features/tutors/tutorComponents/availability/WeeklyOverview';
import { AccessDenied } from '@/src/components/ui/AccessDenied';

export default function TutorAvailability() {
  const { user } = useAuthStore();
  const {isLoading, availabilities, newSlot, setNewSlot, addSlot, removeSlot, handleSave, formatTime, isSaving} = useAvailability();

  if (!user || user.role !== 'TUTOR') {
    return <AccessDenied role="TUTOR" />;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-surface-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8">
          <p className="text-brand-500 text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Teach &bull; Inspire &bull; Make an impact
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900 font-serif tracking-tight mb-2">
            My Availability
          </h1>
          <p className="text-brand-700/60 font-medium flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-brand-400" />
            Set your teaching schedule and availability for bookings.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="space-y-6">
            <div className="h-48 bg-white border border-surface-300 rounded-[1.75rem] animate-pulse" />
            <div className="h-72 bg-white border border-surface-300 rounded-[1.75rem] animate-pulse" />
            <div className="h-56 bg-white border border-surface-300 rounded-[1.75rem] animate-pulse" />
          </div>
        ) : (
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <AddSlotForm newSlot={newSlot} setNewSlot={setNewSlot} onAdd={addSlot} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <SlotList
                availabilities={availabilities}
                onRemove={removeSlot}
                onSave={handleSave}
                isSaving={isSaving}
                formatTime={formatTime}
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <WeeklyOverview availabilities={availabilities} formatTime={formatTime} />
            </motion.div>
          </div>
        )}

      </div>
    </div>
  );
}
