/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-100': '#F5F9FF',
        'blue-300': '#D6E6FF',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(65deg, var(--color-blue-300, #D6E6FF) -19.12%, var(--color-blue-100, #F5F9FF) 90.69%)',
      },
    },
  },
  plugins: [],
} 