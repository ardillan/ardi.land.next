import Link from "next/link";
import React from "react";

import { INavigationLink } from "@/interfaces/INavigationLink";
import { NAVIGATION } from "@/lib/constants";
import getGitHub from "@/lib/getGithub";
import { formatDate } from "@/lib/helpers";

import styles from "./Footer.module.css";

const Footer = async () => {
  const githubData = await getGitHub();
  const getYear = new Date();
  return (
    <footer className={styles.footer}>
      <p>Esta web está hecha con NextJS</p>
      <p> {`Ardi Monster ${getYear.getFullYear()}`} </p>
      {githubData != null ? (
        <small>
          Última actualización el {formatDate(githubData.pushed_at)}
        </small>
      ) : null}
      <ul className={styles.links}>
        {NAVIGATION.filter((link: INavigationLink) =>
          link.position.includes("Footer")
        ).map((link: INavigationLink) => (
          <Link key={link.path} href={link.path}>
            <li>{link.title}</li>
          </Link>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
