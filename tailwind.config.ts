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
        'glass': 'rgba(255, 255, 255, 0.7)',
        'glass-dark': 'rgba(0, 0, 0, 0.7)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'xp-gradient': 'linear-gradient(to bottom, #0078D7, #00A4EF)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'xp': '0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'glass': '5px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config 