module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: '#0B0205',
      transparent: 'transparent',
      white: '#fff',
      danger: '#9a2626',
      secondary: '#2C1B47',
      'primary-light': '#DCCAE9',
      'sec-gray': '#CCCCCC',
      'light-success': '#C9F9D1',
      'dark-success': '#38e355',
      'text-gray': '#828181',
    },
    container: {
      center: true,
    },
    extend: {
      order: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
      },
      height: {
        img: '400px',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}
