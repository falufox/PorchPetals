/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Porch Petals brand colors - soft, whimsical, friendly
        petal: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        kraft: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#e8e4de',
          300: '#ddd6cc',
          400: '#c9bfae',
          500: '#b5a990',
          600: '#9d8f75',
          700: '#7d6f5a',
          800: '#5d5340',
          900: '#3d3825',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e8e3',
          200: '#c7d2c7',
          300: '#a3b8a3',
          400: '#7d9d7d',
          500: '#5a825a',
          600: '#486948',
          700: '#3d573d',
          800: '#334533',
          900: '#2a372a',
        },
        cream: {
          50: '#fffef7',
          100: '#fffcf0',
          200: '#fef7e0',
          300: '#feebc8',
          400: '#fbd38d',
          500: '#f6ad55',
          600: '#ed8936',
          700: '#dd6b20',
          800: '#c05621',
          900: '#9c4221',
        }
      },
      fontFamily: {
        'handwritten': ['Caveat', 'cursive'],
        'clean': ['Inter', 'sans-serif'],
        'serif': ['Crimson Text', 'serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'float': 'float 6s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      }
    },
  },
  plugins: [],
}