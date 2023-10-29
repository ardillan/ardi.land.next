import Head from "next/head";

import Layout, { siteTitle } from "@/components/Layout";

import { getSortedPostsData } from "../src/lib/posts";
import Posts from "@/componentsPosts";

export default function Home({ allPostsData }): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Posts allPostsData={allPostsData} />
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
