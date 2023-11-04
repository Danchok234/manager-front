import type { Config } from 'tailwindcss'

const colors = {
	grey_basic: '#787486',
	black: '#0D062D',
	purple_basic: '#5030E5',
	orange_basic: '#FFA500',
	green_basic: '#8BC48A',
}

const config: Config = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: colors,
		},
	},
	plugins: [],
}
export default config
