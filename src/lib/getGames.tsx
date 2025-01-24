import { getBaseURL } from "./helpers";

const getNotionGames = async () => {
  try {
    const baseURL = getBaseURL();
    const notionGamesResponse = await fetch(`${baseURL}/api/notion`, {
      next: { revalidate: 10 },
    });

    if (!notionGamesResponse.ok) {
      console.error(`Failed to fetch API: ${notionGamesResponse.statusText}`);
      return null;
    }

    const notionGames = await notionGamesResponse.json();

    return notionGames;
  } catch (error) {
    console.error("❌ Error calling Github Data:", error);
    return null;
  }
};

export default getNotionGames;
