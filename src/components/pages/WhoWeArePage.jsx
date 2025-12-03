import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getPageData } from "../../graphql/getPageData";
import { formatSeoMeta } from "../../utils/formatSeoMeta";
import RenderBlocksHelper from "../../utils/RenderBlocksHelper";
import { Skeleton } from "../ui/skeleton";

export default function WhoWeArePage() {
  const [whoWeArePageData, setWhoWeArePageData] = useState(null);
  const [seoData, setSeoData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch both page data and SEO data
        const [pageData, seo] = await Promise.all([
          getPageData("about-us/who-we-are"),
          formatSeoMeta("about-us/who-we-are"),
        ]);

        setWhoWeArePageData(pageData);
        setSeoData(seo);
        // console.log("Page Data:", pageData);
        // console.log("SEO Data:", seo);
      } catch (err) {
        console.error("Failed to load who we are page:", err);
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
  if (!whoWeArePageData) return <div>Error loading who we are page.</div>;

  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>
          {seoData?.title || "Who We Are - Sentry Security Limited"}
        </title>

        {/* Add other meta tags based on what formatSeoMeta returns */}
      </Helmet>

      <RenderBlocksHelper blocks={whoWeArePageData} />
    </>
  );
}
