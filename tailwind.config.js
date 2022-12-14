/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				morado: '#5855FF',
				oscuro: '#34304A',
				fondoClaro: '#C1DBF3',
			},
			fontFamily: {
				sofiaPro: 'Sofia Pro',
			},
		},
		plugins: [],
	},
};
