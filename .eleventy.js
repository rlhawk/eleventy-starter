const htmlmin = require('html-minifier');

module.exports = function (eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  eleventyConfig.addWatchTarget('./tmp/style.css');

  eleventyConfig.addPassthroughCopy({ './tmp/style.css': './css/style.css' });

  eleventyConfig.addPassthroughCopy({
    './node_modules/alpinejs/dist/alpine.js': './js/alpine.js',
  });

  eleventyConfig.addShortcode('version', function () {
    return String(Date.now());
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith('.html')
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: 'src',
      output: 'build',
      includes: '_components',
      layouts: '_layouts',
      data: '_data',
    },
  };
};
