import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthState } from '../types';

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isHydrated: false,
      setAuth: (user, token) => set({ user, token }),
      logout: () => set({ user: null, token: null }),
      setHydrated: (state) => set({ isHydrated: state }),
    }),
    {
      name: 'Eduzen-auth',
      onRehydrateStorage: () => (state) => {
        state?.setHydrated(true);
      },
    }
  )
);
