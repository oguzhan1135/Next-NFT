import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      maxWidth:{
        '10xl':'1500px',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      dark__bg: '#14141f',
      primary: '#5142FC',
      done: '#47A432',
      warning: '#FFBD0C',
      critical: '#DF4949',
      on__surface: '#FFFFFF',
      secondary: '#EBEBEB',
      black__write: '#343444',
      white__second: '#8A8AA0',
      footer__bg: '#0D0D11',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
  plugins: [],
};

export default config;
