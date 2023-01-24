'use client';

import { Spin } from 'antd';
import React from 'react';
import Image from 'next/image';
import { useGetPokemonsQuery } from '../../services/pokemon.api';

const imgUrl = process.env.NEXT_PUBLIC_API_URL_IMAGES;

const Films = () => {
	const { pokemons, error, isLoading } = useGetPokemonsQuery(null, {
		selectFromResult: ({ data, error, isLoading }) => ({
			pokemons: data?.results,
			error,
			isLoading
		})
	});

	if (isLoading) {
		return <Spin />;
	}

	return (
		<section>
			{
				<ul>
					{pokemons?.map(({ name, url }) => (
						<li key={name}>
							<Image
								src={`https://${imgUrl}/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${url}.svg`}
								alt={name}
								width={200}
								height={200}
							/>
						</li>
					))}
				</ul>
			}
		</section>
	);
};

export default Films;
