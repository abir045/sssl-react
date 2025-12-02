// import getGqlData from "@/lib/GetGqlData";
import getGqlData from "../../lib/getGqlData";
import { getAchievementsQuery } from "../Queries/getAchievementsQuery";

// Function to get all projects or specific projects by ids
export const getAchievementData = async (ids = []) => {
  const variables = ids.length ? { ids } : { ids: undefined };

  const achievementData = await getGqlData(getAchievementsQuery, variables);
  //   console.log(achievementData);
  return achievementData?.achievements?.edges;
};
