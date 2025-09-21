module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css");

  eleventyConfig.addPassthroughCopy("humans.txt");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("manifest.json");

  eleventyConfig.addPassthroughCopy("_headers");
  eleventyConfig.addPassthroughCopy("_redirects");

  eleventyConfig.addPassthroughCopy("icons");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addWatchTarget("./src/css/");

  return {
    dir: {
      input: "src",
      output: "public",
    },
    markdownTemplateEngine: "njk",
  };
};
