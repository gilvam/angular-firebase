import { INav } from './nav.interface';

export const navList: INav[] = [
	{
		route: '/users/list',
		name: 'users',
		icon: 'group',
	},
	{
		route: '/photos/',
		name: 'photos',
		icon: 'photo',
	},
	{
		route: '/about',
		name: 'config',
		icon: 'info_outline',
	},
];
