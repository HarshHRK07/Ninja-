import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeState } from '../utils/types';

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'theme-storage',
    }
  )
);

export default useThemeStore;