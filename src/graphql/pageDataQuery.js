// src/graphql/queries.js (or wherever you store it)
import { gql } from "@apollo/client";

export const pageDataQuery = gql`
  query PageDataQuery($uri: String!) {
    nodeByUri(uri: $uri) {
      ... on Page {
        id
        title
        blocks {
          order
          name
          attributesJSON
        }
        seo {
          canonical
          cornerstone
          metaDesc
          metaKeywords
          title
          opengraphImage {
            id
            uri
            sourceUrl
          }
        }
      }
    }
  }
`;
