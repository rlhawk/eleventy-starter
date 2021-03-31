module.exports = {
  purge: {
    content: ['build/**/*.html'],
    options: {
      whitelist: [],
    },
  },
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
  ],
};
