import React from "react";
import styles from "./Footer.module.css";

const Footer = (): JSX.Element => {
  return (
    <footer id={styles.footer}>
      <p>Esta web está hecha con NextJS</p>
      <p>Ardi Land 2023</p>
    </footer>
  );
};

export default Footer;
