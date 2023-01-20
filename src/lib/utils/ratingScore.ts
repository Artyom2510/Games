export const ratingScore = (liked: number, disliked: number): number => {
	const isNoLiked = liked === 0;
	const isNoDisliked = disliked === 0;

	if (isNoLiked && isNoDisliked) {
		return 0;
	}

	if (isNoDisliked) {
		return 100;
	}

	const total = liked + disliked;
	return (liked * 100) / total;
};
