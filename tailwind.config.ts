import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cyber-royal theme colors
        cyber: {
          green: {
            50: '#f0fff4',
            400: '#00ff88',
            500: '#00e676',
            600: '#00c853',
            700: '#00b04f',
            800: '#009e4a',
            900: '#008c45',
            glow: 'rgba(0, 255, 136, 0.5)'
          },
          cyan: {
            400: '#00ffff',
            500: '#00e5ff',
            600: '#00b8d4',
            700: '#0097a7',
            800: '#00838f',
            900: '#006064',
            glow: 'rgba(0, 255, 255, 0.5)'
          },
          purple: {
            400: '#bb86fc',
            500: '#9c27b0',
            600: '#7b1fa2',
            700: '#6a1b9a',
            800: '#4a148c',
            900: '#3d1a78',
            glow: 'rgba(187, 134, 252, 0.5)'
          },
          dark: {
            100: '#1a1a1a',
            200: '#0d1117',
            300: '#020409',
            400: '#000000',
          }
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        mono: ['var(--font-geist-mono)', 'Consolas', 'Monaco', 'monospace'],
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif']
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'scanline': 'scanline 2s linear infinite',
        'terminal-cursor': 'terminal-cursor 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite'
      },
      keyframes: {
        'pulse-glow': {
          '0%': { boxShadow: '0 0 5px currentColor' },
          '100%': { boxShadow: '0 0 20px currentColor, 0 0 30px currentColor' }
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' }
        },
        'scanline': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' }
        },
        'terminal-cursor': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        }
      },
      backgroundImage: {
        'cyber-grid': 'linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)',
        'cyber-gradient': 'linear-gradient(135deg, #020409 0%, #0d1117 25%, #1a1a1a 50%, #0d1117 75%, #020409 100%)'
      },
      backgroundSize: {
        'cyber-grid': '50px 50px'
      }
    },
  },
  plugins: [],
} satisfies Config;
