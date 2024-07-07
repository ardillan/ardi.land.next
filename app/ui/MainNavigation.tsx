"use client";

import React from "react";

import Stats from "@/appComponents/Stats";

import LinkItems from "./LinkItems";
import styles from "./MainNavigation.module.css";

const MainNavigation = (): JSX.Element => {
  return (
    <nav className={styles.container}>
      <Stats variant="mini" />
      <LinkItems />
    </nav>
  );
};

export default MainNavigation;
