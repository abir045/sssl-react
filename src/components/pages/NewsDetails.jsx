import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import BlogDetails from "../../page/blogs-and-news/blog-and-news-details/BlogDetails";
// import RelatedBlogs from "../../page/blogs-and-news/RelatedBlogs";
// import { getSingleBlogOrNewsData } from "../../../graphql/Components/getSingleBlogOrNewsData";
import BlogDetails from "../page/blogs-and-news/blog-and-news-details/BlogDetails";
import RelatedBlogs from "../page/blogs-and-news/RelatedBlogs";
import { getSingleBlogOrNewsData } from "../../graphql/Components/getSingleBlogOrNewsData";
import { Skeleton } from "../ui/skeleton";

const NewsDetailsPage = () => {
  const { slug } = useParams();
  const [singleBlogOrNewsItemDataRaw, setSingleBlogOrNewsItemDataRaw] =
    useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNewsDetails() {
      try {
        const newsData = await getSingleBlogOrNewsData(slug);
        setSingleBlogOrNewsItemDataRaw(newsData);
        console.log("News Data:", newsData);
      } catch (err) {
        console.error("Failed to load news details:", err);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchNewsDetails();
    } else {
      setLoading(false);
    }
  }, [slug]);

  if (loading) return <Skeleton />;
  if (!singleBlogOrNewsItemDataRaw)
    return <div>Error loading news details.</div>;

  const { relatedBlogs } = singleBlogOrNewsItemDataRaw || {};

  const relatedBlogsData = {
    section_title: singleBlogOrNewsItemDataRaw.relatedBlogsTitle,
    blogs: relatedBlogs,
  };

  return (
    <div>
      {/* SEO META */}
      <Helmet>
        <title>
          {singleBlogOrNewsItemDataRaw?.title || "News Details"} || Sentry
          Security
        </title>
        <meta
          name="description"
          content={
            singleBlogOrNewsItemDataRaw?.excerpt || "This is news details page"
          }
        />
      </Helmet>

      <BlogDetails blog={singleBlogOrNewsItemDataRaw} />
      <RelatedBlogs data={relatedBlogsData} />
    </div>
  );
};

export default NewsDetailsPage;
