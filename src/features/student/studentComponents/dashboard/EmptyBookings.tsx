import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/src/components/ui/Button';
import { Calendar } from 'lucide-react';

export function EmptyBookings() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-16 px-6 bg-white border border-surface-300 rounded-[1.75rem] shadow-[0_4px_24px_rgba(45,31,88,0.05)]"
    >
      <div className="w-16 h-16 bg-surface-200 rounded-2xl flex items-center justify-center mx-auto mb-5">
        <Calendar className="w-7 h-7 text-brand-400" />
      </div>
      <h3 className="font-black text-brand-900 text-xl mb-1.5">No scheduled sessions</h3>
      <p className="text-brand-700/50 text-sm mb-7 max-w-xs mx-auto">
        You don&apos;t have any past or upcoming bookings yet. Ready to start learning?
      </p>
      <Link href="/tutors">
        <Button className="rounded-full bg-brand-600 hover:bg-brand-700 text-white font-bold px-7 shadow-lg shadow-brand-600/20">
          Find an Expert Tutor
        </Button>
      </Link>
    </motion.div>
  );
}
