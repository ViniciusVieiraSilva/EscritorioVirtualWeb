module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			spacing: {
				18: '4.5rem',
			},
			colors: {
				'prog-dark-blue': '#022956',
				'prog-light-blue': '#2E7EED',
				'prog-dark-orange': '#ED8600',
				'prog-light-orange': '#F4A800',
				'prog-gray': '#3F3F46',
			},
		},
		fontFamily: {
			poppins: ['Poppins', 'sans-serif'],
		},
	},
	plugins: [require('tailwind-scrollbar')],
	variants: {
		scrollbar: ['rounded'],
	},
};
