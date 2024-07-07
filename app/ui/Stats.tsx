import Link from "next/link";
import React from "react";

import { useMobile } from "@/context/MobileContext";
import { ARDI } from "@/lib/constants";
import { getAge, getExperience } from "@/lib/helpers";

import styles from "./Stats.module.css";

interface IStats {
  variant: "mini" | "big";
}

const Stats = ({ variant }: IStats): JSX.Element => {
  const DynamicStats: { [key: string]: React.FC } = {
    mini: miniStats,
    big: bigStats,
  };

  const Stats = DynamicStats[variant];

  return <Stats />;
};

const miniStats = (): JSX.Element => {
  const age = getAge();
  const hearts = [1, 2, 3, 4];
  const experience = getExperience(ARDI.birthday);
  const { isMenuOpen, toggleMenuMobile } = useMobile();

  return (
    <div className={styles.stats}>
      <Link href="/" {...(isMenuOpen && { onClick: toggleMenuMobile })}>
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

const bigStats = (): JSX.Element => {
  const age = getAge();
  const hearts = [1, 2, 3, 4];
  const experience = getExperience(ARDI.birthday);
  const { isMenuOpen, toggleMenuMobile } = useMobile();

  return (
    <div className={styles.stats} style={{ background: "red" }}>
      <Link href="/" {...(isMenuOpen && { onClick: toggleMenuMobile })}>
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
