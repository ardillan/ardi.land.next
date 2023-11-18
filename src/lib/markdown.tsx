import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";

import { IPostData } from "@/interfaces/IPost";
import transformImgSrc from "@/lib/transform-img-src";

const postsDirectory = path.join(process.cwd(), "content/pages/");

export const readMarkdownFile = async (
  page: string
): Promise<IPostData | null> => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);

  const fileName = fileNames.filter((file) => file === `${page}.md`)[0];

  if (fileName === undefined) return null;

  const id = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(transformImgSrc, { id })
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
