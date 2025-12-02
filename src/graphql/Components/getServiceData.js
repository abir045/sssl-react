// import getGqlData from "@/lib/GetGqlData";
import getGqlData from "../../lib/getGqlData";
import { getServicesQuery } from "../Queries/getServicesQuery";

// Function to get all projects or specific projects by ids
export const getServiceData = async (ids = []) => {
  const variables = ids.length ? { ids } : { ids: undefined };

  const serviceData = await getGqlData(getServicesQuery, variables);
  return serviceData?.services?.edges;
};
