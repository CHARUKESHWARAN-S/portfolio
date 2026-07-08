/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Near-black base
        ink: {
          950: '#050505',
          900: '#0A0A0A',
          800: '#141414',
          700: '#1F1F1F',
          600: '#2B2B2B',
        },
        // Single vivid orange/red-orange accent — the site's only accent color
        brand: {
          DEFAULT: '#F2540C',
          orange: '#F2540C',
          light: '#FF7A3D',
        },
        mist: {
          50: '#FAFAF9',
          100: '#F0EFEC',
          300: '#B8B7B3',
          400: '#8A8985',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        script: ['"Caveat"', 'cursive'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.3 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
      animation: {
        blink: 'blink 1.6s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('light', '.light &');
    },
  ],
};
