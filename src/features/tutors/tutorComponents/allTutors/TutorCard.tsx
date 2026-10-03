import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { TutorCardProps } from '@/src/types';

export function TutorCard({ tutor }: TutorCardProps) {
  const visibleSubjects = tutor.subjects.slice(0, 2);
  const extraCount = tutor.subjects.length - visibleSubjects.length;

  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="h-full">
      <Card className="group relative h-full overflow-hidden rounded-4xl border border-white/30 bg-white/55 backdrop-blur-2xl shadow-[0_12px_50px_rgba(33,94,97,0.10)] transition-[box-shadow,border-color] duration-500 hover:shadow-[0_20px_80px_rgba(33,94,97,0.18)] hover:border-brand-200/60">
        <div className="relative h-48 w-full overflow-hidden bg-[linear-gradient(150deg,#4A3C86,#7B68C5)]">
          {tutor.photoUrl ? (
            <Image
              src={tutor.photoUrl}
              alt={tutor.user.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-6xl font-black text-white/90">
              {tutor.user.name.charAt(0)}
            </div>
          )}

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(45,31,88,0.05)_0%,rgba(45,31,88,0.75)_100%)]" />

          <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/85 backdrop-blur-md px-3 py-1.5 text-sm font-bold text-brand-700 shadow-md">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            {tutor.rating.toFixed(1)}
          </div>

          <div className="absolute bottom-0 inset-x-0 p-5">
            <h3 className="text-xl font-black text-white tracking-tight leading-tight drop-shadow-sm">
              {tutor.user.name}
            </h3>
          </div>
        </div>

        <CardContent className="relative z-10 px-6 pt-5 pb-6 flex flex-col flex-1">
          <div className="flex flex-wrap gap-2 mb-4">
            {visibleSubjects.map((s) => (
              <span
                key={s.id}
                className="rounded-full border border-brand-200 bg-brand-50/70 px-3 py-1 text-xs font-semibold text-brand-700"
              >
                {s.name}
              </span>
            ))}
            {extraCount > 0 && (
              <span className="rounded-full border border-surface-400 bg-surface-200/70 px-3 py-1 text-xs font-semibold text-brand-700/60">
                +{extraCount} more
              </span>
            )}
          </div>

          <p className="text-[14px] leading-relaxed text-brand-700/75 line-clamp-3 flex-1">
            {tutor.bio || 'Professional tutor dedicated to helping students achieve academic success through personalized learning experiences.'}
          </p>

          <div className="mt-5 pt-5 border-t border-brand-200/50 flex items-center justify-between">
            <div className="flex items-end gap-1">
              <span className="text-2xl font-black text-brand-900">
                ${tutor.hourlyRate}
              </span>
              <span className="text-xs text-brand-600 mb-1">/hr</span>
            </div>

            <Link href={`/tutors/${tutor.id}`}>
              <Button className="group/btn h-11 rounded-2xl px-5 bg-linear-to-r from-accent-400 to-accent-500 text-white shadow-lg hover:scale-95 transition-all duration-300">
                <span>Book Now</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
