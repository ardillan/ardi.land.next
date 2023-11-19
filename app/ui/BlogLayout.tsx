import React from "react";
import Markdown from "react-markdown";

import { IPostData } from "@/interfaces/IPost";
import { getSortedPostsData } from "@/lib/posts";

import global from "./Global.module.css";
import Posts from "./Posts";

export default async function BlogLayout({
  pageContent,
}): Promise<JSX.Element> {
  const allPostsData = await getAllPostData();
  return (
    <div className={global.container}>
      <header>
        <h1>{pageContent.title}</h1>
        <h3>{pageContent.description}</h3>
      </header>
      <section>
        <Markdown>{pageContent.contentHtml}</Markdown>
      </section>
      <Posts layout="images" allPostsData={allPostsData} />
    </div>
  );
}

const getAllPostData = async (): Promise<IPostData[]> => getSortedPostsData();
