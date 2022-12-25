import { TCommonCardData } from '../../models/commonCardData';

export type TGames = {
	isLoading: boolean;
	error: null | string;
	games: TCommonCardData[];
};
