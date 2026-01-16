import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Safelist dynamic classes used by the custom cursor
    'bg-green-400', 'bg-orange-500', 'bg-blue-200',
    'border-green-400', 'border-orange-500', 'border-blue-200',
  ],
  theme: {
  	screens: {
  		xs: '480px',
  		sm: '640px',
  		md: '768px',
  		lg: '1024px',
  		xl: '1280px',
  		'2xl': '1536px'
  	},
  	extend: {
  		colors: {
  			cyber: {
  				green: {
  					'50': '#f0fff4',
  					'400': '#00ff88',
  					'500': '#00e676',
  					'600': '#00c853',
  					'700': '#00b04f',
  					'800': '#009e4a',
  					'900': '#008c45',
  					glow: 'rgba(0, 255, 136, 0.5)'
  				},
  				cyan: {
  					'400': '#00ffff',
  					'500': '#00e5ff',
  					'600': '#00b8d4',
  					'700': '#0097a7',
  					'800': '#00838f',
  					'900': '#006064',
  					glow: 'rgba(0, 255, 255, 0.5)'
  				},
  				purple: {
  					'400': '#bb86fc',
  					'500': '#9c27b0',
  					'600': '#7b1fa2',
  					'700': '#6a1b9a',
  					'800': '#4a148c',
  					'900': '#3d1a78',
  					glow: 'rgba(187, 134, 252, 0.5)'
  				},
  				dark: {
  					'100': '#1a1a1a',
  					'200': '#0d1117',
  					'300': '#020409',
  					'400': '#000000'
  				}
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			mono: [
  				'var(--font-geist-mono)',
  				'Consolas',
  				'Monaco',
  				'monospace'
  			],
  			sans: [
  				'var(--font-montserrat)',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		animation: {
  			'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
  			glitch: 'glitch 0.3s ease-in-out infinite',
  			scanline: 'scanline 2s linear infinite',
  			'terminal-cursor': 'terminal-cursor 1s step-end infinite',
  			float: 'float 3s ease-in-out infinite',
  			'matrix-rain': 'matrix-rain 20s linear infinite',
  			blink: 'blink 1s step-end infinite'
  		},
  		keyframes: {
  			'pulse-glow': {
  				'0%': {
  					boxShadow: '0 0 5px currentColor'
  				},
  				'100%': {
  					boxShadow: '0 0 20px currentColor, 0 0 30px currentColor'
  				}
  			},
  			glitch: {
  				'0%': {
  					transform: 'translate(0)'
  				},
  				'20%': {
  					transform: 'translate(-2px, 2px)'
  				},
  				'40%': {
  					transform: 'translate(-2px, -2px)'
  				},
  				'60%': {
  					transform: 'translate(2px, 2px)'
  				},
  				'80%': {
  					transform: 'translate(2px, -2px)'
  				},
  				'100%': {
  					transform: 'translate(0)'
  				}
  			},
  			scanline: {
  				'0%': {
  					transform: 'translateX(-100%)'
  				},
  				'100%': {
  					transform: 'translateX(100vw)'
  				}
  			},
  			'terminal-cursor': {
  				'0%, 50%': {
  					opacity: '1'
  				},
  				'51%, 100%': {
  					opacity: '0'
  				}
  			},
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			'matrix-rain': {
  				'0%': {
  					transform: 'translateY(-100vh)'
  				},
  				'100%': {
  					transform: 'translateY(100vh)'
  				}
  			},
  			blink: {
  				'0%, 50%': {
  					opacity: '1'
  				},
  				'50.01%, 100%': {
  					opacity: '0'
  				}
  			}
  		},
  		backgroundImage: {
  			'cyber-grid': 'linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)',
  			'cyber-gradient': 'linear-gradient(135deg, #020409 0%, #0d1117 25%, #1a1a1a 50%, #0d1117 75%, #020409 100%)'
  		},
  		backgroundSize: {
  			'cyber-grid': '50px 50px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
