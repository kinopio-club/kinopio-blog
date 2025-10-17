import { HtmlBasePlugin } from "@11ty/eleventy";
import pugPlugin from "@11ty/eleventy-plugin-pug";
import pluginRss from "@11ty/eleventy-plugin-rss"

export default function(config) {
  config.addPassthroughCopy("./assets")
  config.addPlugin(HtmlBasePlugin);
  config.addPlugin(pugPlugin);
  config.addPlugin(pluginRss)
  config.setQuietMode(true)
}

export let config = {
	templateFormats: [
  	  "md",
      "css",
      "njk"
    ],
    pathPrefix: "/blog/"
}
