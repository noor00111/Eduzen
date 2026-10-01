import { Mail, Camera, Loader2, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { ProfileOverviewCardProps } from '@/src/types';

export function ProfileOverviewCard({ profile, isUploadingPhoto, onPhotoSelect }: ProfileOverviewCardProps) {
  return (
    <div className="relative rounded-[1.75rem] overflow-hidden bg-white border border-surface-300 shadow-[0_4px_24px_rgba(45,31,88,0.06)]">
      <div className="relative px-6 sm:px-8 py-4 bg-[linear-gradient(120deg,#4A3C86,#7B68C5)]">
        <p className="relative text-sm font-black text-white tracking-tight">Profile Overview</p>
      </div>

      <div className="relative px-6 sm:px-8 py-7 overflow-hidden">
        <Sparkles className="absolute right-10 top-6 w-4 h-4 text-accent-400/40" strokeWidth={1.5} />
        <Sparkles className="absolute right-20 top-16 w-3 h-3 text-brand-400/30" strokeWidth={1.5} />

        <div className="relative flex items-center gap-5">
          <div className="relative w-20 h-20 shrink-0">
            <div className="w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center text-2xl font-black text-white bg-[linear-gradient(150deg,#4A3C86,#7B68C5)]">
              {profile?.photoUrl ? (
                <Image src={profile.photoUrl} alt={profile?.name ?? 'Profile photo'} fill className="object-cover" />
              ) : (
                profile?.name?.charAt(0)?.toUpperCase()
              )}
              {isUploadingPhoto && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Loader2 className="w-5 h-5 text-white animate-spin" />
                </div>
              )}
            </div>

            <label className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-brand-600 border-2 border-white flex items-center justify-center cursor-pointer hover:bg-brand-700 transition-colors">
              <Camera className="w-3.5 h-3.5 text-white" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                disabled={isUploadingPhoto}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) onPhotoSelect(file);
                  e.target.value = '';
                }}
              />
            </label>
          </div>

          <div className="min-w-0">
            <h3 className="text-xl font-black text-brand-900 mb-0.5 truncate">{profile?.name}</h3>
            <p className="text-brand-700/60 font-medium text-sm flex items-center gap-1.5 truncate">
              <Mail className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{profile?.email}</span>
            </p>
            <span className="inline-block mt-2 px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-xs font-bold uppercase tracking-widest">
              {profile?.role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
