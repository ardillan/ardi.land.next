import React from "react";

import SuperMarkdown from "@/appComponents/SuperMarkdown";
import { IPostData } from "@/interfaces/IPost";

import global from "../ui/Global.module.css";

interface IPageLayout {
  pageContent: IPostData;
  home?: boolean;
  className?: object;
}

const PageLayout = ({ pageContent }: IPageLayout): JSX.Element => (
  <div className={global.container}>
    <header>
      <h1>{pageContent.title}</h1>
      <h3>{pageContent.description}</h3>
    </header>
    <section>
      {pageContent.contentHtml && (
        <SuperMarkdown markdownContent={pageContent.contentHtml} />
      )}
    </section>
  </div>
);

export default PageLayout;
