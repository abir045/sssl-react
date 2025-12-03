import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
import { getPageData } from "../../graphql/getPageData";
import { formatSeoMeta } from "../../utils/formatSeoMeta";
import RenderBlocksHelper from "../../utils/RenderBlocksHelper";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "../ui/skeleton";

export default function FaqPage() {
  const [faqPageData, setFaqPageData] = useState(null);
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [pageData, seo] = await Promise.all([
          getPageData("faqs"),
          formatSeoMeta("faqs"),
        ]);

        setFaqPageData(pageData);
        setSeoData(seo);
        // console.log("FAQ Data:", pageData);
        // console.log("SEO Data:", seo.title);
      } catch (err) {
        console.error("Failed to load FAQ page:", err);
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

  if (loading) return <Skeleton />;
  if (!faqPageData) return <div>Error loading FAQ page.</div>;

  return (
    <>
      {/* SEO META - Place AFTER content and only render when seoData exists */}
      {/* SEO META */}
      {seoData && (
        <Helmet>
          <title>{seoData.title || "Faqs - Sentry Security Dashboard"}</title>
        </Helmet>
      )}

      <RenderBlocksHelper blocks={faqPageData} />
    </>
  );
}
