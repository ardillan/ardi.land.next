import { getBaseURL } from "./helpers";

const getNotionGames = async () => {
  const baseURL = getBaseURL();
  const notionGamesResponse = await fetch(`${baseURL}/api/notion`, {
    next: { revalidate: 10 },
  });

  const notionGames = await notionGamesResponse.json();

  return notionGames;
};

export default getNotionGames;
