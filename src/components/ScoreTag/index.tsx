import React, { FC } from 'react';
import { StyledTag } from './styles';
import { ScoreTagProps, TColorTag } from './types';

const ScoreTag: FC<ScoreTagProps> = ({ score }) => {
	let scoreType: TColorTag;

	if (score > 50) {
		scoreType = 'green';
	} else if (score < 51 && score > 35) {
		scoreType = 'orange';
	} else {
		scoreType = 'red';
	}

	return <StyledTag color={scoreType}>{score}</StyledTag>;
};

export default ScoreTag;
