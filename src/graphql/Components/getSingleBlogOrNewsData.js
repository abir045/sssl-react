// import getGqlData from "@/lib/GetGqlData";
import getGqlData from "../../lib/getGqlData";
import { singleBlogOrNewsQuery } from "../Queries/getBlogOrNewsBySlug";

// Function to get all projects or specific projects by ids
export const getSingleBlogOrNewsData = async (slug = null) => {
  const variables = slug ? { slug } : {};
  const singleBlogOrNewsData = await getGqlData(
    singleBlogOrNewsQuery,
    variables
  );
  return singleBlogOrNewsData?.blogBy;
};
