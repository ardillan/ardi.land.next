import Head from "next/head";
import React from "react";

import Footer from "@/appComponents/Footer";
import MainNavigation from "@/appComponents/MainNavigation";

interface IBasicLayout {
  children: JSX.Element | JSX.Element[];
  className?: object;
}

export const siteTitle = "Ardi Next";

const BasicLayout = ({ children }: IBasicLayout): JSX.Element => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />

      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <MainNavigation />
    <main>{children}</main>
    <Footer />
  </>
);

export default BasicLayout;
