/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-bg": "#040A0E",
				"light-bg": "#FAFAFA",
				"my-red": "#fd0000",
				"dark-secondary": "#282828",
				"light-secondary": "#DADADA",
			},
		},
	},
	plugins: [],
};
