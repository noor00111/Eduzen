import { TutorProfileContentProps } from '@/src/types';
import { motion, AnimatePresence } from 'framer-motion';
import { Edit3, Save, X, DollarSign, BookOpen, CheckCircle2, Camera, Loader2, Star, Users, MessageCircle, Bookmark } from 'lucide-react';
import Image from 'next/image';

export function ProfileContent(
  {isEditing, setIsEditing, tutorProfile, formData, setFormData, categories, selectedSubjects, toggleSubject, handleSubmit, handleCancel, isPending, isUploadingPhoto, onPhotoSelect, pendingPhotoUrl}: TutorProfileContentProps) {

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-0 space-y-6 mb-16">
      <div className="rounded-[1.75rem] bg-white shadow-[0_4px_24px_rgba(45,31,88,0.06)] border border-surface-300">
        <div className="flex items-center justify-between px-6 sm:px-10 py-6 border-b border-surface-300">
          <h3 className="text-lg font-black text-brand-900">
            {isEditing ? 'Editing Profile' : 'Profile Details'}
          </h3>

          {!isEditing && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold text-brand-700 border border-brand-200 hover:bg-brand-50 transition-colors">
              <Edit3 className="w-3.5 h-3.5" />
              Edit Profile
            </motion.button>
          )}
        </div>

        <div className="px-6 sm:px-10 py-8">
          <AnimatePresence mode="wait">
            {isEditing ? (
              <motion.form
                key="edit"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                onSubmit={handleSubmit}
                className="space-y-8">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] mb-3 text-brand-700/60">
                    Photo
                  </label>

                  <div className="flex items-center gap-5">
                    <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 bg-surface-300 flex items-center justify-center">
                      {pendingPhotoUrl ? (
                        <Image src={pendingPhotoUrl} alt="Profile photo" fill className="object-cover" />
                      ) : (
                        <Camera className="w-6 h-6 text-brand-400" />
                      )}
                      {isUploadingPhoto && (
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <Loader2 className="w-5 h-5 text-white animate-spin" />
                        </div>
                      )}
                    </div>

                    <label className="cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-brand-700 border-2 border-brand-200 hover:bg-brand-50 transition-colors">
                      <Camera className="w-4 h-4" />
                      {isUploadingPhoto ? 'Uploading...' : 'Change Photo'}
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
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] mb-3 text-brand-700/60">
                    Bio
                  </label>

                  <textarea
                    value={formData.bio}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        bio: e.target.value,
                      })
                    }
                    rows={5}
                    className="w-full border border-surface-400 rounded-2xl p-5 text-base resize-none outline-none focus:border-brand-400 transition-colors text-brand-900"/>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] mb-3 text-brand-700/60">
                    Hourly Rate
                  </label>

                  <div className="relative">
                    <DollarSign className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-500"/>
                    <input
                      type="number"
                      value={formData.hourlyRate}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          hourlyRate:
                            parseFloat(e.target.value) || 0,
                        })}
                      className="w-full pl-11 pr-5 py-4 rounded-2xl outline-none border border-surface-400 focus:border-brand-400 transition-colors text-brand-900"/>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-[0.2em] mb-4 text-brand-700/60">
                    Subjects
                  </label>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 border border-surface-400 rounded-2xl p-4">
                    {categories?.map((cat) => {
                      const selected =
                        selectedSubjects.includes(cat.id);

                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => toggleSubject(cat.id)}
                          className={`flex items-center gap-3 p-4 rounded-2xl text-left transition-colors ${selected ? 'bg-brand-50 text-brand-900' : 'text-brand-700/70 hover:bg-surface-200'}`}>
                          {selected ? (
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-brand-500" />
                          ) : (
                            <BookOpen className="w-4 h-4 shrink-0" />
                          )}
                        <span className="font-bold text-sm">{cat.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button type="button"
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm border-2 border-surface-400 text-brand-700 hover:bg-surface-200 transition-colors">
                    <X className="w-4 h-4" />
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-600/20 transition-colors disabled:opacity-50">
                    <Save className="w-4 h-4" />
                    {isPending ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 gap-10">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3 text-brand-700/50">
                    About
                  </p>

                  <p className="text-[15px] leading-relaxed text-brand-800/85">
                    {tutorProfile?.bio || 'No bio added yet'}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-brand-700/50">
                    Teaching Details
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-surface-200/60 p-4">
                      <div className="flex items-center gap-1.5 text-brand-500 mb-1">
                        <DollarSign className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-bold uppercase tracking-wide">Hourly Rate</span>
                      </div>
                      <p className="text-xl font-black text-brand-900">${tutorProfile?.hourlyRate ?? 0}<span className="text-sm font-bold text-brand-700/50">/hr</span></p>
                    </div>

                    <div className="rounded-2xl bg-surface-200/60 p-4">
                      <div className="flex items-center gap-1.5 text-amber-500 mb-1">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="text-[11px] font-bold uppercase tracking-wide">Rating</span>
                      </div>
                      <p className="text-xl font-black text-brand-900">{tutorProfile?.rating?.toFixed(1) ?? '—'}</p>
                    </div>

                    <div className="rounded-2xl bg-surface-200/60 p-4 col-span-2">
                      <div className="flex items-center gap-1.5 text-brand-500 mb-1">
                        <Users className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-bold uppercase tracking-wide">Subjects Taught</span>
                      </div>
                      <p className="text-xl font-black text-brand-900">{tutorProfile?.subjects?.length ?? 0}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {!isEditing && (
        <>
          <div className="rounded-[1.75rem] bg-white shadow-[0_4px_24px_rgba(45,31,88,0.06)] border border-surface-300 px-6 sm:px-10 py-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 text-brand-700/50">
              Subjects
            </p>

            <div className="flex flex-wrap gap-2.5">
              {tutorProfile?.subjects?.length ? (
                tutorProfile.subjects.map((subject) => (
                  <span
                    key={subject.id}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold text-brand-700 bg-brand-50 border border-brand-100 hover:bg-brand-100 transition-colors">
                    <BookOpen className="w-3.5 h-3.5 text-brand-400" />
                    {subject.name}
                  </span>
                ))
              ) : (
                <p className="text-sm text-brand-700/50">No subjects added yet</p>
              )}
            </div>
          </div>

          <div className="relative rounded-[1.75rem] overflow-hidden bg-[linear-gradient(120deg,#2D1F58,#4A3C86)] px-6 sm:px-10 py-10 text-center">
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-accent-500/10" />

            <div className="relative">
              <h3 className="text-2xl sm:text-3xl font-black text-white font-serif mb-2">
                Ready to start learning?
              </h3>
              <p className="text-white/70 text-sm max-w-md mx-auto mb-7">
                Book a personalized lesson and take the next step toward your learning goals.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
                <button className="w-full sm:w-auto px-8 py-3.5 rounded-full font-black text-sm text-brand-900 bg-white hover:bg-white/90 shadow-lg transition-colors">
                  Book a Session
                </button>

                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Message Tutor
                </button>

                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white border border-white/25 hover:bg-white/10 transition-colors">
                  <Bookmark className="w-4 h-4" />
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
