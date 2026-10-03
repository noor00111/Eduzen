import { UseMutationResult } from "@tanstack/react-query";
import { LucideIcon } from "lucide-react";

export interface BlobBackgroundProps {
  variant?: 'brand' | 'warm';
}
export type Role = 'STUDENT' | 'TUTOR' | 'ADMIN';
export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  photoUrl?: string;
  isBanned?: boolean;
}
export interface AdminUser extends User{
createdAt: string;
}

export interface AccessDeniedProps {
  role: Role;
}


export interface AuthState {
  user: User | null;
  token: string | null;
  isHydrated: boolean;
  setAuth: (user: User, token: string) => void;
  logout: () => void;
  setHydrated: (state: boolean) => void;
} 

export interface FormInputProps {
  label: string;
  icon: LucideIcon;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  focusKey: string;
  focused: string | null;
  onFocus: (key: string) => void;
  onBlur: () => void;
  animationIndex: number;
  required?: boolean;
}

export interface Tutor {
  id: string;
  rating: number;
  hourlyRate: number;
  bio?: string;
  photoUrl?: string;
  user: { name: string };
  subjects: Subject[];
}

export interface TutorCardProps {
  tutor: Tutor;
}

export interface Subject {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface CategoryListProps {
  categories: Category[];
  onUpdate: (id: string, name: string) => void;
  onDelete: (id: string, name: string) => void;
  isUpdating: boolean;
  isDeleting: boolean;
}

export interface Review {
  id: string;
  student: { name: string };
  createdAt: string;
  rating: number;
  comment?: string;
}

export interface TutorInfoPanelProps {
  tutor: {
    bio?: string;
    rating: number;
    totalReviews: number;
    subjects: Subject[];
    reviews?: Review[];
  };
}

export interface Availability {
  id: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

export interface TutorBookingCardProps {
  tutor: {
    hourlyRate: number;
    user: { name: string };
    availabilities?: Availability[];
  };
  currentUser: User | null;
  selectedDate: string;
  setSelectedDate: (v: string) => void;
  selectedTime: string;
  setSelectedTime: (v: string) => void;
  bookMutation: UseMutationResult<unknown, unknown, string>;
  handleBooking: () => void;
}

export interface AvailabilitySlot {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
}

export interface Booking {
  id: string;
  date: string;
  status: string;
  tutorId: string;
  tutor: { name: string };
}

interface StudentBooking {
  id: string;
  date: string;
  status: string;
  student: { name: string };
}

export interface BookingsTableProps {
  bookings: StudentBooking[];
  isLoading: boolean;
}

export interface ReviewModalProps {
  open: boolean;
  rating: number;
  comment: string;
  isPending: boolean;
  onClose: () => void;
  onRating: (r: number) => void;
  onComment: (c: string) => void;
  onSubmit: () => void;
}

export interface ProfileOverviewCardProps {
  profile: { name?: string; email?: string; role?: string; photoUrl?: string } | undefined;
  isUploadingPhoto: boolean;
  onPhotoSelect: (file: File) => void;
}

export interface StudentProfileEditFormProps {
  profile: { name?: string; email?: string } | undefined;
  isEditing: boolean;
  formData: { name: string; email: string };
  isPending: boolean;
  setFormData: (data: { name: string; email: string }) => void;
  onEdit: () => void;
  onSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

export interface TutorProfileHeroProps {
  profile: {
    name?: string;
    email?: string;
    role?: string;
    tutorProfile?: {
      hourlyRate: number;
      rating: number;
      totalReviews?: number;
      bio?: string;
      photoUrl?: string;
      subjects?: { id: string; name: string }[];
    };
  };
}

export interface TutorProfileContentProps {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
  tutorProfile: | {
        bio?: string;
        hourlyRate?: number;
        rating?: number;
        totalReviews?: number;
        photoUrl?: string;
        subjects?: { id: string; name: string }[];
      } | undefined;
  formData: {
    bio: string;
    hourlyRate: number;
  };

  setFormData: (data: {
    bio: string;
    hourlyRate: number;
  }) => void;

  categories: { id: string; name: string }[] | undefined;
  selectedSubjects: string[];
  toggleSubject: (id: string) => void;
  handleSubmit: (e: React.SyntheticEvent<HTMLFormElement>) => void;
  handleCancel: () => void;
  isPending: boolean;
  isUploadingPhoto: boolean;
  onPhotoSelect: (file: File) => void;
  pendingPhotoUrl?: string;
}