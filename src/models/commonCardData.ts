export type TChoice = 'liked' | 'disliked' | null;

export type TCommonCardData = {
	created_at: string | Date;
	image: string;
	id: number;
	title: string;
	description: string;
	user_id: string;
	liked_count: number;
	disliked_count: number;
	choice: TChoice;
};
