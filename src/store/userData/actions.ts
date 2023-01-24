import { getUser } from '../../clients';
import { handleHttpError } from '../../helpers/handleHttpError';
import { TUserCred } from '../../models/credentials';
import { createAppAsyncThunk } from '../types';

export const getUserAction = createAppAsyncThunk<TUserCred, string>(
	'auth/signIn',
	async (email, { rejectWithValue }) => {
		try {
			return await getUser(email);
		} catch (e) {
			return rejectWithValue(handleHttpError(e));
		}
	}
);
