import React from "react";

import Games from "@/appComponents/Games";
import SuperMarkdown from "@/appComponents/SuperMarkdown";

import styles from "./GamesLayout.module.css";
import global from "./Global.module.css";

export default async function GamesLayout({
  pageContent,
}): Promise<JSX.Element> {
  return (
    <div className={`${global.container} ${styles.pageGames}`}>
      <header>
        <h1>{pageContent.title}</h1>
        <h3>{pageContent.description}</h3>
      </header>
      <section>
        {pageContent.contentHtml ? (
          <SuperMarkdown markdownContent={pageContent.contentHtml} />
        ) : null}
      </section>

      <Games />
    </div>
  );
}
