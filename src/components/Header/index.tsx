'use client';

import React from 'react';
import { Layout } from 'antd';
import Logo from '../../../public/images/logo.png';
import { StyledHeader, StyledLink, StyledLogo } from './styles';
import NavMenu from './NavMenu';

const PageHeader = () => {
	return (
		<Layout>
			<StyledHeader>
				<StyledLink href='/'>
					<StyledLogo src={Logo} alt='Site logo' />
				</StyledLink>
				<NavMenu />
			</StyledHeader>
		</Layout>
	);
};

export default PageHeader;
