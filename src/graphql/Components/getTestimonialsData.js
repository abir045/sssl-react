// import getGqlData from "@/lib/GetGqlData";
import getGqlData from "../../lib/getGqlData";
import { getTestimonialsQuery } from "../Queries/getTestimonialsQuery";

// Function to get all projects or specific projects by ids
export const getTestimonialsData = async (ids = []) => {
  const variables = ids.length ? { ids } : { ids: undefined };

  const testimonialsData = await getGqlData(getTestimonialsQuery, variables);
  return testimonialsData?.testimonials?.edges;
};
