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
			ls1: "1025px", //low res laptops and tablets
			ls2: "1281px",
			ls3: "2300px",
			ls4: "3840px",
		},
		extend: {
			height: {
				screen: ["100vh", "100svh"],
				dynamic: ["100vh", "100dvh"], //fallback for browsers not supporting dvh
				nc: ["84vh", "84dvh"],
				modal: ["90vh", "90dvh"],
				nav: ["8vh", "8dvh"],
			},
			padding: {
				nav: ["8vh", "8dvh"],
			},
			margin: {
				nav: ["8vh", "8dvh"],
			},
			colors: {
				"dark-bg": "#031926",
				"light-bg": "#FAFAFA",
				"my-red-dark": "#fd0000",
				"my-red-light": "#efa78d",
				"dark-secondary": "#042233",
				"light-secondary": "#f2f8ff",
				"dark-text": "#9DBEBB",
				"light-text": "black",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "100%" },
				},
				slideInLeft: {
					"0%": { transform: "translate(-100vw)" },
					"100%": { transform: "translate(0vw)" },
				},
				slideInRight: {
					"0%": { transform: "translate(100vw)" },
					"100%": { transform: "translate(0vw)" },
				},
			},
			animation: {
				fadeInDelayed: "fadeIn 2s ease-in 7s 1 normal forwards",
				fadeIn: "fadeIn 2s ease-in 1 forwards",
				slideInLeft: "slideInLeft 1s ease-in-out 1 forwards",
				slideInRight: "slideInRight 1s ease-in-out 1 forwards",
			},
			gridTemplateColumns: {
				19: "repeat(19, minmax(0, 1fr))",
			},
		},
	},
	plugins: [],
};
