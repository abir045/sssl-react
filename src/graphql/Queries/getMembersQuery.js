import { gql } from "@apollo/client";

export const getMembersQuery = gql`
  query MembersQuery($ids: [ID]) {
    members(first: 100, where: { in: $ids }) {
      edges {
        node {
          id
          title
          image
          message
          memberId
          position
        }
      }
    }
  }
`;
