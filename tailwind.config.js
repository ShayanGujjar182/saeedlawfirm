/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				navy: {
					950: '#060B18',
					900: '#0F172A',
					800: '#1E293B',
					700: '#334155',
					600: '#475569',
				},
				gold: {
					700: '#A16207',
					600: '#CA8A04',
					500: '#D97706',
					400: '#F59E0B',
					100: '#FEF3C7',
					50:  '#FFFBEB',
				},
			},
			fontFamily: {
				serif: ['EB Garamond', 'Georgia', 'Cambria', 'serif'],
				sans:  ['Lato', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
