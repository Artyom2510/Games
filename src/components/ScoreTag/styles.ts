import { Tag } from 'antd';
import styled from 'styled-components';
import { TSizeTag } from './types';

export const StyledTag = styled(Tag)<{ $size: TSizeTag }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: ${({ $size }) => ($size === 'lg' ? '52px' : '28px')};
	height: ${({ $size }) => ($size === 'lg' ? '52px' : '28px')};
	margin: 0;
	font-size: ${({ $size }) => ($size === 'lg' ? '20px' : '16px')};
	font-weight: 600;
	line-height: 1;
`;
