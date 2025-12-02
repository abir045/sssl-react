import { gql } from "@apollo/client";

export const getBlogAndNewsQuery = gql`
  query BlogAndNewsQuery($ids: [ID]) {
    blogs(first: 100, where: { in: $ids }) {
      edges {
        node {
          id
          blogType {
            label
            value
          }
          blogImage
          blogId
          date
          slug
          title
        }
      }
    }
  }
`;
