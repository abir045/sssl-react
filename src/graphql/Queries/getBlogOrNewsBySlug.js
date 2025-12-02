import { gql } from "@apollo/client";

export const singleBlogOrNewsQuery = gql`
  query SingleBlogOrNewsQuery($slug: String!) {
    blogBy(slug: $slug) {
      blogId
      blogImage
      title
      date
      blogsDetails
      relatedBlogsTitle
      relatedBlogs {
        blogImage
        blogId
        date
        slug
        title
      }
    }
  }
`;
