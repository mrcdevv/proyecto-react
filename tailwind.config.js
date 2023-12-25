/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      width: {
        'calc-100%-250px': 'calc(100% - 15.623rem)',
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        lg: '1150px',
      },
    },
  },
  plugins: [],
}

