module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        mgyellow: '#ffd400',
        mgblack: '#0b0b0b',
        mgnavy: '#0f1724',
        mgmuted: '#94a3b8',
        mgred: '#d81b1b'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif']
      }
    }
  },
  plugins: []
}
