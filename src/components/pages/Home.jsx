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
        console.log("Page Data:", pageData);
        console.log("SEO Data:", seo);
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
        <title>{seoData.title || "Homepage"}</title>
      </Helmet>

      <RenderBlocksHelper blocks={homepageData} />
    </>
  );
}

// import { useEffect, useState } from "react";
// // import { getPageData } from "@/graphql/Components/getPageData";
// // import RenderBlocksHelper from "@/utils/RenderBlocksHelper";
// // Optional if you want SEO meta
// // import { Helmet } from "react-helmet";
// import { getPageData } from "../../graphql/getPageData";
// import RenderBlocksHelper from "../../utils/RenderBlocksHelper";
// import { Helmet } from "react-helmet-async";
// import { formatSeoMeta } from "../../utils/formatSeoMeta";
// // import { getPageData } from "../../graphql/components/getPageData";
// // import { getPageData } from "../graphql/getPageData";

// // import { getPageData } from "../graphql/getPageData";

// export default function HomePage() {
//   const [homepageData, setHomepageData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         // const data = await getPageData("/");
//         // Fetch both page data and SEO data
//         const [pageData, seo] = await Promise.all([
//           getPageData("/"),
//           formatSeoMeta("/"),
//         ]);
//          setHomepageData(pageData);
//         setSeoData(seo);
//         // setHomepageData(data);
//         // console.log(data);
//       } catch (err) {
//         console.error("Failed to load homepage:", err);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (!homepageData) return <div>Error loading homepage.</div>;

//   console.log(homepageData?.seo_title);

//   return (
//     <>
//       {/* SEO META (Optional) */}
//       <Helmet>
//         <title>{homepageData?.seo_title || "Homepage"}</title>
//         <meta name="description" content={homepageData?.seo_description} />
//       </Helmet>

//       <RenderBlocksHelper blocks={homepageData} />
//     </>
//   );
// }
