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
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '78rem',
      },
    },
  },
  plugins: [],
};

export default config;
