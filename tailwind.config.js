/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			pt: "280px", // begins portrait viewports
			pt1: "320px",
			pt2: "481px",
			pt3: "641px",
			ls: "961px", // begins landscape viewports
			// => @media (min-width: 961px) { ... }
			ls1: "1025px",
			ls2: "1281px",
			ls3: "3840px",
		},
		extend: {
			height: {
				screen: ["100vh", "100dvh"], //fallback for browsers not supporting dvh
				nc: ["84vh", "84dvh"],
				nav: ["8vh", "8dvh"],
			},
			padding: {
				nav: ["8vh", "8dvh"],
			},
			margin: {
				nav: ["8vh", "8dvh"],
			},
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
