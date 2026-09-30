import { api } from '@/src/lib/api';

export const getMyProfile = async () => {
  const res = await api.get('/auth/me');
  return res.data.data.user;
};

export const getCategories = async () => {
  const res = await api.get('/categories');
  return res.data.data.categories;
};

export const updateTutorProfile = async (data: {bio: string; hourlyRate: number; subjectIds: string[]; photoUrl?: string;}) => {
  const res = await api.put('/tutors/profile', data);
  return res.data;
};
