/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2cb873',
        secondary: '#57ffab',
        ternary: '#25bbc4',
        black: '#1c211e',
      },
    },
  },
  plugins: [],
};

