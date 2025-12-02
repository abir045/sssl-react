import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LearnMoreBtn from "../../shared/buttons/LearnMoreBtn";
import BodyText from "../../typography/BodyText";
import Heading from "../../typography/Heading";
import { formatDate } from "../../../utils/formatDate";
import { getBlogsAndNewsData } from "../../../graphql/Components/getBlogsAndNewsData";

const NewsMediaHeroSection = ({ data }) => {
  const [blogAndNewsRaw, setBlogAndNewsRaw] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        const blogAndNewsIds = data?.data?.featured_news?.map(
          (post) => post?.id
        );

        if (!blogAndNewsIds || blogAndNewsIds.length < 1) {
          setLoading(false);
          return;
        }

        const newsData = await getBlogsAndNewsData(blogAndNewsIds);
        setBlogAndNewsRaw(newsData);
      } catch (err) {
        console.error("Failed to load featured news:", err);
      } finally {
        setLoading(false);
      }
    }

    if (data?.data?.featured_news) {
      fetchNewsData();
    } else {
      setLoading(false);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (!blogAndNewsRaw || blogAndNewsRaw.length < 1) return null;

  return (
    <div className="pb-[30px] lg:pb-[120px] border-b border-border mt-[20px] mb-[50px] lg:my-[80px] max-w-[1680px] mx-auto">
      <Heading tag="h2" variant="h2" className="text-app-dark text-center">
        {data?.data?.section_title}
      </Heading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] 2xl:gap-x-[60px] mt-[30px] lg:mt-[60px]">
        {/* Featured Article - Left Side */}
        <div className="col-span-1 row-span-2">
          <Link
            to={`/news-and-media/${blogAndNewsRaw[0]?.node?.slug}`}
            className="bg-white h-full flex flex-col group"
          >
            <div className="relative h-full rounded-2xl overflow-hidden max-h-[350px]">
              <img
                src={blogAndNewsRaw[0]?.node?.blogImage}
                alt="Security guards at an event"
                className="object-cover h-full w-full group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-[30px] flex flex-col flex-grow">
              <BodyText
                tag="p"
                variant="body-2"
                className="text-app-gray mb-2.5"
              >
                {formatDate(blogAndNewsRaw[0]?.node?.date)}
              </BodyText>
              <Heading
                tag="h4"
                variant="h4"
                className="text-app-dark group-hover:underline transition-all duration-500"
              >
                {blogAndNewsRaw[0]?.node?.title}
              </Heading>
              <LearnMoreBtn
                to={`/news-and-media/${blogAndNewsRaw[0]?.node?.slug}`}
              >
                Learn More
              </LearnMoreBtn>
            </div>
          </Link>
        </div>

        {/* Right Side Articles */}
        <div className="col-span-1 space-y-8">
          {blogAndNewsRaw?.slice(1, 4).map((news, index) => (
            <Link
              to={`/news-and-media/${news?.node?.slug}`}
              key={index}
              className="bg-white flex-col sm:flex-row flex gap-[30px] border-b border-border pb-[30px] last:border-0 group"
            >
              <div className="rounded-2xl overflow-hidden relative w-full sm:max-w-[275px] h-auto">
                <img
                  src={news?.node?.blogImage}
                  alt="Security guards at an event"
                  className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="md:w-2/3">
                <BodyText
                  tag="p"
                  variant="body-2"
                  className="text-app-gray mb-2.5"
                >
                  {formatDate(news?.node?.date)}
                </BodyText>
                <BodyText
                  tag="p"
                  variant="lead-1"
                  className="text-app-dark group-hover:underline transition-all duration-500 line-clamp-2"
                >
                  {news.node.title}
                </BodyText>
                <LearnMoreBtn to={`/news-and-media/${news?.node?.slug}`}>
                  Learn More
                </LearnMoreBtn>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsMediaHeroSection;

// // import LearnMoreBtn from "@/components/shared/buttons/LearnMoreBtn"
// // import BodyText from "@/components/typography/BodyText";
// // import Heading from "@/components/typography/Heading";
// // import { getBlogsAndNewsData } from "@/graphql/Components/getBlogsAndNewsData";
// // import { formatDate } from "@/utils/formatDate";
// // import Link from "next/link";
// import { Link } from "react-router-dom";
// import LearnMoreBtn from "../../shared/buttons/LearnMoreBtn";
// import BodyText from "../../typography/BodyText";
// import Heading from "../../typography/Heading";
// import { formatDate } from "../../../utils/formatDate";
// import { getBlogsAndNewsData } from "../../../graphql/Components/getBlogsAndNewsData";

// const NewsMediaHeroSection = async ({ data }) => {
//   const blogAndNewsIds = data?.data?.featured_news?.map((post) => post?.id);
//   const blogAndNewsRaw = await getBlogsAndNewsData(blogAndNewsIds);
//   if (blogAndNewsIds?.length < 1) {
//     return null;
//   }

//   return (
//     <div className="pb-[30px] lg:pb-[120px] border-b border-border mt-[20px] mb-[50px] lg:my-[80px] max-w-[1680px] mx-auto">
//       <Heading tag="h2" variant="h2" className="text-app-dark text-center">
//         {data?.data?.section_title}
//       </Heading>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] 2xl:gap-x-[60px] mt-[30px] lg:mt-[60px]">
//         {/* Featured Article - Left Side */}
//         <div className="col-span-1 row-span-2">
//           <Link
//             // href={`/news-and-media/${blogAndNewsRaw[0]?.node?.slug}`}
//             to={`/news-and-media/${blogAndNewsRaw[0]?.node?.slug}`}
//             className="bg-white h-full flex flex-col group"
//           >
//             <div className="relative h-full rounded-2xl overflow-hidden max-h-[350px]">
//               <img
//                 src={blogAndNewsRaw[0]?.node?.blogImage}
//                 alt="Security guards at an event"
//                 className="object-cover h-full w-full group-hover:scale-105 transition-all duration-500"
//               />
//             </div>
//             <div className="mt-[30px] flex flex-col flex-grow">
//               <BodyText
//                 tag="p"
//                 variant="body-2"
//                 className="text-app-gray mb-2.5"
//               >
//                 {formatDate(blogAndNewsRaw[0]?.node?.date)}
//               </BodyText>
//               <Heading
//                 tag="h4"
//                 variant="h4"
//                 className="text-app-dark group-hover:underline transition-all duration-500"
//               >
//                 {blogAndNewsRaw[0]?.node?.title}
//               </Heading>
//               <LearnMoreBtn
//                 // href={`/news-and-media/${blogAndNewsRaw[0]?.node?.slug}`}
//                 to={`/news-and-media/${blogAndNewsRaw[0]?.node?.slug}`}
//               >
//                 Learn More
//               </LearnMoreBtn>
//             </div>
//           </Link>
//         </div>

//         {/* Right Side Articles */}
//         <div className="col-span-1 space-y-8">
//           {blogAndNewsRaw?.slice(1, 4).map((news, index) => (
//             <Link
//               // href={`/news-and-media/${news?.node?.slug}`}
//               to={`/news-and-media/${news?.node?.slug}`}
//               key={index}
//               className="bg-white flex-col sm:flex-row flex gap-[30px] border-b border-border pb-[30px] last:border-0 group"
//             >
//               <div className="rounded-2xl overflow-hidden relative w-full sm:max-w-[275px] h-auto">
//                 <img
//                   src={news?.node?.blogImage}
//                   alt="Security guards at an event"
//                   className="object-cover w-full h-full group-hover:scale-105 transition-all duration-500"
//                 />
//               </div>
//               <div className="md:w-2/3">
//                 <BodyText
//                   tag="p"
//                   variant="body-2"
//                   className="text-app-gray mb-2.5"
//                 >
//                   {formatDate(news?.node?.date)}
//                 </BodyText>
//                 <BodyText
//                   tag="p"
//                   variant="lead-1"
//                   className="text-app-dark group-hover:underline transition-all duration-500 line-clamp-2"
//                 >
//                   {news.node.title}
//                 </BodyText>
//                 <LearnMoreBtn href={`/news-and-media/${news?.node?.slug}`}>
//                   Learn More
//                 </LearnMoreBtn>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsMediaHeroSection;
