import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getPageData } from "../../graphql/getPageData";
import { formatSeoMeta } from "../../utils/formatSeoMeta";
import RenderBlocksHelper from "../../utils/RenderBlocksHelper";
import { Skeleton } from "../ui/skeleton";

export default function OurManagementPage() {
  const [ourManagementPageData, setOurManagementPageData] = useState(null);
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch both page data and SEO data
        const [pageData, seo] = await Promise.all([
          getPageData("about-us/our-management"),
          formatSeoMeta("about-us/our-management"),
        ]);

        setOurManagementPageData(pageData);
        setSeoData(seo);
        // console.log("Page Data:", pageData);
        // console.log("SEO Data:", seo);
      } catch (err) {
        console.error("Failed to load our management page:", err);
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
  if (!ourManagementPageData)
    return <div>Error loading our management page.</div>;

  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>
          {seoData?.title || "Our Management - Sentry Security Dashboard"}
        </title>

        {/* Add other meta tags based on what formatSeoMeta returns */}
      </Helmet>

      <RenderBlocksHelper blocks={ourManagementPageData} />
    </>
  );
}
