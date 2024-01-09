const getNotionGames = async () => {
  const baseURL =
    "https://ardi-land-next.vercel.app" || "http://localhost:3000";
  const notionGamesResponse = await fetch(`${baseURL}/api/notion`, {
    next: { revalidate: 3600 },
  });

  const notionGames = await notionGamesResponse.json();

  return notionGames;
};

export default getNotionGames;
