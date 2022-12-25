import React, { FC } from 'react';
import { Menu, Spin } from 'antd';
import { createLabel } from '../../../helpers/createLabel';

// const NavMenu: FC<NavMenuProps> = () => {
const NavMenu: FC = () => {
	const headerMenu = [
		{
			label: createLabel('Games', '/games'),
			key: 'games'
		},
		{ label: createLabel('Films', '/films'), key: 'films' }
		// {
		// 	label: `${currentData?.data[0].name}`,
		// 	icon: <SettingOutlined />,
		// 	key: 'system-menu',
		// 	children: [
		// 		{
		// 			label: labelLang,
		// 			key: 'subsystem-menu-1',
		// 			children: freeLang
		// 		},
		// 		{ label: createLabel(name, '/me'), key: 'me' },
		// 		{ label: exit, key: 'subsystem-menu-5', onClick: () => signOut() }
		// 	]
		// }
	];

	return (
		<nav>
			<Menu
				theme='dark'
				mode='horizontal'
				disabledOverflow={true}
				items={headerMenu}
			/>
		</nav>
	);
};

export default NavMenu;
