module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './styles/**/*.{css}',
  ],
  theme: {
    extend: {
      colors: {
        seo: {
          blue: '#00D4FF',
          'blue-light': '#80EAFF',
          navy: '#2C3053',
          clean: '#F0F8FF',
          peach: '#F3D8C1',
          dark: '#1A1F2C',
          'gray-light': '#F8FAFC',
          'gray-medium': '#94A3B8',
          'gray-dark': '#4A4A4A'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
