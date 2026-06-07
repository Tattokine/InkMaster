/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F0F10',
          surface: '#141416',
          text: '#FFFFFF',
          muted: '#BDBDBD',
          accent: '#8B1E3F',
          accentAlt: '#D4A76A'
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        ui: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
