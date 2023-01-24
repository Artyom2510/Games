import { createSlice } from '@reduxjs/toolkit';
import { signUpAction, signInAction } from './actions';
import { TAuthState } from './types';

const initialState: TAuthState = {
	isLoading: false,
	error: null
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(signInAction.pending, state => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(signInAction.fulfilled, state => {
			state.isLoading = false;
		});
		builder.addCase(signInAction.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
		builder.addCase(signUpAction.pending, state => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(signUpAction.fulfilled, state => {
			state.isLoading = false;
		});
		builder.addCase(signUpAction.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
	}
});

export default authSlice.reducer;
