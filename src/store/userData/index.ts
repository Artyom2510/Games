import { createSlice } from '@reduxjs/toolkit';
import { getUserAction } from './actions';
import { TUserData } from './types';

const initialState: TUserData = {
	isLoading: false,
	error: null,
	data: null
};

export const userDataSlice = createSlice({
	name: 'userData',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getUserAction.pending, state => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(getUserAction.fulfilled, (state, { payload }) => {
			state.data = payload;
			state.isLoading = false;
		});
		builder.addCase(getUserAction.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
	}
});

export default userDataSlice.reducer;
