/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        customTheme: {
          primary: '#9037ef',
          secondary: '#AAC4FF',
          accent: '#374151',
          neutral: '#fff',
          'base-100': '#F7F7F8',
          info: '#3ABFF8',
          success: '#34d399',
          warning: '#FBBD23',
          error: '#ef4444'
        }
      }
    ]
  },
  plugins: [require('daisyui')]
}
