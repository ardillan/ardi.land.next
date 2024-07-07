import { IActivityStats } from "@/interfaces/IStrava";

const getStrava = async (): Promise<IActivityStats> => {
  const stravaResponse = await fetch(
    `https://www.strava.com/api/v3/athletes/${process.env.STRAVA_ATHLETE}/stats/`,
    {
      next: { revalidate: 600 },
      headers: {
        Authorization: `Bearer ${process.env.STRAVA_TOKEN}`,
      },
    }
  );

  const allActivities: IActivityStats = await stravaResponse.json();

  return allActivities;
};

export default getStrava;
