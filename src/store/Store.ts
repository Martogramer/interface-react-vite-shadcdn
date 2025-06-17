import login from "@/features/login";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    login: login,
    auth: authReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
