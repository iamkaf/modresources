/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'night',
      'cyberpunk',
      'dracula',
      'grayscale',
      'halloween',
      'nightOwl',
      'pastel',
      'sunset',
      'system',
      'tango',
      'vermilion',
      'vivid',
      'yeast',
      'dark2',
    ],
  },
};
