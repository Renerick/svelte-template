const production = !process.env.ROLLUP_WATCH;

module.exports = {
  // see https://tailwindcss.com/docs/upcoming-changes
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
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
        svelte: "#ff3e00"
      }
    },
  },
  variants: {},
  plugins: [],
}
