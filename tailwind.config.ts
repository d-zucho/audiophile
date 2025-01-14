import type { Config } from 'tailwindcss'
import { styleText } from 'util'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: {
        //   DEFAULT: '0.5rem',
        //   sm: '2rem',
        //   md: '2.25rem',
        //   lg: '4rem',
        //   xl: '5rem',
        //   '2xl': '6rem',
        // },
      },
      colors: {
        my: {
          primary: 'var(--my-primary)',
          'primary-hover': 'var(--my-primary-hover)',
          gray: 'var(--my-gray)',
          snow: 'var(--my-snow)',
          dark: 'var(--my-dark)',
          'hero-dark': 'var(--my-hero-dark)',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      backgroundImage: {
        'hero-image-desktop': "url('@/assets/home/desktop/image-hero.jpg')",
        'hero-image-mobile': "url('@/assets/home/mobile/image-header.jpg')",
        'hero-image-tablet': "url('@/assets/home/tablet/image-header.jpg')",
        'circle-pattern': "url('/src/assets/home/desktop/pattern-circles.svg')",
        'best-gear-desktop':
          "url('@/assets/shared/desktop/image-best-gear.jpg')",
        'best-gear-mobile': "url('@/assets/shared/mobile/image-best-gear.jpg')",
        'best-gear-tablet': "url('@/assets/shared/tablet/image-best-gear.jpg')",
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
