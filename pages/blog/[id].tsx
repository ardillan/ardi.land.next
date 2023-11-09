import Head from "next/head";
import Image from "next/image";
import Markdown from "react-markdown";

import Layout from "@/components/Layout";
import Date from "@/components/Date";

import { getAllPostIds, getPostData } from "@/lib/posts";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import theme from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-dark";

import styles from "./Blog.module.css";

export type IPostData = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  type: string[];
  contentHtml: string;
  description: string;
  featuredImage: string;
  category: string[];
};

export default function Post({ postData }: { postData: IPostData }) {
  const featuredImagePath = `/posts/${
    postData.id
  }/${postData.featuredImage.replace("./", "")}`;

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article id={styles.article}>
        <header>
          <div className={styles.meta}>
            <h1>{postData.title}</h1>
            <h2>{postData.subtitle}</h2>
            <div className={styles.info}>
              Escrito el <Date dateString={postData.date} /> <span>|</span> {" "}
              {postData.category.map(
                (cat: string, index: number, categories: string[]) => (
                  <>{`${cat}${index === categories.length - 1 ? "" : ", "}`}</>
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
                const { children, className, node, ...rest } = props;

                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag="div"
                    children={String(children).replace(/\n$/, "")}
                    language={match[1]}
                    style={theme}
                    className={styles.code}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
              p: function ({ ...props }) {
                if (props.children?.key?.includes("img")) {
                  return <>{props.children}</>;
                }
                return <p>{props.children}</p>;
              },

              img: function ({ ...props }) {
                const substrings = props.alt?.split("{{");
                return (
                  <figure>
                    <Image
                      src={props.src}
                      alt={props.alt}
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
    </Layout>
  );
}
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
