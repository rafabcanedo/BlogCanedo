/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     fontFamily: {
      sans: 'var(--font-roboto)',
      alt: 'var(--font-bai-jamjuree)',
      pop: 'var(--font-poppins)',
     },
     colors: {
      white: '#FFFFFF',
      background: '#242426',
      primary: '#41A040',
      orange: '#ff5722',
      hovernav: '#2d2d2e',
      title: '#b7b7b7'
     },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
