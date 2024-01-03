const getNotionGames = async () => {
  const notionGamesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/notion`
  );
  const notionGames = await notionGamesResponse.json();

  return notionGames;
};

export default getNotionGames;
