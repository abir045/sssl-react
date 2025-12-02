// import getGqlData from "@/lib/GetGqlData";
import getGqlData from "../../lib/getGqlData";
import { getBlogAndNewsQuery } from "../Queries/getBlogAndNewsQuery";

// Function to get all projects or specific projects by ids
export const getBlogsAndNewsData = async (ids = []) => {
  const variables = ids.length ? { ids } : { ids: undefined };

  const blogAndNewsData = await getGqlData(getBlogAndNewsQuery, variables);
  return blogAndNewsData?.blogs?.edges;
};
