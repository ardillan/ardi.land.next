import React from "react";

import MainLayout from "@/appComponents/MainLayout";

import styles from "./not-found.module.css";

export default function Custom404() {
  return (
    <MainLayout>
      <div className={styles.notFound}>
        <span>😢</span>
        <h1>Página no encontrada</h1>
      </div>
    </MainLayout>
  );
}
