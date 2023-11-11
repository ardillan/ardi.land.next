import Head from "next/head";

import Layout, { siteTitle } from "@/components/Layout";
import Welcome from "@/components/Welcome";

import { getSortedPostsData } from "@/lib/posts";
import Posts from "@/components/Posts";
import Footer from "@/components/Footer";

export default function Home({ allPostsData }): JSX.Element {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Welcome />
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
