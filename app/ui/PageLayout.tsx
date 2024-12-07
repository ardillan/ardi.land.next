import React from "react";

import SuperMarkdown from "@/appComponents/SuperMarkdown";
import { IMarkDownData } from "@/interfaces/IMarkDownData";

import global from "../ui/Global.module.css";
import styles from "../ui/PageLayout.module.css";

interface IPageLayout {
  pageContent: IMarkDownData;
  home?: boolean;
  className?: object;
}

const PageLayout = ({ pageContent }: IPageLayout) => (
  <div className={`${global.container} ${styles.page}`}>
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
