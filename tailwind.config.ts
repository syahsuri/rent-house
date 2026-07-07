import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content.ts',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F4F0E8',
        ink: '#2B2320',
        accent: '#B4552D',
        hairline: '#A99E8C',
        // Book chrome
        cover: '#3A2E27', // dark cloth-bound cover
        page: '#FBF8F1', // slightly brighter than paper for lifted pages
        ribbon: '#9A3E1F', // bookmark ribbon (deeper terracotta)
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '78rem',
      },
      boxShadow: {
        page: '0 40px 80px -50px rgba(43,35,32,0.55)',
        cover: '0 50px 100px -40px rgba(43,35,32,0.7)',
      },
    },
  },
  plugins: [],
};

export default config;
