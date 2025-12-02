// import getGqlData from "@/lib/GetGqlData";
import getGqlData from "../../lib/getGqlData";
import { getMembersQuery } from "../Queries/getMembersQuery";

// Function to get all projects or specific projects by ids
export const getMembersData = async (ids = []) => {
  const variables = ids.length ? { ids } : { ids: undefined };

  const membersData = await getGqlData(getMembersQuery, variables);
  return membersData?.members?.edges;
};
