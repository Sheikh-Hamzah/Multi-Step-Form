/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f1ff',
          100: '#e0e3ff',
          200: '#c7cdfe',
          300: '#a4adfc',
          400: '#8187f8',
          500: '#667eea',
          600: '#5a5fe0',
          700: '#4a4bc5',
          800: '#3e419f',
          900: '#373b7e',
        },
        secondary: {
          500: '#764ba2',
          600: '#6b4190',
        }
      },
      animation: {
        'orb-float-1': 'orbFloat1 25s ease-in-out infinite',
        'orb-float-2': 'orbFloat2 30s ease-in-out infinite',
        'orb-float-3': 'orbFloat3 20s ease-in-out infinite',
        'particle-rise': 'particleRise linear infinite',
        'shape-rotate-1': 'shapeRotate1 30s linear infinite',
        'shape-rotate-2': 'shapeRotate2 25s linear infinite',
        'shape-pulse': 'shapePulse 4s ease-in-out infinite',
        'shape-morph': 'shapeMorph 15s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'grid-move': 'gridMove 20s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slideIn 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        'shake': 'shake 0.4s ease',
        'spin': 'spin 0.8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        orbFloat1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(100px, 50px) scale(1.1)' },
          '50%': { transform: 'translate(50px, 100px) scale(0.9)' },
          '75%': { transform: 'translate(-50px, 50px) scale(1.05)' },
        },
        orbFloat2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(-80px, -60px) scale(1.1)' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.95)' },
        },
        orbFloat3: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(0.8)', opacity: '0.3' },
          '50%': { transform: 'translate(-50%, -50%) scale(1.2)', opacity: '0.5' },
        },
        particleRise: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(720deg)', opacity: '0' },
        },
        shapeRotate1: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shapeRotate2: {
          from: { transform: 'rotate(0deg) scale(1)' },
          to: { transform: 'rotate(-360deg) scale(1)' },
        },
        shapePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.2' },
        },
        shapeMorph: {
          '0%, 100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '25%': { borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%' },
          '50%': { borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%' },
          '75%': { borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        gridMove: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(50px, 50px)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseRing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0' },
          '50%': { transform: 'scale(1.2)', opacity: '0.3' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)' },
          to: { boxShadow: '0 0 40px rgba(102, 126, 234, 0.6)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-success': 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(102, 126, 234, 0.4)',
        'glow-lg': '0 0 40px rgba(102, 126, 234, 0.5)',
        'success-glow': '0 0 20px rgba(16, 185, 129, 0.4)',
      },
    },
  },
  plugins: [],
}
