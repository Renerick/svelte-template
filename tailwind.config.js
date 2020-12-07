const colors = require('tailwindcss/colors')

const production = !process.env.ROLLUP_WATCH;

module.exports = {
  purge: {
    enabled: production,
    content: [
      './**/*.html',
      './**/*.svelte',
    ],
  },
  theme: {
    extend: {
      colors: {
        svelte: "#ff3e00",
        tailwind: colors.cyan['500']
      }
    },
  },
  variants: {},
  plugins: [],
}
