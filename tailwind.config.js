/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: '#0A0A0A',
        surfaceLight: '#141414',
        surfaceBorder: '#242424',
        accent: '#FFFFFF',
      },
      aspectRatio: {
        '9/16': '9 / 16',
        '16/9': '16 / 9',
        '4/5': '4 / 5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-white': '0 0 35px -5px rgba(255, 255, 255, 0.12)',
        'inner-glow': 'inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.3', filter: 'blur(40px)' },
          '100%': { opacity: '0.7', filter: 'blur(60px)' },
        },
      },
    },
  },
  plugins: [],
}
