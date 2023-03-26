/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily: {
      'sans': ['Lato', 'sans-serif'],
      'serif': ['PT Serif', 'serif']
    },
    extend: {
      colors: {
        black: '#393939',
      }
    }
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  plugins: [],
}
