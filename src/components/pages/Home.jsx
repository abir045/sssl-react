import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getPageData } from "../../graphql/getPageData";
import { formatSeoMeta } from "../../utils/formatSeoMeta";
import RenderBlocksHelper from "../../utils/RenderBlocksHelper";
import { Skeleton } from "../ui/skeleton";

export default function HomePage() {
  const [homepageData, setHomepageData] = useState(null);
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch both page data and SEO data
        const [pageData, seo] = await Promise.all([
          getPageData("/"),
          formatSeoMeta("/"),
        ]);

        setHomepageData(pageData);
        setSeoData(seo);
        // console.log("Page Data:", pageData);
        // console.log("SEO Data:", seo);
      } catch (err) {
        console.error("Failed to load homepage:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Add this useEffect to force title update
  useEffect(() => {
    if (seoData?.title) {
      document.title = seoData.title;
      // console.log("✅ Title manually set to:", seoData.title);
    }
  }, [seoData]);

  if (loading) return <Skeleton />;

  if (!homepageData) return <div>Error loading homepage.</div>;

  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>
          {seoData?.title || "Homepage - Sentry Security Dashboard"}
        </title>
      </Helmet>

      <RenderBlocksHelper blocks={homepageData} />
    </>
  );
}
