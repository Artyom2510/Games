import { Pokemons } from '../models/pokemons';

export const transformPokemonsData = (data: Pokemons) => {
	const { results, ...rest } = data;
	const newResults = results.map(({ name, url }) => ({
		url: url.split('/').at(-2),
		name
	}));

	return { ...rest, results: newResults };
};
