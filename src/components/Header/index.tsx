'use client';

import React, { useState } from 'react';
import { Button, Layout, Modal } from 'antd';
import Logo from '../../../public/images/logo.png';
import LoginForm from '../Forms/Login';
import { StyledHeader, StyledLink, StyledLogo } from './styles';
import NavMenu from './NavMenu';

const PageHeader = () => {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

	const handletglLogin = () => {
		setIsLoginModalOpen(prev => !prev);
	};

	return (
		<Layout>
			<StyledHeader>
				<StyledLink href='/'>
					<StyledLogo src={Logo} alt='Site logo' />
				</StyledLink>
				<NavMenu />
				<Button onClick={handletglLogin}>Login</Button>
			</StyledHeader>
			<Modal
				title='Login'
				open={isLoginModalOpen}
				onCancel={handletglLogin}
				closable
				footer={null}
			>
				<LoginForm />
			</Modal>
		</Layout>
	);
};

export default PageHeader;
