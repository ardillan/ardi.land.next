import { Client } from "@notionhq/client";
export const revalidate = true;

export async function GET() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });
  const databaseId = process.env.NOTION_GAMES ?? "";

  const notionData = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: "Nombre",
        direction: "ascending",
      },
    ],
    filter: {
      property: "Comprado",
      checkbox: {
        equals: true,
      },
    },
  });

  return Response.json({ ...notionData });
}
