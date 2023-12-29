import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
   './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      maxWidth:{
        '10xl':'1536px',
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
      on__surface__dark: '#1f1f2c'
    },
     backgroundImage: {
       'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
       'gradient-conic':
       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
       'header-bg': "URL('../../public/images/other/explore-bacground.svg')",
       'author-card': "URL('../../public/images/other/bg-author-card.svg')",
        'gradiant-dark':"linear-gradient(60deg, rgba(20, 20, 31, 1) 54%, rgba(40, 40, 49, 1) 71%, rgba(57, 57, 65, 1) 100%, rgba(63, 63, 70, 1) 100%, rgba(126, 126, 130, 1) 100%, rgba(81, 81, 88, 1) 100%,   rgba(162, 162, 164, 1) 100%,rgba(196, 196, 196, 1) 100%)",
        
      },
  },
  plugins: [],
};

export default config;
