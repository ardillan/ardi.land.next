"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

import Stats from "@/appComponents/Stats";
import { NAVIGATION } from "@/lib/constants";

import styles from "./MainNavigation.module.css";

const isActiveClass = (pathName: string): boolean => {
  const currentPathName = usePathname();
  const regex = /\/([^/]+)/;
  const path = currentPathName.match(regex) ?? "/";

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
