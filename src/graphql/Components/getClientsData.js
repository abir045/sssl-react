// import getGqlData from "@/lib/GetGqlData";
import getGqlData from "../../lib/getGqlData";
import { getClientsQuery } from "../Queries/getClientsQuery";

// Function to get all projects or specific projects by ids
export const getClientsData = async (ids = []) => {
  const variables = ids.length ? { ids } : { ids: undefined };

  const clientData = await getGqlData(getClientsQuery, variables);
  return clientData?.clients?.edges;
};
