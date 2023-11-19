import Head from "next/head";
import Image from "next/image";
import React from "react";
import { Fragment } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/prism/synthwave84";

import BasicLayout from "@/appComponents/BasicLayout";
import Date from "@/appComponents/Date";
import { getAllPostIds, getPostData } from "@/lib/posts";

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

        <section className={styles.content}>
          <Markdown
            components={{
              code: function ({ ...props }) {
                const { children, className, ...rest } = props;

                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    language={match[1]}
                    style={theme}
                    className={styles.code}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
              p: function ({ ...props }) {
                // This avoid having images within <p> elements
                return typeof props.children === "object" ? (
                  <>{props.children}</>
                ) : (
                  <p>{props.children}</p>
                );
              },
              img: function ({ ...props }) {
                if (!props.src) return;
                return (
                  <figure>
                    <Image
                      src={props.src}
                      alt={props.alt ?? ""}
                      title={props.alt}
                      width={900}
                      height={900}
                      sizes="(max-width: 768px) 100vw"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        position: "relative",
                      }}
                    />
                    {props.alt !== null ? (
                      <figcaption>{props.alt}</figcaption>
                    ) : null}
                  </figure>
                );
              },
            }}
          >
            {postData.contentHtml}
          </Markdown>
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
