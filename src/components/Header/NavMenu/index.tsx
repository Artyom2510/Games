import React, { FC, useState } from 'react';
import { Menu, Modal, Spin } from 'antd';
import { createLabel } from '../../../helpers/createLabel';
import { signOut, useSession } from 'next-auth/react';
import LoginForm from '../../Forms/Login';
import { staticMenu } from './helper';

const NavMenu: FC = () => {
	const { status, data } = useSession();
	const name = data?.user.name || data?.user.email || 'user';

	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const handletglLogin = () => {
		setIsLoginModalOpen(prev => !prev);
	};

	const navMenu = staticMenu(name);

	if (status === 'unauthenticated') {
		navMenu.at(-1)['children'].push({
			label: 'Login',
			key: 'subsystem-menu-login',
			onClick: handletglLogin
		});
	} else {
		navMenu.at(-1)['children'].push(
			{
				label: createLabel(name, '/me'),
				key: 'subsystem-menu-me'
			},
			{
				label: 'signOut',
				key: 'subsystem-menu-exit',
				onClick: signOut
			}
		);
	}

	return (
		<>
			<nav>
				<Menu
					theme='dark'
					mode='horizontal'
					disabledOverflow={true}
					items={navMenu}
				/>
			</nav>

			<Modal
				title='Login'
				open={isLoginModalOpen}
				onCancel={handletglLogin}
				closable
				footer={null}
			>
				<LoginForm />
			</Modal>
		</>
	);
};

export default NavMenu;
