import React from "react";

import styles from "./Welcome.module.css";

const Welcome = (): JSX.Element => (
  <div className={styles.welcome}>
    <p>
      <span>It's a me</span> <br />
      <span>Ardi</span>
    </p>
  </div>
);

export default Welcome;
