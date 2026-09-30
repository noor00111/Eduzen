import { TutorProfileHeroProps } from '@/src/types';
import { motion } from 'framer-motion';
import { Mail, DollarSign, Star, Circle, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export function ProfileHero({ profile }: TutorProfileHeroProps) {
  const tutorProfile = profile?.tutorProfile;

  return (
    <div className="relative max-w-6xl mx-auto mt-8 mb-6 rounded-4xl overflow-hidden bg-surface-200 border border-surface-400 shadow-[0_20px_60px_rgba(45,31,88,0.10)]">
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-brand-200/25 blur-3xl" />
      <div className="absolute -bottom-20 -left-16 w-64 h-64 rounded-full bg-accent-300/15 blur-3xl" />

      <div className="relative px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row gap-8 sm:items-center">
        <div className="relative shrink-0 mx-auto sm:mx-0">
          
          {tutorProfile && (
            <motion.div
              className="absolute -inset-2 rounded-4xl bg-brand-500/25"
              animate={{ scale: [1, 1.06, 1], opacity: [0.35, 0.15, 0.35] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          )}

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-[28px] overflow-hidden shadow-[0_16px_40px_rgba(45,31,88,0.22)] ring-1 ring-white/60 flex items-center justify-center text-5xl font-black text-white bg-[linear-gradient(150deg,#4A3C86,#7B68C5)]">
            {tutorProfile?.photoUrl ? (
              <Image
                src={tutorProfile.photoUrl}
                alt={profile?.name ?? 'Profile photo'}
                fill
                sizes="176px"
                className="object-cover"
                priority
              />
            ) : (
              profile?.name?.charAt(0)?.toUpperCase()
            )}
          </div>

          {tutorProfile && (
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-brand-700 shadow-md border border-surface-400 whitespace-nowrap">
              <Circle className="w-2 h-2 fill-emerald-400 text-emerald-400" />
              Available for lessons
            </span>
          )}
        </div>

        <div className="min-w-0 text-center sm:text-left flex-1">
          <div className="inline-flex items-center gap-1.5 text-brand-500 text-xs font-bold uppercase tracking-widest mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            {tutorProfile?.subjects?.[0]?.name ? `${tutorProfile.subjects[0].name} Tutor` : profile?.role}
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-brand-900 leading-tight font-serif">
            {profile?.name}
          </h1>

          <p className="flex items-center justify-center sm:justify-start gap-2 text-brand-700/60 text-sm font-medium mt-2">
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">{profile?.email}</span>
          </p>

          {tutorProfile && (
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2 mt-5 pt-5 border-t border-surface-400">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-black text-brand-900">{tutorProfile.rating?.toFixed(1)}</span>
                <span className="text-brand-700/50 text-sm font-medium">
                  ({tutorProfile.totalReviews ?? 0} reviews)
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-brand-500" />
                <span className="font-black text-brand-900">{tutorProfile.hourlyRate}</span>
                <span className="text-brand-700/50 text-sm font-medium">/hr</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
