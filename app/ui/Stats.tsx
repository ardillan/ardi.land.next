import Link from "next/link";
import React from "react";

import { useMobile } from "@/context/MobileContext";
import { ARDI_BIRTHDAY } from "@/lib/constants";
import { getAge, getExperience } from "@/lib/helpers";

import styles from "./Stats.module.css";

const Stats = (): JSX.Element => {
  const age = getAge();
  const hearts = [1, 2, 3, 4];
  const experience = getExperience(ARDI_BIRTHDAY);
  const { isMenuOpen, toggleMenuMobile } = useMobile();

  return (
    <div className={styles.stats}>
      <Link href="/sobre-mi" {...(isMenuOpen && { onClick: toggleMenuMobile })}>
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
        <div
          className={`${styles.experience} ${
            experience === 365 ? styles.birthday : styles.regular
          }`}
        >
          <progress id="file" value={experience} max="365" />
        </div>
        <div className={styles.info}>
          <p>
            LV.<span className={styles.honeyYellow}>{age}</span> EXP.
            {experience}
            <span className={styles.honeyYellow}>/</span>365
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
