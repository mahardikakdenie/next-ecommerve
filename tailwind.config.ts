import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: "0" },
					to: { opacity: "1" },
				},
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				blink: {
					'0%': { opacity: "0.2" },
					'20%': { opacity: "1" },
					'100% ': { opacity: "0.2" },
				},
			},
			animation: {
				fadeIn: 'fadeIn .3s ease-in-out',
				carousel: 'marquee 60s linear infinite',
				blink: 'blink 1.4s both infinite',
			},
		},
	},
	plugins: [],
};
export default config;
