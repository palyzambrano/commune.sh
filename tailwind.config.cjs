/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Mono', 'sans-serif'],
        title: ['Uncut Sans', 'sans-serif']
      }
    }
  },
};