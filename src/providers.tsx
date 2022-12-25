'use client';

import React, { FC, PropsWithChildren } from 'react';
import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import store from './store';

const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<SessionProvider>
			<Provider store={store}>{children}</Provider>
		</SessionProvider>
	);
};

export default Providers;
