import styled from 'styled-components';
import { Layout } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const StyledLink = styled(Link)`
	width: 48px;
	height: 48px;
`;

export const StyledLogo = styled(Image)`
	width: 100%;
	height: auto;
	border-radius: 50%;
`;
