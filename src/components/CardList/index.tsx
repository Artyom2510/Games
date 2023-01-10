'use client';

import React, { FC } from 'react';
import GameCard from '../GameCard';
import { TCardListProps } from './types';
import { CardSect } from './styles';

const CardList: FC<TCardListProps> = ({ data }) => {
	return (
		<CardSect>
			{data?.map(el => {
				return <GameCard key={el.id} {...el} />;
			})}
		</CardSect>
	);
};

export default CardList;
