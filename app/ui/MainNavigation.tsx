"use client";

import React from "react";

import Stats from "@/appComponents/Stats";

import LinkItems from "./LinkItems";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <nav className={styles.container}>
      <Stats />
      <LinkItems />
    </nav>
  );
};

export default MainNavigation;
