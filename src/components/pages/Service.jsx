import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { getPageData } from "../../graphql/getPageData";
import { formatSeoMeta } from "../../utils/formatSeoMeta";
import RenderBlocksHelper from "../../utils/RenderBlocksHelper";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "../ui/skeleton";

export default function OurServicesPage() {
  const [ourServicesData, setOurServicesData] = useState(null);
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch both page data and SEO data
        const [pageData, seo] = await Promise.all([
          getPageData("our-services"),
          formatSeoMeta("our-services"),
        ]);

        setOurServicesData(pageData);
        setSeoData(seo);
        // console.log("Page Data:", pageData);
        // console.log("SEO Data:", seo);
      } catch (err) {
        console.error("Failed to load our services page:", err);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) return <Skeleton className="min-h-screen" />;
  if (!ourServicesData) return <div>Error loading our services page.</div>;

  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>{seoData?.title || "Our Services"}</title>
        {seoData?.description && (
          <meta name="description" content={seoData.description} />
        )}
        {/* Add other meta tags based on what formatSeoMeta returns */}
      </Helmet>

      <RenderBlocksHelper blocks={ourServicesData} />
    </>
  );
}
