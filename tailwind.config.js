/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        decorator: {
          '0%, 100%': { transform: 'translateY(5px)' },
          '50%': { transform: 'translateY(0)' }
        },
        clouds: {
          '0%, 100%': { transform: 'translateX(-30px)' },
          '50%': { transform: 'translateX(0)' },
        },
        ballons: {
          '0%, 100%': { transform: 'translateY(-90px)' },
          '50%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        decorator: 'decorator 5s ease-in-out infinite',
        clouds: 'clouds 10s ease-in-out infinite',
        ballons: 'ballons 10s ease-in-out infinite'
      }
    },
  },
  plugins: [],
}
