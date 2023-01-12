import { TChoice } from './../../../models/commonCardData';

export type CardFooterProps = {
	choice: TChoice;
	disliked: number | null;
	liked: number | null;
	id: number;
};
