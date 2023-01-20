export type TCredentials = {
	email: string;
	password: string;
	nickname?: string;
	name?: string;
	role?: 'admin' | 'user';
	id?: string;
};
