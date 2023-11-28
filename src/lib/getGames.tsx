const getNotionGames = async () => {
  const notionGamesResponse = await fetch(`${process.env.URL}/api/notion`);
  const notionGames = await notionGamesResponse.json();

  return notionGames;
};

export default getNotionGames;
