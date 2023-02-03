import { createSlice } from '@reduxjs/toolkit';
import { endGame } from './actions';
import { TMemoGameState } from './types';

const initialState: TMemoGameState = {
	record: 0,
	total: 0,
	isLoading: false,
	error: null
};

export const gameMemoSlice = createSlice({
	name: 'memoGame',
	initialState,
	reducers: {
		startGame: state => {
			state.total = 0;
		},
		incTotal: state => {
			state.total += 10;
		}
	},
	extraReducers: builder => {
		builder.addCase(endGame.pending, state => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(endGame.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.error = null;
			state.record = payload;
		});
		builder.addCase(endGame.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
	}
});

export const { reducer: gameMemoReducer, actions: gameMemoActions } =
	gameMemoSlice;
