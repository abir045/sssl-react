import { gql } from "@apollo/client";

export const seoQuery = gql`
  query SeoQuery($uri: String!) {
    pageBy(uri: $uri) {
      id
      seo {
        metaDesc
        title
        canonical
        metaKeywords
        opengraphImage {
          mediaItemUrl
        }
      }
      featuredImage {
        node {
          id
          mediaItemUrl
        }
      }
    }
  }
`;
