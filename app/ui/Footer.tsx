import React from "react";

import getGitHub from "@/lib/getGithub";
import { formatDate } from "@/lib/helpers";

import styles from "./Footer.module.css";

const Footer = async (): Promise<JSX.Element> => {
  const { pushed_at } = await getGitHub();

  return (
    <footer className={styles.footer}>
      <p>Esta web está hecha con NextJS</p>
      <p>Ardi Land 2023 </p>
      <small>Última actualización el {formatDate(pushed_at)}</small>
    </footer>
  );
};

export default Footer;
