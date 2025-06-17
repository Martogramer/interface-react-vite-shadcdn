// src/features/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserRole = "admin" | "comercial" | "analitico";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  token: string;
}

interface AuthState {
  user: User | null;
}

const localUser = localStorage.getItem("auth_user");

const initialState: AuthState = {
  user: localUser ? JSON.parse(localUser) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.user = action.payload;
      localStorage.setItem("auth_user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("auth_user");
    },
    updateUserRole(state, action: PayloadAction<{ id: string; role: UserRole }>) {
      if (state.user && state.user.id === action.payload.id) {
        state.user.role = action.payload.role;
        localStorage.setItem("auth_user", JSON.stringify(state.user));
      }
    },
  },
});

export const { login, logout, updateUserRole } = authSlice.actions;
export default authSlice.reducer;
