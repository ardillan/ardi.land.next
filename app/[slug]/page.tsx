/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import BasicLayout from "@/appComponents/BasicLayout";
import BlogLayout from "@/appComponents/BlogLayout";
import GamesLayout from "@/appComponents/GamesLayout";
import PageLayout from "@/appComponents/PageLayout";
import PanoramixLayout from "@/appComponents/PanoramixLayout";
import StatsLayout from "@/appComponents/StatsLayout";
import { ARDI } from "@/lib/constants";
import { getAllPagesSlugs, getPageData } from "@/lib/getPageData";
import { layoutSelector } from "@/lib/helpers";

import Custom404 from "../not-found";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const pageContent = await getPageData(slug);
  if (!pageContent) return;

  const { title, description } = pageContent;

  return {
    title: title,
    description: description,
    author: ARDI.nickname,
  };
}

const DynamicPage = async ({ params }) => {
  const { slug } = params;
  const pageContent = await getPageData(slug);

  if (!pageContent) return <Custom404 />;

  const dynamicsLayouts: { [key: string]: any } = {
    page: PageLayout,
    blog: BlogLayout,
    games: GamesLayout,
    panoramix: PanoramixLayout,
    stats: StatsLayout,
  };

  const layout = layoutSelector(slug);

  const DynamicLayout = dynamicsLayouts[layout];

  return (
    <BasicLayout>
      <DynamicLayout pageContent={pageContent} />
    </BasicLayout>
  );
};

export default DynamicPage;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const paths = await getAllPagesSlugs();

  return paths.map((path) => {
    return {
      slug: path.params.slug,
    };
  });
}
