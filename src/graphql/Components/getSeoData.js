// import getGqlData from "@/lib/GetGqlData";
import getGqlData from "../../lib/getGqlData";
import { seoQuery } from "../Queries/seoQuery";

export const getSeoData = async (uri = "/") => {
  const variables = { uri };
  const seoData = await getGqlData(seoQuery, variables);
  return seoData?.pageBy;
};
