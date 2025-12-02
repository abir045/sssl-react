// import { getSeoData } from "@/graphql/Components/getSeoData";
import { getSeoData } from "../graphql/Components/getSeoData";
import { SEO_CONSTANTS } from "./constants";

export const formatSeoMeta = async (slug) => {
  const data = (await getSeoData(slug)) || {};

  const { seo = {} } = data;
  const {
    title = SEO_CONSTANTS.title,
    metaDesc = SEO_CONSTANTS.metaDesc,
    metaKeywords = SEO_CONSTANTS.metaKeywords,
    canonical = SEO_CONSTANTS.canonical,
    opengraphImage = {},
    featuredImage = {},
  } = seo;

  // Use defaultImageUrl or fall back to featured or opengraph image
  const ogImageUrl =
    opengraphImage?.mediaItemUrl ||
    featuredImage?.node?.mediaItemUrl ||
    SEO_CONSTANTS.defaultImageUrl;

  return {
    title,
    description: metaDesc,
    metaDesc,
    metaKeywords,
    canonical,
    openGraph: {
      title,
      description: metaDesc,
      image: ogImageUrl,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDesc,
      image: SEO_CONSTANTS.twitterImageUrl,
    },
    searchImage: ogImageUrl,
  };
};
