import React from "react";

import { IMarkDownData } from "@/interfaces/IMarkDownData";
import { getSortedPostsData } from "@/lib/getPostData";

import styles from "./BlogLayout.module.css";
import global from "./Global.module.css";
import Posts from "./Posts";
import SuperMarkdown from "./SuperMarkdown";

export default async function BlogLayout({
  pageContent,
}: {
  pageContent: Promise<IMarkDownData>;
}) {
  const { title, description, contentHtml } = await pageContent;
  const allPostsData = getSortedPostsData();
  return (
    <div className={`${global.container} ${styles.pageBlog}`}>
      <header>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </header>
      <section>
        {contentHtml ? <SuperMarkdown markdownContent={contentHtml} /> : null}
      </section>
      <Posts layout="images" allPostsData={allPostsData} />
    </div>
  );
}
