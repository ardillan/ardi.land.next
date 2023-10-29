import Head from "next/head";
import Image from "next/image";
import Markdown from "react-markdown";

import Layout from "@/components/Layout";
import Date from "@/components/Date";

import { getAllPostIds, getPostData } from "../../src/lib/posts";

export default function Post({ postData }) {
  const featuredImagePath = `/posts/${
    postData.id
  }/${postData.featuredImage.replace("./", "")}`;

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <article>
        <h1>{postData.title}</h1>
        <Date dateString={postData.date} />
        <Image
          src={featuredImagePath}
          fill
          alt="Imagen de cabecera"
          style={{ objectFit: "cover" }}
        />

        <Markdown
          components={{
            img: function ({ ...props }) {
              const substrings = props.alt?.split("{{");
              const alt = substrings[0].trim();

              return (
                <Image
                  src={props.src}
                  alt={alt}
                  width={1000}
                  height={1000}
                  sizes="(max-width: 768px) 100vw"
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
