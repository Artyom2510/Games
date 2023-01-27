'use client';

import React from 'react';
import { Spin, Tooltip } from 'antd';
import Image from 'next/image';
import { useGetPokemonsQuery } from '../../services/pokemon.api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageWrap, StyledLink, StyledText } from './styles';
import { swiperConfig } from './helpers';

import 'swiper/swiper.min.css';

const imgUrl = process.env.NEXT_PUBLIC_API_URL_IMAGES;
const statickPath =
	'/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/';

const PokemonsSlider = () => {
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
		<Swiper {...swiperConfig}>
			{pokemons?.map(({ name, id }) => (
				<SwiperSlide key={name}>
					<ImageWrap>
						<StyledLink href={`/pokemons/${name}`}>
							<StyledText type='success' strong>
								{name}
							</StyledText>
							<Tooltip placement='bottom' title='Click on image, to show stats'>
								<Image
									src={`https://${imgUrl}${statickPath}${id}.svg`}
									alt={name}
									width={271}
									height={276}
								/>
							</Tooltip>
						</StyledLink>
					</ImageWrap>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default PokemonsSlider;
