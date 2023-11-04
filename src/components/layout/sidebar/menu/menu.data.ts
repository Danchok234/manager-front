import { PAGES_URL } from '@/src/config/pages-url.config'
import { IMenuItem } from './menu.interface'

export const MENU: IMenuItem[] = [
	{
		link: PAGES_URL.HOME,
		name: 'Home',
		icon: 'home',
	},
	{
		link: PAGES_URL.TASKS,
		name: 'Tasks',
		icon: 'list-checks',
	},
	{
		link: PAGES_URL.MESSAGES,
		name: 'Messages',
		icon: 'messages-square',
	},
	{
		link: PAGES_URL.TEAMS,
		name: 'Teams',
		icon: 'users',
	},
	{
		link: PAGES_URL.CALENDAR,
		name: 'Calendar',
		icon: 'calendar',
	},
]
