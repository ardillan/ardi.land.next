import React from "react";

import SuperMarkdown from "@/appComponents/SuperMarkdown";
import { IMarkDownData } from "@/interfaces/IMarkDownData";
import getStrava from "@/lib/getStrava";

import styles from "../ui/StatsLayout.module.css";
import global from "./Global.module.css";
import Strava from "./Strava";

interface IPageLayout {
  pageContent: IMarkDownData;
  home?: boolean;
  className?: object;
}

const PageLayout = ({ pageContent }: IPageLayout): JSX.Element => {
  getStrava();

  return (
    <div className={`${global.container} ${styles.pageStats}`}>
      <header>
        <h1>{pageContent.title}</h1>
        <h3>{pageContent.description}</h3>
      </header>
      <section>
        {pageContent.contentHtml && (
          <SuperMarkdown markdownContent={pageContent.contentHtml} />
        )}
      </section>
      <section>
        <Strava />
      </section>
    </div>
  );
};

export default PageLayout;
