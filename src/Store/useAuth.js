import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useAuth = create(
  persist(
    (set, get) => ({
      auth: {
        isAuth: false,
        user: null
      },
      connexion: (data) => set({ auth: {isAuth: true, user: data} }),
      logout: () => set({ auth: {isAuth: false, user: null} })
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
) 