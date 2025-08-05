/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sophisticated Cottagecore Palette - earthy sage garden
        petal: {
          50: '#f6f8f4',    // Soft sage mist
          100: '#e8f0e1',   // Pale sage
          200: '#d2e2c3',   // Light sage
          300: '#b8d0a2',   // Sage green
          400: '#9bb87e',   // Garden sage
          500: '#7a9d5a',   // Deep sage
          600: '#628048',   // Forest sage
          700: '#4f6538',   // Rich sage
          800: '#3d4c2b',   // Dark sage
          900: '#2c351f',   // Sage shadow
        },
        sage: {
          50: '#f7f8f4',    // Linen white
          100: '#eef1e8',   // Pale mint
          200: '#dde2d1',   // Soft eucalyptus
          300: '#c5cfb5',   // Muted sage
          400: '#a8b895',   // Dusty olive
          500: '#8a9d75',   // Garden sage
          600: '#6d7f5a',   // Forest green
          700: '#556246',   // Deep moss
          800: '#3f4734',   // Pine shadow
          900: '#2a2f23',   // Forest floor
        },
        kraft: {
          50: '#faf9f5',    // Natural white
          100: '#f2f0e8',   // Antique paper
          200: '#e6e1d5',   // Vintage parchment
          300: '#d7cfc0',   // Old linen
          400: '#c4b8a5',   // Weathered paper
          500: '#a89c87',   // Aged canvas
          600: '#8b7f6a',   // Driftwood
          700: '#6e634f',   // Cedar bark
          800: '#514839',   // Dark timber
          900: '#342f26',   // Charcoal wood
        },
        lavender: {
          50: '#f8f6fc',    // Whisper lilac
          100: '#ede8f5',   // Soft lavender
          200: '#d8cce8',   // Muted purple
          300: '#bfa8d4',   // Dusty violet
          400: '#a185bf',   // Vintage plum
          500: '#8264a8',   // Deep lavender
          600: '#654c85',   // Royal purple
          700: '#4d3a65',   // Eggplant
          800: '#362a46',   // Dark plum
          900: '#221b2a',   // Midnight purple
        },
        rosewood: {
          50: '#faf6f4',    // Blush ivory
          100: '#f0e6e0',   // Antique rose
          200: '#ddc7bb',   // Faded pink
          300: '#c5a394',   // Dusty mauve
          400: '#a8806f',   // Rose brown
          500: '#8a614e',   // Deep rosewood
          600: '#6d4a3a',   // Mahogany
          700: '#52372a',   // Dark cherry
          800: '#38261c',   // Espresso brown
          900: '#1f1711',   // Dark cocoa
        }
      },
      fontFamily: {
        'handwritten': ['Dancing Script', 'Caveat', 'cursive'],
        'heading': ['Playfair Display', 'Crimson Text', 'serif'],
        'body': ['Lora', 'Georgia', 'serif'],
        'clean': ['Inter', 'system-ui', 'sans-serif'],
        'accent': ['Libre Baskerville', 'Times', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'bloom': 'bloom 0.8s ease-out',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        bloom: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        'vintage': '0.75rem',
        'organic': '1.5rem 0.75rem 1.25rem 1rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'dreamy': '0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'paper': '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        'vintage': 'inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}