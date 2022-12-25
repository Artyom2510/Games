import { createSlice } from '@reduxjs/toolkit';
import { createGameAction, getGamesAction } from './actions';
import { TGames } from './types';

const initialState: TGames = {
	isLoading: false,
	error: null,
	games: []
};

export const gamesSlice = createSlice({
	name: 'games',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getGamesAction.pending, state => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(getGamesAction.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			state.games = payload;
		});
		builder.addCase(getGamesAction.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
		builder.addCase(createGameAction.pending, state => {
			state.isLoading = true;
			state.error = null;
		});
		builder.addCase(createGameAction.fulfilled, (state, { payload }) => {
			state.isLoading = false;
			// state.games.push(payload);
		});
		builder.addCase(createGameAction.rejected, (state, { payload }) => {
			state.isLoading = false;
			state.error = payload;
		});
	}
});

export default gamesSlice.reducer;
