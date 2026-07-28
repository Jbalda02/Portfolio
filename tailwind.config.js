/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // NOTE: these live under `extend` on purpose. Declaring fontFamily directly
    // on `theme` replaces Tailwind's defaults instead of adding to them, which
    // is what previously wiped out font-sans / font-serif / font-mono.
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Phudu', 'Poppins', 'sans-serif'],
      },
      colors: {
        // Near-black with a violet undertone. 800 is the page, 600 the cards.
        ink: {
          900: '#08080C',
          800: '#0A0A0F',
          700: '#0F0D16',
          600: '#16131F',
          500: '#1D1929',
        },
        edge: {
          DEFAULT: '#262233',
          bright: '#332C45',
        },
        chalk: '#EDEBF2',
        mist: '#A09CB0',
        dusk: '#6E6980',
        // Violet is the brand. Blue (spark) is a highlight only: distant glows
        // and a single gradient stop, never a section background.
        brand: {
          DEFAULT: '#8B5CF6',
          soft: '#A78BFA',
          deep: '#6D28D9',
          dim: '#4C1D95',
        },
        spark: '#3B82F6',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0) scale(1)' },
          '33%': { transform: 'translate3d(6%, -8%, 0) scale(1.12)' },
          '66%': { transform: 'translate3d(-7%, 6%, 0) scale(0.94)' },
        },
        sheen: {
          '0%': { transform: 'translateX(-130%) skewX(-18deg)' },
          '100%': { transform: 'translateX(240%) skewX(-18deg)' },
        },
        'scroll-hint': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '45%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 1.6s cubic-bezier(.16,.84,.24,1) both',
        'fade-in': 'fade-in 1.6s ease-out both',
        float: 'float 10s ease-in-out infinite',
        aurora: 'aurora 34s ease-in-out infinite',
        sheen: 'sheen 1.6s ease-out',
        'scroll-hint': 'scroll-hint 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
