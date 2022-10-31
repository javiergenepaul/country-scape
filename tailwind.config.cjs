/** @type {import('tailwindcss').Config} */


module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			extend: {
				fontFamily: {
					'poppins': ['Poppins', 'sans-serif']
				}
			},
		},
	},
	plugins: [],
}
