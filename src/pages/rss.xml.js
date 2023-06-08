import rss from "@astrojs/rss";

const postImportResult = import.meta.globEager("./posts/*.md");
const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: "Enghouse Portfolio",
    description: "Christopher Swintons Enghouse Portfolio",
    site: import.meta.env.SITE,
    items: import.meta.glob("./posts/**/*.md"),
  });
