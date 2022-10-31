/** @type {import('tailwindcss').Config} */


module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			inter: ['Inter', 'sans-serif']
		},
		fontSize: {
			"h1": "50px",
			"h2": "38px",
			"h3": "28px",
			"subheading": "21px",
			"body-large": "18px",
			"body-normal": "16px",
			"body-small": "14px",
			"button": "15px",
		},
		colors: {
			"primary-1": "#137047",
			"primary-2": "#1CA86B",
			"primary-3": "#D9F1E6",
			"primary-4": "#FFFFFF",
			"secondary-1": "#141F1A",
			"secondary-2": "#3B4440",
			"secondary-3": "#626A66",
			"secondary-4": "#A4ADA9",
			"secondary-5": "#C5CCC9",
		},
		extend: {
			backgroundImage: {
				'hero': "url('./assets/hero_background_image.png')"
			}
		},
	},
	plugins: [],
}
