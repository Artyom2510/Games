import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import gamesReducer from './games';

const store = configureStore({
	reducer: {
		// [userAuthApi.reducerPath]: userAuthApi.reducer,
		auth: authReducer,
		games: gamesReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
	// .concat(
	//     userAuthApi.middleware,
	//     storeProfileApi.middleware,
	//     messengerApi.middleware,
	//     productsApi.middleware,
	// ),
	devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
