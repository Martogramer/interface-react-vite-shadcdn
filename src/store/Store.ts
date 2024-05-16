import login from "@/features/login";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist';

export const store = configureStore({
  reducer: {
    login: login,
  },
});
setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>1
>;
