import React from "react";

import SuperMarkdown from "@/appComponents/SuperMarkdown";
import { IMarkDownData } from "@/interfaces/IMarkDownData";

import styles from "../ui/PanoramixLayout.module.css";

interface IPanoramixLayout {
  pageContent: IMarkDownData;
  className?: object;
}

const PanoramixLayout = ({ pageContent }: IPanoramixLayout) => {
  return (
    <div className={`${styles.panoramix}`}>
      <header>
        <h1>{pageContent.title}</h1>
        <h3>{pageContent.description}</h3>
      </header>
      <section className={styles.masonry}>
        {pageContent.contentHtml && (
          <SuperMarkdown markdownContent={pageContent.contentHtml} />
        )}
      </section>
    </div>
  );
};

export default PanoramixLayout;
