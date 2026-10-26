/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        copper: {
          400: '#e59866',
          500: '#d35400',
          600: '#b93a00',
        },
        stone: {
          850: '#1c1917',
          900: '#1c1917',
          950: '#0c0a09',
        }
      }
    },
  },
  plugins: [],
}