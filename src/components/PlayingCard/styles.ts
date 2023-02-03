import styled from 'styled-components';
import { Button } from 'antd';
import Image from 'next/image';

export const StyledButton = styled(Button)<{ $isShowCard?: boolean }>`
	position: relative;
	transform-style: preserve-3d;
	width: 100%;
	height: 100%;
	transform: rotateY(${({ $isShowCard }) => ($isShowCard ? '180deg' : '0')});
	padding: 0;
	border: none;
	outline: none !important;
	transition: transform 0.2s ease;
`;

export const StyledCardImage = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;

	&:last-child {
		transform: rotateY(180deg);
	}
`;

export const GameField = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 128px;
	height: 128px;
	margin: 10px;
	perspective: 384px;
	overflow: hidden;
`;
