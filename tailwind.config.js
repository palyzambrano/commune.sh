/** @type {import('tailwindcss').Config} */

export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Space Mono', 'sans-serif'],
				title: ['Uncut Sans', 'sans-serif']
			}
		}
	},
	plugins: []
};
