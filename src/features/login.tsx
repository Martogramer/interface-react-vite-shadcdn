/* eslint-disable no-mixed-spaces-and-tabs */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../store/Store";

import { toast } from "react-hot-toast";

import { baseURL } from "../baseUrl";

export interface LoginFormData {
  _id?: string;
  email: string;
  password: string;
  avatar?: string;
  username?: string;
  firstName?: string;
  lastname?: string;
  DNI?: string;
  phone?: string;
  location?: string;
  description?: string;
  role?: { rolename?: string };
}

export interface LoginState {
  isLoading: boolean;
  isAuthenticated: boolean;
  error: string | null;
  formData: LoginFormData;
}

const initialState: LoginState = {
  isLoading: false,
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  error: null,
  formData: {
    _id: "",
    email: "",
    password: "",
    avatar: "",
    username: "",
    firstName: "",
    lastname: "",
    DNI: "",
    phone: "",
    location: "",
    description: "",
    role: { rolename: "" },
  }, // JSON.parse(localStorage.getItem("user") || '{}'),
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<LoginFormData>) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.error = null;
      localStorage.setItem("formData", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", "true");
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userData");
    },
    updateFormData: (state, action: PayloadAction<Partial<LoginFormData>>) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  updateFormData,
  logout,
} = loginSlice.actions;

export default loginSlice.reducer;

export const loginUser =
  (formData: LoginFormData): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loginStart());

      const response = await fetch(`${baseURL}/signIn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const userData = await response.json();
        dispatch(loginSuccess(userData));
        toast.success("Login successful");
      } else {
        const errorData = await response.json();
        dispatch(loginFailure(errorData.message));
        toast.error("Invalid credentials");
      }
    } catch (error) {
      dispatch(loginFailure("An error occurred during login."));
      toast.error("Something went wrong during login");
    }
  };