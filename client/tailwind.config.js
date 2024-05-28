/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#218cc2',
				secondary: '#379392',
				dark: '#0f172a',
				whiteCustom: '#fcf6ea',
			},
		},
	},
	plugins: [],
};
