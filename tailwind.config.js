module.exports = {
  mode: 'jit',
  purge: {
    content: ['./src/**/*.{html,ts}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkTheme: '#212121',
        primary: '#93C5FD',
        secondary: '#6EE7B7',
        danger: '#CF6679',
      },
      opacity: {
        se: '.05',
        me: '.08',
        be: '.12',
        'text-high': '.87',
        'text-medium': '.60',
        'text-disabled': '.38',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
