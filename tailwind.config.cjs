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
			h1: "50px",
			h2: "38px",
			h3: "28px",
			subheading: "21px",
			body: {
				large: "18px",
				normal: "16px",
				small: "14px"
			},
			button: "15px",
		},
		colors: {
			primary: {
				1: "#137047",
				2: "#1CA86B",
				3: "#D9F1E6",
				4: "#FFFFFF",
			},
			secondary: {
				1: "#141F1A",
				2: "#3B4440",
				3: "#626A66",
				4: "#A4ADA9",
				5: "#C5CCC9"
			}
		},
		extend: {
			backgroundImage: {
				hero: "url('./assets/hero_background_image.png')",
				discovery: "url('./assets/discovery_background_img.png')",
				shade: "linear-gradient(180deg, rgba(20, 31, 26, 0) 0%, rgba(20, 31, 26, 0.61) 100%);"
			}
		},
	},
	plugins: [],
}
