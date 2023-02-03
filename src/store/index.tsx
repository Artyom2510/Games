import { configureStore } from '@reduxjs/toolkit';
import { pokemonApi } from '../services/pokemon.api';
import authReducer from './auth';
import gamesReducer from './games';
import userReducer from './userData';
import { gameMemoReducer } from './memoGame';

const store = configureStore({
	reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
		auth: authReducer,
		games: gamesReducer,
		user: userReducer,
		memo: gameMemoReducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(pokemonApi.middleware),
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;
