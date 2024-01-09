const getNotionGames = async () => {
  const baseURL =
    "https://ardi-land-next.vercel.app" || "http://localhost:3000";
  const notionGamesResponse = await fetch(`${baseURL}/api/notion`);
  const notionGames = await notionGamesResponse.json();

  return notionGames;
};

export default getNotionGames;
