import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getMyProfile, getCategories, updateTutorProfile } from '../services/profile.service';
import { uploadImageToCloudinary } from '@/src/lib/cloudinary';

export function useTutorProfile() {

  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [formData, setFormData] = useState({ bio: '', hourlyRate: 0 });
  const [pendingPhotoUrl, setPendingPhotoUrl] = useState<string | undefined>(undefined);
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);

  const { data: profile, isLoading } = useQuery({
    queryKey: ['tutor-profile'],
    queryFn: getMyProfile,
  });

  const { data: categories } = useQuery<{ id: string; name: string }[]>({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const updateMutation = useMutation({
    mutationFn: (data: { bio: string; hourlyRate: number }) =>
      updateTutorProfile({ ...data, subjectIds: selectedSubjects, photoUrl: pendingPhotoUrl }),
    onSuccess: () => {
      toast.success('Profile updated successfully!');
      setIsEditing(false);
      queryClient.invalidateQueries({ queryKey: ['tutor-profile'] });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update profile');
    },
  });

  const handlePhotoSelect = async (file: File) => {
    setIsUploadingPhoto(true);
    try {
      const url = await uploadImageToCloudinary(file);
      setPendingPhotoUrl(url);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to upload photo');
    } finally {
      setIsUploadingPhoto(false);
    }
  };

  const tutorProfileId = profile?.tutorProfile?.id;
  const tutorBio = profile?.tutorProfile?.bio;
  const tutorRate = profile?.tutorProfile?.hourlyRate;
  const tutorPhotoUrl = profile?.tutorProfile?.photoUrl;

  useEffect(() => {
    if (profile?.tutorProfile) {
      setFormData({
        bio: profile.tutorProfile.bio || '',
        hourlyRate: profile.tutorProfile.hourlyRate || 0,
      });
      setSelectedSubjects(
        profile.tutorProfile.subjects?.map((s: { id: string }) => s.id) || []
      );
      setPendingPhotoUrl(profile.tutorProfile.photoUrl || undefined);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tutorProfileId, tutorBio, tutorRate, tutorPhotoUrl]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMutation.mutate({ bio: formData.bio, hourlyRate: formData.hourlyRate });
  };

  const handleCancel = () => {
    if (profile?.tutorProfile) {
      setFormData({
        bio: profile.tutorProfile.bio || '',
        hourlyRate: profile.tutorProfile.hourlyRate || 0,
      });
      setSelectedSubjects(
        profile.tutorProfile.subjects?.map((s: { id: string }) => s.id) || []
      );
      setPendingPhotoUrl(profile.tutorProfile.photoUrl || undefined);
    }
    setIsEditing(false);
  };

  const toggleSubject = (id: string) =>
    setSelectedSubjects((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return {
    profile,
    isLoading,
    categories,
    isEditing,
    setIsEditing,
    formData,
    setFormData,
    selectedSubjects,
    toggleSubject,
    handleSubmit,
    handleCancel,
    isPending: updateMutation.isPending,
    isUploadingPhoto,
    onPhotoSelect: handlePhotoSelect,
    pendingPhotoUrl,
  };
}
