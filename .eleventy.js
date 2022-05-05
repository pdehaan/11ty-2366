module.exports = function (eleventyConfig) {
  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");
  eleventyConfig.addLayoutAlias("about", "layouts/about.njk");
  eleventyConfig.addLayoutAlias("landingpage", "layouts/landingpage.njk");

  return {
    dir: {
      input: "src",
      output: "www",
    }
  };
};
