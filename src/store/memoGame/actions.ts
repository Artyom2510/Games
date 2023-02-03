import { setRecord } from '../../clients';
import { handleHttpError } from '../../helpers/handleHttpError';
import { TMemoGame } from '../../models/memoGame';
import { createAppAsyncThunk } from '../types';

export const endGame = createAppAsyncThunk<number, TMemoGame>(
	'memo/record',
	async (values, { rejectWithValue }) => {
		try {
			return await setRecord(values);
		} catch (e) {
			return rejectWithValue(handleHttpError(e));
		}
	}
);
