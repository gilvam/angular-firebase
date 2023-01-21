import { INav } from './nav.interface';

export const navList: INav[] = [
	{
		route: '/users',
		name: 'users',
		icon: 'group',
	},
	{
		route: '/users/list',
		name: 'users list',
		icon: 'group',
	},
	{
		route: '/users/edit',
		name: 'user edit',
		icon: 'group',
	},
	{
		route: '/about',
		name: 'config',
		icon: 'info_outline',
	},
];
