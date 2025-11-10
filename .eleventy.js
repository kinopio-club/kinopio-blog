import { HtmlBasePlugin } from "@11ty/eleventy";
import pugPlugin from "@11ty/eleventy-plugin-pug";
import pluginRss from "@11ty/eleventy-plugin-rss";
import sitemap from "@quasibit/eleventy-plugin-sitemap";

export default function(config) {
  config.addPassthroughCopy("./assets")
  config.addPlugin(HtmlBasePlugin);
  config.addPlugin(pugPlugin);
  config.addPlugin(pluginRss)
  config.addPlugin(sitemap, {
      sitemap: {
        hostname: "https://kinopio.club",
      },
  });
  
  config.addCollection("sitemap", (collectionApi) => {
    return collectionApi.getAll().map((item, index, all) => {
       return {
         url: "/blog" + item.url,
         date: item.date,
         data: item.data
       };
     });
  });
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
