import { create } from "zustand";

interface User {
  id: string;
  username: string;
  email: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  profileData: any | null;
  login: (userData: User) => void;
  logout: () => void;
  setProfileData: (data: any) => void;
}

const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  profileData: null,
  login: (userData: User) => set({ isAuthenticated: true, user: userData }),
  logout: () => set({ isAuthenticated: false, user: null, profileData: null }),
  setProfileData: (data: any) => set({ profileData: data }),
}));

export default useAuthStore;
