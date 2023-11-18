import Head from "next/head";
import React from "react";
import Markdown from "react-markdown";

import Footer from "@/appComponents/Footer";
import MainNavigation from "@/appComponents/MainNavigation";
import { IPostData } from "@/interfaces/IPost";

import styles from "./MainLayout.module.css";

interface IMainLayout {
  pageContent: IPostData;
  home?: boolean;
  className?: object;
}

export const siteTitle = "Ardi Next";

const MainLayout = ({ pageContent }: IMainLayout): JSX.Element => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <MainNavigation />
    <main className={styles.container}>
      <header>
        <h1>{pageContent.title}</h1>
        <h3>{pageContent.description}</h3>
      </header>
      <section>
        <Markdown>{pageContent.contentHtml}</Markdown>
      </section>
    </main>
    <Footer />
  </>
);

export default MainLayout;
