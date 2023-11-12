import { Metadata } from "next";

import Layout, { siteTitle } from "@/appComponents/MainLayout";
import Welcome from "@/appComponents/Welcome";
import Posts from "@/appComponents/Posts";

import { getSortedPostsData } from "@/lib/posts";

export const metadata: Metadata = {
  title: siteTitle,
};

export default async function Home() {
  const allPostsData = await getAllPostData();
  return (
    <Layout home>
      <Welcome />
      <Posts allPostsData={allPostsData} />
    </Layout>
  );
}

const getAllPostData = async (): Promise<{}[]> => getSortedPostsData();
