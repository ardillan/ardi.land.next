"use client";

import React, { useEffect, useState } from "react";

import { formatDate } from "@/lib/helpers";

import styles from "./Footer.module.css";

interface IGithub {
  pushed_at: string;
}

const Footer = (): JSX.Element => {
  const [githubData, setGithubData] = useState<IGithub | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/github/ardi.land");
      const data = await response.json();
      setGithubData(data);
    };
    getData();
  }, []);

  return (
    <footer className={styles.footer}>
      <p>Esta web está hecha con NextJS</p>
      <p>Ardi Land 2023 </p>
      {githubData != null ? (
        <small>
          Última actualización el {formatDate(githubData.pushed_at)}
        </small>
      ) : null}
    </footer>
  );
};

export default Footer;
