import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getPageData } from "../../graphql/getPageData";
import { formatSeoMeta } from "../../utils/formatSeoMeta";
import RenderBlocksHelper from "../../utils/RenderBlocksHelper";
import { Skeleton } from "../ui/skeleton";

export default function NewsAndMediaPage() {
  const [newsAndMediaPageData, setNewsAndMediaPageData] = useState(null);
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch both page data and SEO data
        const [pageData, seo] = await Promise.all([
          getPageData("news-and-media"),
          formatSeoMeta("news-and-media"),
        ]);

        setNewsAndMediaPageData(pageData);
        setSeoData(seo);
        console.log("Page Data:", pageData);
        console.log("SEO Data:", seo);
      } catch (err) {
        console.error("Failed to load news and media page:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Skeleton />;
  if (!newsAndMediaPageData)
    return <div>Error loading news and media page.</div>;

  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>{seoData?.title || "News and Media"}</title>
        {seoData?.description && (
          <meta name="description" content={seoData.description} />
        )}
        {/* Add other meta tags based on what formatSeoMeta returns */}
      </Helmet>

      <RenderBlocksHelper blocks={newsAndMediaPageData} />
    </>
  );
}
