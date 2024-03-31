/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"dark-bg": "#1a1a1a",
				"light-bg": "#d5d7d4",
				"my-red": "#fd0000",
			},
		},
	},
	plugins: [],
};
