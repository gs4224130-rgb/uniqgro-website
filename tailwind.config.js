/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0D', midnight: '#07111F', porcelain: '#F5F1E8', paper: '#FBFAF7', cobalt: '#225CFF', chartreuse: '#C7F32B', coral: '#FF6B4A', slate: '#5E6470'
      },
      fontFamily: {
        sans: ['Inter Tight', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'monospace']
      }
    }
  },
  plugins: []
}
