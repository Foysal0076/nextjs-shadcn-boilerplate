/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      container: {
        center: 'true',
        padding: {
          DEFAULT: '1rem',
          sm: '2rem'
        }
      },
      fontFamily: {
        Inter: ['var(--font-inter)'],
        Rubik: ['var(--font-rubik)']
      },
      blur: {
        sm: 'var(--backgroundblur-sm-backdrop-filter)',
        md: 'var(--backgroundblur-md-backdrop-filter)',
        lg: 'var(--backgroundblur-lg-backdrop-filter)',
        xl: 'var(--backgroundblur-xl-backdrop-filter)'
      },
      backgroundImage: {
        'chevron-down': 'url(/assets/images/icons/chevron-down.svg)'
      },
      backgroundPosition: {
        'left-2': 'left .5rem center',
        'left-4': 'left 1rem center',
        'left-6': 'left 1.5rem center',
        'left-8': 'left 2rem center',
        'right-2': 'right .5rem center',
        'right-4': 'right 1rem center',
        'right-6': 'right 1.5rem center',
        'right-8': 'right 2rem center'
      },
      boxShadow: {
        xs: 'var(--box-shadow-xs)',
        sm: 'var(--box-shadow-sm)',
        md: 'var(--box-shadow-md)',
        lg: 'var(--box-shadow-lg)',
        xl: 'var(--box-shadow-xl)',
        '2xl': 'var(--box-shadow-2-xl)',
        '3xl': 'var(--box-shadow-3-xl)',
        top: 'var(--box-shadow-top)',
        bottom: 'var(--box-shadow-bottom)'
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
        alpha: 'lower-alpha'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
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
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require("tailwindcss-animate")
  ],
}
