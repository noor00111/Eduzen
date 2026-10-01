import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { getStudentProfile, updateStudentProfile } from '../services/student.services';
import { uploadImageToCloudinary } from '@/src/lib/cloudinary';

export function useStudentProfile() {
  const queryClient = useQueryClient();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isUploadingPhoto, setIsUploadingPhoto] = useState(false);

  const { data: profile, isLoading } = useQuery({
    queryKey: ['student-profile'],
    queryFn: getStudentProfile,
  });

  const updateMutation = useMutation({
    mutationFn: (data: { name: string; email: string }) => updateStudentProfile(data),
    onSuccess: () => {
      toast.success('Profile updated successfully!');
      setIsEditing(false);
      queryClient.invalidateQueries({ queryKey: ['student-profile'] });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update profile');
    },
  });

  const photoMutation = useMutation({
    mutationFn: (photoUrl: string) => updateStudentProfile({ name: profile?.name, email: profile?.email, photoUrl }),
    onSuccess: () => {
      toast.success('Photo updated!');
      queryClient.invalidateQueries({ queryKey: ['student-profile'] });
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to update photo');
    },
  });

  const handlePhotoSelect = async (file: File) => {
    setIsUploadingPhoto(true);
    try {
      const url = await uploadImageToCloudinary(file);
      photoMutation.mutate(url);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to upload photo');
    } finally {
      setIsUploadingPhoto(false);
    }
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMutation.mutate(formData);
  };

  const handleEdit = () => {
    setFormData({ name: profile?.name || '', email: profile?.email || '' });
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData({ name: profile?.name || '', email: profile?.email || '' });
    setIsEditing(false);
  };

  return {
    profile,
    isLoading,
    isEditing,
    formData,
    setFormData,
    handleSubmit,
    handleEdit,
    handleCancel,
    isPending: updateMutation.isPending,
    isUploadingPhoto,
    onPhotoSelect: handlePhotoSelect,
  };
}
