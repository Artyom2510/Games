import { TUserCred } from '../../models/credentials';

export type TUserData = {
	isLoading: boolean;
	error: string | null;
	data: TUserCred | null;
};
