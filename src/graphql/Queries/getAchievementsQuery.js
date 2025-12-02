import { gql } from "@apollo/client";

export const getAchievementsQuery = gql`
  query AchievementsQuery($ids: [ID]) {
    achievements(first: 100, where: { in: $ids }) {
      edges {
        node {
          id
          achievementId
          description
          image
          slug
          title
          year
        }
      }
    }
  }
`;
