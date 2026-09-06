/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coral: {
          50: '#fff5f4',
          100: '#ffe8e5',
          200: '#ffd5cf',
          300: '#ffb5a9',
          400: '#ff7a6b',
          500: '#ff5e4d',
          600: '#eb4d3d',
          700: '#c5382a',
          800: '#a33126',
          900: '#872e26',
          950: '#4a140f',
        },
        navy: {
          800: '#1a233b',
          850: '#141c30',
          900: '#101626',
          950: '#0b0f19',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
}
