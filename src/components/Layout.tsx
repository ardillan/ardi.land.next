import Head from "next/head";
import Link from "next/link";

import MainNavigation from "./MainNavigation";

import styles from "./Layout.module.css";

interface ILayout {
  children: JSX.Element | JSX.Element[];
  home?: boolean;
}

export const siteTitle = "Web";

const Layout = ({ children, home }: ILayout): JSX.Element => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Learn how to build a personal website using Next.js"
      />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          siteTitle
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta name="og:title" content={siteTitle} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <MainNavigation />
    <main className={styles.container}>
      {" "}
      {!home && (
        <div>
          <Link href="/">← Back to home</Link>
        </div>
      )}
      {children}
    </main>
  </>
);

export default Layout;
