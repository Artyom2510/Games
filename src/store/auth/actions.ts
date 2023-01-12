import { createAsyncThunk } from '@reduxjs/toolkit';
import { signIn } from 'next-auth/react';
import { signUpSupabase } from '../../clients';
import { handleHttpError } from '../../helpers/handleHttpError';
import { TCredentials } from '../../models/credentials';

export const login = createAsyncThunk<
	void,
	TCredentials,
	{ rejectValue: string }
>('auth/login', async (values, { rejectWithValue }) => {
	try {
		await signUpSupabase(values);
		await signIn('credentials', values);
	} catch (e) {
		rejectWithValue(handleHttpError(e));
	}
});
