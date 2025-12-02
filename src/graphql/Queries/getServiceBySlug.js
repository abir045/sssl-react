import { gql } from "@apollo/client";

export const getServiceBySlugQuery = gql`
  query ServiceBySlugQuery($slug: String!) {
    serviceBy(slug: $slug) {
      id
      title
      serviceImage

      sectionTitle
      address
      email
      contactBackground
      phoneNumbers {
        label
        link
      }

      serviceDetailsSections {
        section_description
        section_title
        section_points {
          point_text
        }
        section_gallery {
          gallery_image
        }
        section_cards {
          card_description
          card_title
        }
      }

      topClients {
        clientId
      }
      testimonials {
        testimonialId
      }
      youMayLikeServices {
        id
        serviceDescription
        slug
        serviceIcon
        title
      }
    }
  }
`;
