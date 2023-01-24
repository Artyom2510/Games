'use client';

import { Spin } from 'antd';
import { useGetPokemonByNameQuery } from '../../../services/pokemon.api';

const Pokemon = () => {
	const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

	if (isLoading) {
		return <Spin />;
	}
	return <p>sdfsd</p>;
};

export default Pokemon;
