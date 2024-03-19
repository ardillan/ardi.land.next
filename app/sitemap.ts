import { MetadataRoute } from "next";

import { ARDI } from "@/lib/constants";
import { getAllPagesSlugs } from "@/lib/getPageData";

const selectFolder = (folder: string): string =>
  folder.includes("/content/posts") ? "/blog/" : "/";

const Sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const paths = await getAllPagesSlugs();

  return paths.map((path) => ({
    url: `${ARDI.web.url}${selectFolder(path.params.folder)}${
      path.params.slug
    }`,
    changeFrequency: "yearly",
  }));
};
export default Sitemap;
