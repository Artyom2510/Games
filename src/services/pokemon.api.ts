import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
	transformPokemonData,
	transformPokemonsData
} from '../helpers/transformPokemonsData';
import { SimpleInfoPokemon } from '../models/pokemon';
import { Pokemons, TransformResult } from '../models/pokemons';

export const pokemonApi = createApi({
	reducerPath: 'api/pokemon',
	baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_API_URL}` }),
	endpoints: builder => ({
		getPokemons: builder.query<Pokemons<TransformResult>, void>({
			query: () => `pokemon`,
			transformResponse: transformPokemonsData
		}),
		getPokemonByName: builder.query<SimpleInfoPokemon, string>({
			query: name => `pokemon/${name}`,
			transformResponse: transformPokemonData
		})
	})
});

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
