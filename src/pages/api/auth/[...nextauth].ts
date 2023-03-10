import { nanoid } from '@reduxjs/toolkit';
import nextAuth, { NextAuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { TCredentials } from '../../../models/credentials';

const authOptions: NextAuthOptions = {
	session: {
		strategy: 'jwt'
	},
	providers: [
		Credentials({
			type: 'credentials',
			credentials: {},
			authorize(credentials: TCredentials, req) {
				const { email } = credentials;
				return {
					id: nanoid(),
					email,
					data: { ...credentials }
				};
			}
		})
	]
};

export default nextAuth(authOptions);
