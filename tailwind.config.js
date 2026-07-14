/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#14211f', paper: '#f3f1ec', samfi: '#173e3b', clay: '#c75c42' },
      fontFamily: { display: ['Instrument Serif', 'serif'], sans: ['DM Sans', 'sans-serif'], mono: ['DM Mono', 'monospace'] },
      spacing: { 18: '4.5rem', 22: '5.5rem', 28: '7rem', 36: '9rem' }
    }
  }
}
