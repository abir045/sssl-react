import { useEffect, useState } from "react";
import BlogAndNewsSection from "./BlogAndNewsSection";
import BodyText from "../../typography/BodyText";
import Heading from "../../typography/Heading";
import { getBlogsAndNewsData } from "../../../graphql/Components/getBlogsAndNewsData";
import { Skeleton } from "../../ui/skeleton";

const BlogsAndNewsWrapper = ({ data }) => {
  const [sectionData, setSectionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogsAndNews() {
      try {
        const blogAndNewsIds = data.data.selected_posts.map((post) => post.id);
        const blogAndNewsRaw = await getBlogsAndNewsData(blogAndNewsIds);

        const cardType = data.data.card_type; // 'blog' or 'news'

        const blogsOrNews = blogAndNewsRaw.filter(
          (item) => item.node.blogType?.value === cardType
        );

        const sectionDataObj = {
          card_items: blogsOrNews,
          enable_sorting: data?.data?.enable_sorting,
          card_type: data?.data?.card_type,
          post_per_page: data?.data?.post_per_page,
          load_more: data?.data?.load_more,
        };

        setSectionData(sectionDataObj);
      } catch (err) {
        console.error("Failed to load blogs and news:", err);
      } finally {
        setLoading(false);
      }
    }

    if (data?.data?.selected_posts) {
      fetchBlogsAndNews();
    } else {
      setLoading(false);
    }
  }, [data]);

  if (loading) return <Skeleton />;
  if (!sectionData) return null;

  return (
    <div className="mt-[30px] lg:mt-[90px]">
      {data?.data?.section_title && (
        <div className="section-title space-y-5 lg:space-[50px] max-w-[600px] mx-auto">
          <Heading tag="h2" variant="h2" className="text-app-dark text-center">
            {data?.data?.section_title}
          </Heading>
          <BodyText
            tag="p"
            variant="body-2"
            className="text-app-dark/80 text-center"
          >
            {data?.data?.section_description}
          </BodyText>
        </div>
      )}
      <BlogAndNewsSection data={sectionData} />
    </div>
  );
};

export default BlogsAndNewsWrapper;

// // import BodyText from '@/components/typography/BodyText'
// // import Heading from "@/components/typography/Heading";
// // import { getBlogsAndNewsData } from "@/graphql/Components/getBlogsAndNewsData";
// import BlogAndNewsSection from "./BlogAndNewsSection";
// import BodyText from "../../typography/BodyText";
// import Heading from "../../typography/Heading";
// import { getBlogsAndNewsData } from "../../../graphql/Components/getBlogsAndNewsData";

// const BlogsAndNewsWrapper = async ({ data }) => {
//   const blogAndNewsIds = data.data.selected_posts.map((post) => post.id);
//   const blogAndNewsRaw = await getBlogsAndNewsData(blogAndNewsIds);

//   const cardType = data.data.card_type; // 'blog' or 'news'

//   const blogsOrNews = blogAndNewsRaw.filter(
//     (item) => item.node.blogType?.value === cardType
//   );

//   const sectionData = {
//     card_items: blogsOrNews,
//     enable_sorting: data?.data?.enable_sorting,
//     card_type: data?.data?.card_type,
//     post_per_page: data?.data?.post_per_page,
//     load_more: data?.data?.load_more,
//   };

//   return (
//     <div className="mt-[30px] lg:mt-[90px]">
//       {data?.data?.section_title && (
//         <div className="section-title space-y-5 lg:space-[50px] max-w-[600px] mx-auto">
//           <Heading tag="h2" variant="h2" className="text-app-dark text-center">
//             {data?.data?.section_title}
//           </Heading>
//           <BodyText
//             tag="p"
//             variant="body-2"
//             className="text-app-dark/80 text-center"
//           >
//             {data?.data?.section_description}
//           </BodyText>
//         </div>
//       )}
//       <BlogAndNewsSection data={sectionData} />
//     </div>
//   );
// };

// export default BlogsAndNewsWrapper;
