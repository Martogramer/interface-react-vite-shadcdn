import { RootState } from '../../store/Store';

export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectIsAuthenticated = (state: RootState) => !!state.auth.user;
export const selectIsAdmin = (state: RootState) =>
  state.auth.user?.role === 'admin';
