'use client';

import React, { FC } from 'react';
import PlayingCard from '../PlayingCard';
import ScoreTag from '../ScoreTag';
import { ScoreHead, StyledField, StyledSect, TheBestScore } from './styles';
import { TGameFullCardProps } from './types';

const GameFullCard: FC<TGameFullCardProps> = () => {
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
				<PlayingCard />
				<PlayingCard />
				<PlayingCard />
			</StyledField>
		</StyledSect>
	);
};

export default GameFullCard;
