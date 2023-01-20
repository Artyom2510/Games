import { TChoice } from './../../../models/commonCardData';

export type CardFooterProps = {
	choice: TChoice;
	disliked: string[];
	liked: string[];
	id: number;
};
