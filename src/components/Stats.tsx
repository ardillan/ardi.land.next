import Link from "next/link";
import React from "react";

import styles from "./Stats.module.css";

import { getExperience } from "@/lib/getExperience";

const Stats = (): JSX.Element => {
  const hearts = [1, 2, 3, 4];
  const experience = getExperience(new Date("1988-08-23"));
  // const experience = calcularDias(new Date("1988-07-18"));
  console.log("✅", experience);
  return (
    <div className={styles.stats}>
      <Link href="/">
        <img src="/sad-ardi.png" alt="Autorretrato en estilo pixel art" />
      </Link>
      <div className={styles.indicators}>
        <div className={styles.hearts}>
          {hearts.map((value: number) => {
            return (
              <span key={value}>
                <img
                  src="/heart.svg"
                  alt="Contenedor de vitalidad"
                  title="Contenedor de vitalidad"
                />
              </span>
            );
          })}
        </div>
        <div className={styles.experience}>
          <progress id="file" value={experience} max="365" />
        </div>
      </div>
    </div>
  );
};

export default Stats;
function calcularDiasHastaProximoCumpleaños(arg0: Date) {
  throw new Error("Function not implemented.");
}
