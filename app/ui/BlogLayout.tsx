import React from "react";

import { IPostData } from "@/interfaces/IPost";
import { getSortedPostsData } from "@/lib/posts";

import global from "./Global.module.css";
import Posts from "./Posts";
import SuperMarkdown from "./SuperMarkdown";

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
        {pageContent.contentHtml ? (
          <SuperMarkdown markdownContent={pageContent.contentHtml} />
        ) : null}
      </section>
      <Posts layout="images" allPostsData={allPostsData} />
    </div>
  );
}

const getAllPostData = async (): Promise<IPostData[]> => getSortedPostsData();
