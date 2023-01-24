import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { transformPokemonsData } from '../helpers/transformPokemonsData';
import { Pokemon } from '../models/pokemon';
import { Pokemons } from '../models/pokemons';

export const pokemonApi = createApi({
	reducerPath: 'api/pokemon',
	baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}` }),
	endpoints: builder => ({
		getPokemons: builder.query<Pokemons, void>({
			query: () => `pokemon`,
			transformResponse: (response: Pokemons) => transformPokemonsData(response)
		}),
		getPokemonByName: builder.query<Pokemon, string>({
			query: name => `pokemon/${name}`
		})
	})
});

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
