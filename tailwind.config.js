const colors = require('tailwindcss/colors');

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.{svelte,js}',
  ],
  theme: {
    extend: {
      colors: {
        svelte: '#ff3e00',
        tailwind: colors.cyan['500'],
      },
    },
  },
  variants: {},
  plugins: [],
};
