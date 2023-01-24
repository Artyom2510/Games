import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import gamesReducer from './games';
import userReducer from './userData';

const store = configureStore({
	reducer: {
		// [userAuthApi.reducerPath]: userAuthApi.reducer,
		auth: authReducer,
		games: gamesReducer,
		user: userReducer
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

export default store;
