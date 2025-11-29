module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        scPurple: '#3b0764',
        scGold: '#F6C667'
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(180deg, #3b0764 0%, #F6C667 50%, #ffffff 100%)'
      }
    }
  },
  plugins: [],
}
