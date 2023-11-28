import React from "react";

import getNotionGames from "@/lib/getGames";

import styles from "./Games.module.css";

const Games = async (): Promise<JSX.Element> => {
  const allNotionGames = await getNotionGames();
  return (
    <ul className={styles.games}>
      {allNotionGames &&
        allNotionGames.results.map((game) => {
          return (
            <li key={game.id}>
              <span>{game.properties["Nombre"].title[0].plain_text}</span>
              <span>{game.properties["Plataforma"].multi_select[0].name}</span>
            </li>
          );
        })}
    </ul>
  );
};

export default Games;
