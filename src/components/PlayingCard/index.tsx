import React, { useState } from 'react';
import Logo from '../../../public/images/logo.png';
import Favicon from '../../../public/images/favicon.png';
import { GameField, StyledButton, StyledCardImage } from './styles';

const PlayingCard = () => {
	const [isShowCard, setIsShowCard] = useState(false);

	const handleTglShow = () => {
		setIsShowCard(prev => !prev);
	};

	return (
		<GameField>
			<StyledButton onClick={handleTglShow} $isShowCard={isShowCard}>
				<StyledCardImage src={Logo} alt='Game' />
				<StyledCardImage src={Favicon} alt='Game' />
			</StyledButton>
		</GameField>
	);
};

export default PlayingCard;
