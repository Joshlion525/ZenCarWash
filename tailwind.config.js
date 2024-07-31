/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
		extend: {
			fontFamily: {
				Poppins: "Poppins, sans-serif",
			},
			colors: {
				blackText: "#343434",
				buttonBg: "#007148",
				buttonBgHover: "hsl(158, 100%, 32%)",
				cardBackground: "hsla(158, 100%, 22%, 0.08)",
			},
		},
	},
	plugins: [],
};