import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Y2K Theme Colors
        'xp-blue': '#0078D7',
        'xp-light-blue': '#00A4EF',
        'xp-gray': '#E5E5E5',
        'xp-dark-gray': '#C0C0C0',
        'xp-darker-gray': '#808080',
        'xp-green': '#00A300',
        'xp-yellow': '#FFB900',
        'xp-red': '#E81123',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'xp-gradient': 'linear-gradient(to bottom, #0078D7, #00A4EF)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config 