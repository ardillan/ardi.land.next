import React from "react";

import getNotionGames from "@/lib/getGames";

import styles from "./Games.module.css";
import CustomTooltip from "./Tooltip";

const Games = async () => {
  const notionGames = await getNotionGames();

  return (
    <>
      <ul className={styles.games}>
        {notionGames !== null &&
          notionGames.results.map((game) => {
            return (
              <li key={game.id}>
                <span>{game.properties["Nombre"].title[0].plain_text}</span>
                <span>
                  {game.properties["Plataforma"].multi_select[0].name}
                </span>
                <CustomTooltip
                  id={game.id}
                  played={game.properties["Jugado"].checkbox ? true : false}
                  content={
                    game.properties["Jugado"].checkbox
                      ? "Completado"
                      : "Sin completar"
                  }
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Games;
