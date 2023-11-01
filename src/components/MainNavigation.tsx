import React from "react";
import Link from "next/link";

import Stats from "./Stats";

import styles from "./MainNavigation.module.css";
import { useRouter } from "next/router";

export type INavigationLink = {
  title: string;
  path: string;
};

const NAVIGATION: Array<INavigationLink> = [
  {
    title: "Inicio",
    path: "/",
  },
  {
    title: "Espacios",
    path: "/espacios",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];

const MainNavigation = (): JSX.Element => {
  const router = useRouter();

  return (
    <nav className={styles.container}>
      <Stats />
      <ul className={styles.items}>
        {NAVIGATION.map((link) => (
          <li key={link.title}>
            <Link
              className={router.pathname === link.path ? styles.active : ""}
              href={link.path}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MainNavigation;
