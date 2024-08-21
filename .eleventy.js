const pluginRss = require("@11ty/eleventy-plugin-rss")

module.exports = function(config) {
  config.addPassthroughCopy("./assets")
  config.addPlugin(pluginRss)
  // config.setQuietMode(true)
  return {
    templateFormats: [
  	  "md",
      "css",
      "njk"
    ]
  }
}
