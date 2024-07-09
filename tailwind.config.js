/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Poppins: "Poppins, sans-serif",
			},
			colors: {
				blackText: "#343434",
        buttonBg: "#007148",
        buttonBgHover: "hsl(158, 100%, 32%)",
			},
		},
	},
	plugins: [],
};