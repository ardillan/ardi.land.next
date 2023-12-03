import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";

import { IMarkDownData } from "@/interfaces/IMarkDownData";

import transformImgSrc from "./transform-img-src";

const postsDirectory = path.join(process.cwd(), "content/posts/");

export function getSortedPostsData(size?: number): IMarkDownData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const postsSize = size !== undefined ? size + 1 : fileNames.length;
  const allPostsData = fileNames
    .map((fileName) => {
      // Remove unnecesary mac Files
      if (fileName === ".DS_Store") return {};

      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      return {
        id,
        title: matterResult.data.title,
        subtitle: matterResult.data.subtitle,
        date: matterResult.data.date,
        type: matterResult.data.type,
        description: matterResult.data.description,
        featuredImage: matterResult.data.featuredImage,
        category: matterResult.data.category,
      };
    })
    .filter((el) => Object.keys(el).length !== 0)
    .slice(1, postsSize);

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    console.log(a.date, a.title, " ✏️", b.date, b.title);
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName: string) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id: string): Promise<IMarkDownData> {
  const fullPath = path.join(postsDirectory, `${decodeURIComponent(id)}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(transformImgSrc, {
      id: id,
      imagesDirectory: "/posts",
    })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const postData: IMarkDownData = {
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

  return postData;
}
