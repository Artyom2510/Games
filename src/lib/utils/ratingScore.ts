export const ratingScore = (
	liked: number | null,
	disliked: number | null
): number => {
	const isNoLiked = !liked;
	const isNoDisliked = !disliked;

	if (isNoLiked && isNoDisliked) {
		return 0;
	}

	if (isNoDisliked) {
		return 100;
	}

	if (isNoLiked) {
		return -100;
	}

	const total = liked + disliked;
	return (liked * 100) / total;
};
