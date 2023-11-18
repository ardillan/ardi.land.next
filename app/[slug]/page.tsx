/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import BlogLayout from "@/appComponents/BlogLayout";
import DefaultLayout from "@/appComponents/DefaultLayout";
import HomeLayout from "@/appComponents/HomeLayout";
import MainLayout from "@/appComponents/MainLayout";
import { layoutSelector } from "@/lib/helpers";
import { readMarkdownFile } from "@/lib/markdown";

import Custom404 from "../not-found";
// import styles from "./DynamicPage.module.css";

const DynamicPage = async ({ params }) => {
  const { slug } = params;
  const pageContent = await readMarkdownFile(slug);

  if (!pageContent) return <Custom404 />;

  const dynamicsLayouts: { [key: string]: any } = {
    default: DefaultLayout,
    main: MainLayout,
    home: HomeLayout,
    blog: BlogLayout,
  };

  const layout = layoutSelector(slug);

  const DynamicLayout = dynamicsLayouts[layout];

  return <DynamicLayout pageContent={pageContent} />;
};

export default DynamicPage;
