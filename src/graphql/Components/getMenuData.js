// import getGqlData from "@/lib/GetGqlData";
import getGqlData from "../../lib/getGqlData";
import { getMenusBySlugQuery } from "../Queries/getMenusBySlugQuery";

// Function to get all projects or specific projects by ids
export const getMenuData = async (slug = null) => {
  const variables = slug ? { slug } : {};
  const menuData = await getGqlData(getMenusBySlugQuery, variables);
  return menuData?.customNavigationBy;
};
