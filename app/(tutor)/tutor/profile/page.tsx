"use client";

import { useAuthStore } from "@/src/store/useAuthStore";
import { useTutorProfile } from "@/src/features/tutors/hooks/useTutorProfile";
import { AccessDenied } from "@/src/components/ui/AccessDenied";
import { ProfileHero } from "@/src/features/tutors/tutorComponents/profile/ProfileHeroProps";
import { ProfileContent } from "@/src/features/tutors/tutorComponents/profile/ProfileContent";

export default function TutorProfile() {
  const { user } = useAuthStore();
  const {profile, categories, isEditing, setIsEditing, formData, setFormData, selectedSubjects, toggleSubject, handleSubmit, handleCancel, isPending, isUploadingPhoto, onPhotoSelect, pendingPhotoUrl} = useTutorProfile();

  if (!user || user.role !== "TUTOR") {
    return <AccessDenied role="TUTOR" />;
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ProfileHero profile={profile} />
      
      <ProfileContent
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        tutorProfile={profile?.tutorProfile}
        formData={formData}
        setFormData={setFormData}
        categories={categories}
        selectedSubjects={selectedSubjects}
        toggleSubject={toggleSubject}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        isPending={isPending}
        isUploadingPhoto={isUploadingPhoto}
        onPhotoSelect={onPhotoSelect}
        pendingPhotoUrl={pendingPhotoUrl}
      />
    </div>
  );
}
