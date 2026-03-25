/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#07070a',
        'bg-card': 'rgba(20, 20, 25, 0.6)',
        'text-primary': '#f0f0f5',
        'text-secondary': '#a0a0b0',
        'accent-cyan': '#00f0ff',
        'accent-purple': '#8a2be2',
        'accent-pink': '#ff003c',
      },
      fontFamily: {
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      backgroundImage: {
        'rgb-gradient': 'linear-gradient(45deg, #00f0ff, #8a2be2, #ff003c, #00f0ff)',
      },
      animation: {
        'rgb-bg-rotation': 'rgb-bg-rotation 8s ease infinite',
        'rgb-bg-fast': 'rgb-bg-rotation 4s ease infinite',
        'pulse-glow': 'pulsing 2s infinite',
        'blink': 'blink 2s infinite',
      },
      keyframes: {
        'rgb-bg-rotation': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulsing': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(0, 240, 255, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(0, 240, 255, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(0, 240, 255, 0)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        }
      }
    },
  },
  plugins: [],
}
