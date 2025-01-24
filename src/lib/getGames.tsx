import { getBaseURL } from "./helpers";

const getNotionGames = async () => {
  const baseURL = getBaseURL();
  const notionGamesResponse = await fetch(`${baseURL}/api/notion`, {
    next: { revalidate: 10 },
  });

  if (!notionGamesResponse.ok) {
    console.error(`Failed to fetch API: ${notionGamesResponse.statusText}`);
    throw new Error("❌ Error calling Notion Games Data");
  }

  const notionGames = await notionGamesResponse.json();

  return notionGames;
};

export default getNotionGames;
