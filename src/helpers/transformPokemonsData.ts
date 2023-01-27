import { Pokemons, Result, TransformResult } from '../models/pokemons';
import { Pokemon, SimpleInfoPokemon } from '../models/pokemon';

export const transformPokemonsData = (
	response: Pokemons<Result>
): Pokemons<TransformResult> => {
	const { results, ...rest } = response;
	const newResults = results.map(({ name, url }) => ({
		id: url.split('/').at(-2),
		name
	}));

	return { ...rest, results: newResults };
};

export const transformPokemonData = ({
	base_experience: experience,
	height,
	weight
}: Pokemon): SimpleInfoPokemon => {
	return { experience, height, weight };
};
