import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UserState } from '../utils/types';

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
    }),
    {
      name: 'user-storage',
    }
  )
);

export default useUserStore;