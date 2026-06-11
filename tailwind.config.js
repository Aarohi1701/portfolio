/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0b",
        card: "#161618",
        gold: {
          light: "#e2c275",
          DEFAULT: "#c5a059",
          dark: "#a68541",
        },
        accent: "rgba(197, 160, 89, 0.2)",
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #e2c275 0%, #c5a059 50%, #a68541 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(197, 160, 89, 0.2)',
        'premium': '0 20px 40px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
