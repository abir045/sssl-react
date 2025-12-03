import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getPageData } from "../../graphql/getPageData";
import { formatSeoMeta } from "../../utils/formatSeoMeta";
import RenderBlocksHelper from "../../utils/RenderBlocksHelper";
import { Skeleton } from "../ui/skeleton";

export default function BlogAndArticlesPage() {
  const [blogAndArticlePageData, setBlogAndArticlePageData] = useState(null);
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch both page data and SEO data
        const [pageData, seo] = await Promise.all([
          getPageData("blog-and-articles"),
          formatSeoMeta("blog-and-articles"),
        ]);

        setBlogAndArticlePageData(pageData);
        setSeoData(seo);
        // console.log("Page Data:", pageData);
        // console.log("SEO Data:", seo);
      } catch (err) {
        console.error("Failed to load blog and articles page:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (seoData?.title) {
      document.title = seoData.title;
      // console.log("✅ Title manually set to:", seoData.title);
    }
  }, [seoData]);

  if (loading) return <Skeleton className="min-h-screen" />;
  if (!blogAndArticlePageData)
    return <div>Error loading blog and articles page.</div>;

  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>
          {seoData?.title || "Blog and Articles - Sentry Security Dashboard"}
        </title>
      </Helmet>

      <RenderBlocksHelper blocks={blogAndArticlePageData} />
    </>
  );
}
