import React, { FC } from 'react';
import { StyledError } from './styles';

const ErrorMessage: FC<{ err: string }> = ({ err }) => {
	return <StyledError>{err}</StyledError>;
};

export default ErrorMessage;
