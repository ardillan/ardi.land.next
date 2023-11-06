import Head from "next/head";
import Image from "next/image";
import Markdown from "react-markdown";

import Layout from "@/components/Layout";
import Date from "@/components/Date";

import { getAllPostIds, getPostData } from "@/lib/posts";

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
          <div className={styles.content}>
            <h1>{postData.title}</h1>
            <h2>{postData.subtitle}</h2>
            <Date dateString={postData.date} />
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
        <Markdown
          components={{
            img: function ({ ...props }) {
              const substrings = props.alt?.split("{{");
              const alt = substrings[0].trim();

              return (
                <Image
                  src={props.src}
                  alt={alt}
                  width={900}
                  height={900}
                  sizes="(max-width: 768px) 100vw"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    position: "relative",
                  }}
                />
              );
            },
          }}
        >
          {postData.contentHtml}
        </Markdown>
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
