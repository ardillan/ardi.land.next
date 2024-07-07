import React from "react";

import { ARDI } from "@/lib/constants";
import getStrava from "@/lib/getStrava";
import { getExperience } from "@/lib/helpers";

import styles from "./Strava.module.css";

const Strava = async (): Promise<JSX.Element> => {
  const strava = await getStrava();
  const experience = getExperience(ARDI.birthday);

  return (
    <div className={styles.strava}>
      <div className={styles.avatar}>
        <img src="/sad-ardi.png" alt="Autorretrato en estilo pixel art" />
      </div>
      {strava && (
        <ul>
          <li>{ARDI.nickname}</li>
          <progress id="file" value={experience} max="365" />
          <hr />
          <li>
            🚲 <span>{strava.ytd_ride_totals?.count} salidas </span> |
            <span>
              {(strava.ytd_ride_totals.distance / 1000).toFixed(1)} kilómetros
            </span>
          </li>
          <li>
            🏃🏻‍♂️ <span>{strava.ytd_run_totals?.count} salidas </span> |
            <span>
              {(strava.ytd_run_totals?.distance / 1000).toFixed(1)} kilómetros
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Strava;
