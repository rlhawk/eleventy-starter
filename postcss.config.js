module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': {
      stage: 2,
      features: {
        'nesting-rules': true
      },
    },
    ...process.env.NODE_ENV === 'production'
      ? { cssnano: {} }
      : {}
  }
}
