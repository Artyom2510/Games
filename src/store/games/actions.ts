import { createAppAsyncThunk } from './../types';
import { createGame, getGamesList } from '../../clients';
import { handleHttpError } from '../../helpers/handleHttpError';
import { TCommonCard } from '../../models/commonCard';
import { TCommonCardData } from '../../models/commonCardData';

export const createGameAction = createAppAsyncThunk<void, TCommonCard>(
	'games/create',
	async (values, { rejectWithValue }) => {
		try {
			return await createGame(values);
		} catch (e) {
			return rejectWithValue(handleHttpError(e));
		}
	}
);

export const getGamesAction = createAppAsyncThunk<TCommonCardData[], void>(
	'games/get',
	async (_, { rejectWithValue }) => {
		try {
			return await getGamesList();
		} catch (e) {
			return rejectWithValue(handleHttpError(e));
		}
	}
);
