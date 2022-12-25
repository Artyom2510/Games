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
			authorize(credentials, req) {
				const { email, nickname } = credentials as TCredentials;
				return {
					id: '2',
					name: nickname,
					email
				};
			}
		})
	]
};

export default nextAuth(authOptions);
