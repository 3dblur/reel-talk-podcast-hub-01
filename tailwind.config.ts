
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
        // Existing colors (keep for shadcn/ui components)
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))', // Overwritten by new palette below
				foreground: 'hsl(var(--foreground))', // Overwritten by new palette below
				primary: { // Overwritten by new palette below
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: { // Overwritten by new palette below
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: { // Overwritten by new palette below
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        // New color palette from JSON
        'tj-primary': '#e94f3b', // Renamed to avoid conflict with shadcn 'primary' object
        'tj-secondary': '#000000', // Renamed to avoid conflict with shadcn 'secondary' object
        'tj-accent': '#56e5b0', // Renamed to avoid conflict with shadcn 'accent' object
        'tj-background': '#ffe5e0',
        'tj-text-main': '#ffffff',
        'tj-text-subtext': '#000000',
        // Logo specific colors
        'logo-primary': '#F4543C',
        'logo-secondary': '#2E2E2E',
        'logo-accent': '#ffffff',
			},
			fontFamily: {
        // Approximations based on JSON - consider installing/importing specific fonts like 'Alfa Slab One' or a suitable Slab Serif
        'title-slab': ['"Alfa Slab One"', 'serif'], // Using Alfa Slab One as a potential match for Slab Serif Bold
        'body-sans': ['Montserrat', 'sans-serif'], // Using Montserrat as a common sans-serif
        'cta-sans': ['Montserrat', 'sans-serif'], // Using Montserrat, adjust weight/style with classes
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'blink': 'blink 1s step-start infinite',
			},
			backgroundImage: {
				'grain': "url('/noise.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
      textShadow: { // Added for outline effect
        DEFAULT: '1px 1px 0 var(--tw-shadow-color), -1px -1px 0 var(--tw-shadow-color), 1px -1px 0 var(--tw-shadow-color), -1px 1px 0 var(--tw-shadow-color)',
        sm: '0.5px 0.5px 0 var(--tw-shadow-color), -0.5px -0.5px 0 var(--tw-shadow-color), 0.5px -0.5px 0 var(--tw-shadow-color), -0.5px 0.5px 0 var(--tw-shadow-color)',
      },
		}
	},
	plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities, theme, e }) { // Plugin for text-shadow utilities
      const utilities = Object.entries(theme('textShadow')).map(([key, value]) => {
        return {
          [`.${e(`text-shadow${key === 'DEFAULT' ? '' : `-${key}`}`)}`]: {
            textShadow: value,
          }
        }
      })
      addUtilities(utilities)
    }
  ],
} satisfies Config;
