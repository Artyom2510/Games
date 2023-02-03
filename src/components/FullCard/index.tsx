'use client';

import React, { FC, useCallback } from 'react';
import { shuffle } from '../../helpers/shuffle';
import PlayingCard from '../PlayingCard';
import ScoreTag from '../ScoreTag';
import { ScoreHead, StyledField, StyledSect, TheBestScore } from './styles';
import { TGameFullCardProps } from './types';

const GameFullCard: FC<TGameFullCardProps> = () => {
	const cards = shuffle();
	console.log(cards);

	return (
		<StyledSect>
			<ScoreHead>
				<TheBestScore>
					<h2>Current score -&nbsp;</h2> <ScoreTag size='sm' score={0} />
				</TheBestScore>
				<TheBestScore>
					<h3>The best score -&nbsp;</h3> <ScoreTag size='sm' score={0} />
				</TheBestScore>
			</ScoreHead>
			<StyledField>
				{cards.map(({ id }) => (
					<PlayingCard key={id} />
				))}
			</StyledField>
		</StyledSect>
	);
};

export default GameFullCard;
