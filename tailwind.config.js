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
			keyframes: {
				slideInRight: {
					"0%": { left: "-100%" },
					"100%": { left: "0" },
				},
				slideOutRight: {
					"0%": { left: "0" },
					"100%": { left: "-100%" },
				},
			},
			animation: {
				slideInRight: "slideInRight 1s ease-in-out",
				slideOutRight: "slideOutRight 1s ease-in-out",
			},
		},
	},
	plugins: [],
};
