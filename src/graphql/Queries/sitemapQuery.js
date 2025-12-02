import { gql } from "@apollo/client";

export const sitemapQuery = gql`
  query SitemapQuery {
    customSitemapUrls {
      changeFrequency
      lastModified
      priority
      url
    }
  }
`;
