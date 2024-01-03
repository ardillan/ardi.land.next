"use client";

import React, { useEffect, useState } from "react";

import styles from "./Games.module.css";
import CustomTooltip from "./Tooltip";

interface INotionGames {
  results: [
    {
      id: string;
      properties: [Nombre: string, Plataforma: string, Jugado: boolean];
    }
  ];
}

const Games = (): JSX.Element => {
  const [notionGames, setNotionGames] = useState<INotionGames | null>(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/notion");
      const data = await response.json();
      console.log(data);
      setNotionGames(data);
    };
    getData();
  }, []);

  console.log(notionGames);
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
