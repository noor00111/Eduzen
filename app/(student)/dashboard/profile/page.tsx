'use client';

import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuthStore } from '@/src/store/useAuthStore';
import { AccessDenied } from '@/src/components/ui/AccessDenied';
import { useStudentProfile } from '@/src/features/student/hooks/useStudentProfile';
import { ProfileOverviewCard } from '@/src/features/student/studentComponents/profile/ProfileOverviewCard';
import { ProfileEditForm } from '@/src/features/student/studentComponents/profile/ProfileEditForm';

export default function StudentProfile() {
  const { user } = useAuthStore();
  const {profile, isLoading, isEditing, formData, setFormData, handleSubmit, handleEdit, handleCancel, isPending, isUploadingPhoto, onPhotoSelect} = useStudentProfile();

  if (!user || user.role !== 'STUDENT') {
    return <AccessDenied role="STUDENT" />;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-surface-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-brand-900 font-serif tracking-tight mb-2">
            My Profile
          </h1>
          <p className="text-brand-700/60 font-medium flex items-center gap-2">
            <User className="w-4 h-4 text-brand-400" />
            Manage your personal information and preferences.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="space-y-6">
            <div className="h-40 bg-white border border-surface-300 rounded-[1.75rem] animate-pulse" />
            <div className="h-72 bg-white border border-surface-300 rounded-[1.75rem] animate-pulse" />
          </div>
        ) : (
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <ProfileOverviewCard profile={profile} isUploadingPhoto={isUploadingPhoto} onPhotoSelect={onPhotoSelect} />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <ProfileEditForm
                profile={profile}
                isEditing={isEditing}
                formData={formData}
                isPending={isPending}
                setFormData={setFormData}
                onEdit={handleEdit}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
