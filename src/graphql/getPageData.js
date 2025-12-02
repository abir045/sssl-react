import getGqlData from "../lib/getGqlData"; // <-- FIX PATH for React
import { pageDataQuery } from "./pageDataQuery";
// import { pageDataQuery } from "./Queries/pageDataQuery";

export async function getPageData(uri) {
  try {
    const pageData = await getGqlData(pageDataQuery, { uri });

    if (!pageData?.nodeByUri) {
      console.warn(`No data found for URI: ${uri}`);
      return [];
    }

    return pageData.nodeByUri.blocks || [];
  } catch (error) {
    console.error("Error fetching page data:", error);
    return [];
  }
}
