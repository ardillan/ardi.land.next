import { Metadata } from "next";
import React from "react";

import Layout, { siteTitle } from "@/appComponents/MainLayout";
import Posts from "@/appComponents/Posts";
import Welcome from "@/appComponents/Welcome";
import { IPostData } from "@/interfaces/IPost";
import { getSortedPostsData } from "@/lib/posts";

export const metadata: Metadata = {
  title: siteTitle,
};

export default async function Home(): Promise<JSX.Element> {
  const allPostsData = await getAllPostData();
  console.log("allPostsData", allPostsData[0]);
  return (
    <Layout home>
      <Welcome />
      <Posts allPostsData={allPostsData} />
    </Layout>
  );
}

const getAllPostData = async (): Promise<IPostData[]> => getSortedPostsData();
