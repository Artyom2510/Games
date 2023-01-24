import { signIn } from 'next-auth/react';
import { signInSupabase, signUpSupabase } from '../../clients';
import { handleHttpError } from '../../helpers/handleHttpError';
import { TCredentials } from '../../models/credentials';
import { createAppAsyncThunk } from '../types';

export const signUpAction = createAppAsyncThunk<void, TCredentials>(
	'auth/signUp',
	async (values, { rejectWithValue }) => {
		try {
			await signUpSupabase(values);
			signIn('credentials', values);
		} catch (e) {
			return rejectWithValue(handleHttpError(e));
		}
	}
);

export const signInAction = createAppAsyncThunk<void, TCredentials>(
	'auth/signIn',
	async (values, { rejectWithValue }) => {
		try {
			await signInSupabase(values);
			signIn('credentials', values);
		} catch (e) {
			return rejectWithValue(handleHttpError(e));
		}
	}
);
