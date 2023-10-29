import Head from "next/head";
import Link from "next/link";

import Layout, { siteTitle } from "@/components/Layout";
import Date from "@/components/Date";

import { getSortedPostsData } from "../src/lib/posts";

export default function Home({ allPostsData }): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ul>
        {allPostsData.map(
          (post: { id: number; date: string; title: string }) => {
            return (
              <li key={post.id}>
                <Link href={`/blog/${post.id}`}>{post.title}</Link>
                <br />
                <small>
                  <Date dateString={post.date} />
                </small>
              </li>
            );
          }
        )}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
