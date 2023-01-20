import { signIn } from 'next-auth/react';
import { signUpSupabase } from '../../clients';
import { handleHttpError } from '../../helpers/handleHttpError';
import { TCredentials } from '../../models/credentials';
import { createAppAsyncThunk } from '../types';

export const login = createAppAsyncThunk<void | Promise<string>, TCredentials>(
	'auth/login',
	async (values, { rejectWithValue }) => {
		try {
			await signUpSupabase(values);
			signIn('credentials', values);
		} catch (e) {
			return rejectWithValue(handleHttpError(e));
		}
	}
);
