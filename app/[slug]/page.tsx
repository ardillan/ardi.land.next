/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import BasicLayout from "@/appComponents/BasicLayout";
import BlogLayout from "@/appComponents/BlogLayout";
import PageLayout from "@/appComponents/PageLayout";
import { getPageData } from "@/lib/getPageData";
import { layoutSelector } from "@/lib/helpers";

import Custom404 from "../not-found";

const DynamicPage = async ({ params }) => {
  const { slug } = params;
  const pageContent = await getPageData(slug);

  if (!pageContent) return <Custom404 />;

  const dynamicsLayouts: { [key: string]: any } = {
    page: PageLayout,
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
