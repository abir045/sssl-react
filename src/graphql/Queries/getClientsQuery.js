import { gql } from "@apollo/client";

export const getClientsQuery = gql`
  query GetClients($ids: [ID]) {
    clients(first: 100, where: { in: $ids }) {
      edges {
        node {
          id
          clientImage
          clientId
          clientName
          website
        }
      }
    }
  }
`;
