module.exports = {
  stories: [
    '../src/_components/**/*.stories.mdx',
    '../src/_components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.njk$/,
      use: [
        {
          loader: 'nunjucks-loader',
          options: {},
        },
      ],
    });

    /**
     * Allow Storybook to work with PostCSS 8 by swapping out the
     * postcss-loader Storybook uses by default with the one defined
     * in package.json. Presumably, this can be removed once Storybook
     * is updated to support PostCSS 8.
     * (See https://github.com/storybookjs/storybook/issues/12668#issuecomment-751134567)
     */
    // Find the only Storybook webpack rule that tests for CSS.
    const cssRule = config.module.rules.find((rule) =>
      'test.css'.match(rule.test),
    );
    // Which loader in this rule mentions the custom Storybook postcss-loader?
    const loaderIndex = cssRule.use.findIndex((loader) => {
      // Loaders can be strings or objects.
      const loaderString = typeof loader === 'string' ? loader : loader.loader;
      // Find the first mention of "postcss-loader", it may be in a string like:
      // "@storybook/core/node_modules/postcss-loader"
      return loaderString.includes('postcss-loader');
    });
    // Simple loader string form, removes the obsolete "options" key.
    cssRule.use[loaderIndex] = 'postcss-loader';

    // Return the altered config.
    return config;
  },
};
