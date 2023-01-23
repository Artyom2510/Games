export type TCredentials = {
	email: string;
	password: string;
};

export type TUserCred = {
	name: string;
	nickname: string;
	role: 'admin' | 'user';
	id: string;
};
