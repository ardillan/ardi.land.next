const getNotionGames = async () => {
  const baseURL =
    `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` || "http://localhost:3000";
  const notionGamesResponse = await fetch(`${baseURL}/api/notion`);
  const notionGames = await notionGamesResponse.json();

  return notionGames;
};

export default getNotionGames;
