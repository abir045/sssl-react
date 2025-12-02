import { gql } from "@apollo/client";

export const getServicesQuery = gql`
  query ServicesQuery($ids: [ID]) {
    services(first: 100, where: { in: $ids }) {
      edges {
        node {
          title
          serviceDescription
          serviceIcon
          slug
        }
      }
    }
  }
`;
