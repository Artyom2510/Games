import {
	ActionCreatorsMapObject,
	AsyncThunk,
	createAsyncThunk
} from '@reduxjs/toolkit';
import store from '.';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: RootState;
	dispatch: AppDispatch;
	rejectValue: string;
}>();

export type BoundActions<Actions extends ActionCreatorsMapObject> = {
	[key in keyof Actions]: Actions[key] extends AsyncThunk<any, any, any>
		? BoundAsyncThunk<Actions[key]>
		: Actions[key];
};

export type BoundAsyncThunk<Thunk extends AsyncThunk<any, any, any>> = (
	...args: Parameters<Thunk>
) => ReturnType<ReturnType<Thunk>>;
