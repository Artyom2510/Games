import styled from 'styled-components';
import Image from 'next/image';

export const Card = styled.div`
	position: relative;
	display: flex;
	max-width: calc(50% - 12px);
	padding: 24px;
	border: 1px solid #d9d9d9;
	border-radius: 8px;
`;

export const StyledImage = styled(Image)`
	object-fit: contain;
	object-position: 50% 50%;
`;

export const Content = styled.div`
	width: 100%;
	padding-left: 16px;
`;

export const Title = styled.h3`
	margin: 0 0 24px;
	padding-right: 50px;
`;
