import { createAsyncThunk } from '@reduxjs/toolkit';
import { createGame, getGamesList } from '../../clients';
import { handleHttpError } from '../../helpers/handleHttpError';
import { TCommonCard } from '../../models/commonCard';
import { TCommonCardData } from '../../models/commonCardData';

export const createGameAction = createAsyncThunk<
	void,
	TCommonCard,
	{ rejectValue: string }
>('games/create', async (values, { rejectWithValue }) => {
	try {
		await createGame(values);
	} catch (e) {
		return rejectWithValue(handleHttpError(e));
	}
});

export const getGamesAction = createAsyncThunk<
	TCommonCardData[],
	void,
	{ rejectValue: string }
>('games/get', async (_, { rejectWithValue }) => {
	try {
		await getGamesList();
	} catch (e) {
		return rejectWithValue(handleHttpError(e));
	}
});
