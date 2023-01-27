import styled from 'styled-components';
import { Typography } from 'antd';
import Link from 'next/link';
const { Text } = Typography;

export const ImageWrap = styled.div`
	display: flex;
	justify-content: center;
`;

export const StyledLink = styled(Link)`
	display: inline-flex;
	align-items: center;
	flex-direction: column;
`;

export const StyledText = styled(Text)`
	margin-bottom: 12px;
	font-size: 28px;
	text-transform: uppercase;
`;
