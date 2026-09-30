import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {Star} from 'lucide-react';
import {Card, CardContent, CardHeader,CardTitle,} from '@/src/components/ui/Card';
import { Button } from '@/src/components/ui/Button';
import { TutorCardProps } from '@/src/types';

export function TutorCard({ tutor }: TutorCardProps) {
  return (
    <motion.div
      layout
      whileHover={{ y: -8 }}
      transition={{ type: 'spring',stiffness: 260,damping: 18}}
      className="h-full">

      <Card className="group relative h-full overflow-hidden rounded-4xl border border-white/30 bg-white/55 backdrop-blur-2xl shadow-[0_12px_50px_rgba(33,94,97,0.10)] transition-all duration-500 hover:shadow-[0_20px_80px_rgba(33,94,97,0.18)] hover:border-brand-200/60">
        <div className="absolute top-5 right-5 z-20 flex items-center gap-1 rounded-full bg-white/70 backdrop-blur-md px-3 py-1.5 text-sm font-semibold text-brand-700 shadow-md">
          <Star className="w-4 h-4 fill-amber-400 text-accent-400" />
          {tutor.rating.toFixed(1)}
        </div>

        <CardHeader className="p-7">
            <div className="relative mb-3 w-16 h-16 rounded-3xl overflow-hidden bg-linear-to-br from-brand-500 to-brand-700 flex items-center justify-center text-3xl font-black text-white shadow-xl ring-4 ring-white/50">
              {tutor.photoUrl ? (
                <Image src={tutor.photoUrl} alt={tutor.user.name} fill className="object-cover" />
              ) : (
                tutor.user.name.charAt(0)
              )}
            </div>


          <CardTitle className="text-2xl font-black text-brand-900 tracking-tight">
            {tutor.user.name}
          </CardTitle>

          <div className="flex flex-wrap gap-2 mt-4">
            {tutor.subjects.slice(0, 3).map((s) => (
              <span
                key={s.id}
                className="rounded-full border border-brand-200 bg-brand-50/70 px-3 py-1.5 text-xs font-semibold text-brand-700 backdrop-blur-sm">
                {s.name}
              </span>
            ))}
          </div>
        </CardHeader>

        <CardContent className="relative z-10 px-7 pb-6 flex-1">
          <p className="text-[15px] leading-relaxed text-brand-700/80 line-clamp-4">
            {tutor.bio || 'Professional tutor dedicated to helping students achieve academic success through personalized learning experiences.'}
          </p>
          <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-brand-200  to-transparent" />
        </CardContent>

        <div className="px-7 pb-7 flex items-center justify-between">
            <div className="flex items-end gap-1">
              <span className="text-2xl font-black text-brand-900">
                ${tutor.hourlyRate}
              </span>

              <span className="text-xs text-brand-600 mb-1">
                /hr
              </span>
            </div>


          <Link href={`/tutors/${tutor.id}`}>
            <Button
              className="group/btn h-12 rounded-2xl px-5 bg-linear-to-r from-accent-400 to-accent-500 text-white shadow-lg hover:scale-95 transition-all duration-300">
              <span className="mr-2">Book Now</span>
            </Button>
          </Link>
        </div>

      </Card>
    </motion.div>
  );
}
