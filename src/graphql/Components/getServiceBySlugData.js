// import getGqlData from "@/lib/GetGqlData";
import getGqlData from "../../lib/getGqlData";
import { getServiceBySlugQuery } from "../Queries/getServiceBySlug";

// Function to get all projects or specific projects by ids
export const getServiceBySlugData = async (slug = null) => {
  const variables = slug ? { slug } : {};
  const getServiceBySlugData = await getGqlData(
    getServiceBySlugQuery,
    variables
  );
  return getServiceBySlugData?.serviceBy;
};
