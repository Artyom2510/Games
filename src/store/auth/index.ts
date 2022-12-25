import { createSlice } from '@reduxjs/toolkit';
import { login } from './actions';
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
		builder.addCase(login.pending, state => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(login.fulfilled, state => {
			state.isLoading = false;
		});
		builder.addCase(login.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
	}
});

export default authSlice.reducer;
