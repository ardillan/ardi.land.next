import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";

import { IMarkDownData } from "@/interfaces/IMarkDownData";
import transformImgSrc from "@/lib/transform-img-src";

const pagesDirectory = path.join(process.cwd(), "content/pages/");

export const getPageData = async (
  page: string
): Promise<IMarkDownData | null> => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(pagesDirectory);

  const fileName = fileNames.filter((file) => file === `${page}.md`)[0];

  if (fileName === undefined) return null;

  const id = fileName.replace(/\.md$/, "");
  const fullPath = path.join(pagesDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(transformImgSrc, {
      id: id,
      imagesDirectory: "/pages",
    })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    subtitle: matterResult.data.subtitle,
    date: matterResult.data.date,
    type: matterResult.data.type,
    description: matterResult.data.description,
    featuredImage: matterResult.data.featuredImage,
    category: matterResult.data.category,
  };
};

export async function getAllPagesSlugs() {
  const fileNames = fs.readdirSync(pagesDirectory);

  return fileNames.map((fileName: string) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}
