import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export async function GET() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const databaseId = process.env.NOTION_GAMES ?? "";

  const allResults: PageObjectResponse[] = [];
  let hasMore = true;
  let startCursor: string | undefined = undefined;

  while (hasMore) {
    const notionData = await notion.databases.query({
      database_id: databaseId,
      page_size: 100,
      start_cursor: startCursor,
      sorts: [
        {
          property: "Nombre",
          direction: "ascending",
        },
      ],
    });

    hasMore = notionData.has_more;
    startCursor = notionData.next_cursor ? notionData.next_cursor : undefined;

    const filteredResults = notionData.results.filter(
      (page): page is PageObjectResponse => "properties" in page
    );

    allResults.push(...filteredResults);
  }

  const gamesMapper = allResults.map((game) => {
    return {
      id: game.id,
      finished_on:
        game.properties["Terminado el"]?.type === "date"
          ? game.properties["Terminado el"].date?.start
          : null,
      format:
        game.properties["Formato"]?.type === "multi_select"
          ? game.properties["Formato"].multi_select.map((format) => format.name)
          : null,
      title:
        game.properties["Nombre"]?.type === "title"
          ? game.properties["Nombre"].title[0]?.plain_text
          : null,
      played:
        game.properties["Jugado"]?.type === "checkbox"
          ? game.properties["Jugado"].checkbox
          : false,
      pursached:
        game.properties["Comprado"]?.type === "checkbox"
          ? game.properties["Comprado"].checkbox
          : null,
      pursache_date:
        game.properties["Fecha compra"]?.type === "date"
          ? game.properties["Fecha compra"].date?.start
          : null,
      platform:
        game.properties["Plataforma"]?.type === "multi_select"
          ? game.properties["Plataforma"].multi_select.map(
              (platform) => platform.name
            )
          : null,
    };
  });

  return Response.json(gamesMapper);
}
