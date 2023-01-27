import { SettingOutlined } from '@ant-design/icons';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { createLabel } from '../../../helpers/createLabel';

export const staticMenu = (name: string): ItemType[] => [
	{
		label: createLabel('Games', '/games'),
		key: 'games'
	},
	{ label: createLabel('Pokemons', '/pokemons'), key: 'pokemons' },
	{
		label: name,
		icon: <SettingOutlined />,
		key: 'system-menu',
		children: [
			{
				label: 'Russian',
				key: 'subsystem-menu-lang',
				children: []
			}
		]
	}
];
