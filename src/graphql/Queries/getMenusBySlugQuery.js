import { gql } from "@apollo/client";

export const getMenusBySlugQuery = gql`
  query MenusBySlug($slug: String!) {
    customNavigationBy(slug: $slug) {
      id
      footerEmail
      footerCopyright
      footerCompanyTitle
      footerCompanyDescription
      footerAddress
      footerLinks {
        label
        link
      }
      footerPrimaryLogo
      footerSocialLinks {
        link
        platform
      }
      logo {
        primary_logo
        secondary_logo
      }
      navItems {
        label
        link
        children {
          label
          link
        }
      }
      contactInfo {
        label
        link
        type {
          label
          value
        }
      }
      footerPhoneNumbers {
        number
      }
    }
  }
`;
