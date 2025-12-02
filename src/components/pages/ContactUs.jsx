import { useEffect, useState } from "react";
import { getPageData } from "../../graphql/getPageData";
import { formatSeoMeta } from "../../utils/formatSeoMeta";
import RenderBlocksHelper from "../../utils/RenderBlocksHelper";
import { Helmet } from "react-helmet-async";
import { Skeleton } from "../ui/skeleton";

export default function ContactUsPage() {
  const [contactUsPageData, setContactUsPageData] = useState(null);
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch both page data and SEO data
        const [pageData, seo] = await Promise.all([
          getPageData("contact-us"),
          formatSeoMeta("contact-us"),
        ]);

        setContactUsPageData(pageData);
        setSeoData(seo);
        console.log("Page Data:", pageData);
        console.log("SEO Data:", seo);
      } catch (err) {
        console.error("Failed to load contact us page:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <Skeleton />;
  if (!contactUsPageData) return <div>Error loading contact us page.</div>;

  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>{seoData?.title || "Contact Us"}</title>
        {seoData?.description && (
          <meta name="description" content={seoData.description} />
        )}
        {/* Add other meta tags based on what formatSeoMeta returns */}
      </Helmet>

      <RenderBlocksHelper blocks={contactUsPageData} />
    </>
  );
}
