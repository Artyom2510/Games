import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

export const Card = styled.div`
	position: relative;
	display: flex;
	flex-shrink: 0;
	width: calc(50% - 12px);
	margin-bottom: 12px;
	padding: 24px;
	border: 1px solid #d9d9d9;
	border-radius: 8px;

	&:nth-last-child(2):not(:nth-child(even)),
	&:last-child {
		margin-bottom: 0;
	}
`;

export const StyledImage = styled(Image)`
	object-fit: contain;
	object-position: 50% 50%;
`;

export const Content = styled.div`
	width: 100%;
	padding-left: 16px;
`;

export const StyledLink = styled(Link)`
	&:hover {
		color: #389e0d;
	}
`;

export const Title = styled.h3`
	margin: 0 0 24px;
	padding-right: 50px;
	color: inherit;
	transition: color 0.2s ease;
`;
