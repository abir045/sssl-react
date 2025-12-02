import { gql } from "@apollo/client";

export const getTestimonialsQuery = gql`
  query TestimonialsQuery($ids: [ID]) {
    testimonials(first: 100, where: { in: $ids }) {
      edges {
        node {
          id
          companyImage
          companyName
          name
          testimonialId
          description
          position
        }
      }
    }
  }
`;
