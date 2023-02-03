import { nanoid } from '@reduxjs/toolkit';

export const shuffle = (length = 40) => {
	const arr: Array<{ id: string; type: number }> = [];
	for (let i = 0; i < length; i += 2) {
		arr.push({
			id: nanoid(),
			type: i
		});
		arr.push({
			id: nanoid(),
			type: i
		});
	}

	return shuffleArray(arr);
};

const shuffleArray = array => {
	const shuffle: Array<{ id: string; type: number }> = [...array];
	for (var i = shuffle.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = shuffle[i];
		shuffle[i] = shuffle[j];
		shuffle[j] = temp;
	}
	return shuffle;
};
