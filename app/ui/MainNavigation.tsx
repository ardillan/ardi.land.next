"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Stats from "@/appComponents/Stats";
import styles from "./MainNavigation.module.css";

import { NAVIGATION } from "@/lib/constants";

const isActiveClass = (pathName: string): boolean => {
  const currentPathName = usePathname();
  const regex = /\/([^\/]+)/;
  let path = currentPathName.match(regex) ?? "/";

  if (pathName === path[0]) {
    return true;
  }

  return false;
};

const MainNavigation = (): JSX.Element => (
  <nav className={styles.container}>
    <Stats />
    <ul className={styles.items}>
      {NAVIGATION.map((link) => {
        return (
          <li key={link.title}>
            <Link
              className={isActiveClass(link.path) ? styles.active : ""}
              href={link.path}
            >
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default MainNavigation;
