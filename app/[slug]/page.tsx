/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import BasicLayout from "@/appComponents/BasicLayout";
import BlogLayout from "@/appComponents/BlogLayout";
import HomeLayout from "@/appComponents/HomeLayout";
import PageLayout from "@/appComponents/PageLayout";
import { layoutSelector } from "@/lib/helpers";
import { readMarkdownFile } from "@/lib/markdown";

import Custom404 from "../not-found";

const DynamicPage = async ({ params }) => {
  const { slug } = params;
  const pageContent = await readMarkdownFile(slug);

  if (!pageContent) return <Custom404 />;

  const dynamicsLayouts: { [key: string]: any } = {
    page: PageLayout,
    main: BasicLayout,
    home: HomeLayout,
    blog: BlogLayout,
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
