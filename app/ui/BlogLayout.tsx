import Head from "next/head";
import React from "react";
import Markdown from "react-markdown";

import Footer from "@/appComponents/Footer";
import MainNavigation from "@/appComponents/MainNavigation";
import { IPostData } from "@/interfaces/IPost";
import { getSortedPostsData } from "@/lib/posts";

import styles from "./MainLayout.module.css";
import Posts from "./Posts";

export const siteTitle = "Ardi Next";

export default async function BlogLayout({
  pageContent,
}): Promise<JSX.Element> {
  const allPostsData = await getAllPostData();
  return (
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
        <Posts layout="images" allPostsData={allPostsData} />
      </main>
      <Footer />
    </>
  );
}

const getAllPostData = async (): Promise<IPostData[]> => getSortedPostsData();
