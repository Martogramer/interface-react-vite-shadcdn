
export const store = configureStore({
	reducer: {
		register: registerReducer,
		login: LoginSlice,
		auth: authSlice,