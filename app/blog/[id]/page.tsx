import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Fragment } from "react";

import BasicLayout from "@/appComponents/BasicLayout";
import Date from "@/appComponents/Date";
import SuperMarkdown from "@/appComponents/SuperMarkdown";
import { getAllPostIds, getPostData } from "@/lib/getPostData";

import global from "../../ui/Global.module.css";
import styles from "./Blog.module.css";

export default async function Post({ params }) {
  const { id } = params;

  const postData = await getPostData(id);
  const featuredImagePath = `/posts/${
    postData.id
  }/${postData?.featuredImage?.replace("./", "")}`;

  return (
    <BasicLayout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article className={`${styles.article} ${global.container}`}>
        <header>
          <div className={styles.meta}>
            <h1>{postData.title}</h1>
            <h2>{postData.subtitle}</h2>
            <div className={styles.info}>
              {postData.date !== undefined ? (
                <>
                  Escrito el <Date dateString={postData.date} /> <span>|</span>{" "}
                </>
              ) : null}

              {postData.category?.map(
                (cat: string, index: number, categories: string[]) => (
                  <Fragment key={cat}>{`${cat}${
                    index === categories.length - 1 ? "" : ", "
                  }`}</Fragment>
                )
              )}
            </div>
          </div>
          <div className={styles.image}>
            <Image
              src={featuredImagePath}
              alt="Imagen de cabecera"
              width={300}
              height={300}
              style={{
                objectFit: "contain",
                width: "100%",
                position: "relative",
              }}
            />
          </div>
        </header>

        <section>
          {postData.contentHtml ? (
            <SuperMarkdown markdownContent={postData.contentHtml} />
          ) : null}
        </section>
      </article>
    </BasicLayout>
  );
}
export async function generateStaticParams(): Promise<{ id: string }[]> {
  const paths = await getAllPostIds();
  return paths.map((path) => {
    return {
      id: path.params.id,
    };
  });
}
