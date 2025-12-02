import React, { useState, useEffect } from "react";
// import { AppButton } from '@/components/shared/Buttons'
// import BodyText from "@/components/typography/BodyText";
//  import SortingIcon from "@/components/icons/SortingIcon";
// import { Skeleton } from "@/components/ui/skeleton";
// import BlogCard from "@/components/shared/cards/BlogCard";
// import NewsCard from "@/components/shared/cards/NewsCard";
import { AppButton } from "../../shared/Buttons";
import BodyText from "../../typography/BodyText";
import SortingIcon from "../../icons/SortingIcon";
import { Skeleton } from "../../ui/skeleton";
import BlogCard from "../../shared/cards/BlogCard";
import NewsCard from "../../shared/cards/NewsCard";

const POSTS_PER_PAGE = 9;

const BlogAndNewsSection = ({ data }) => {
  const [allBlogs, setAllBlogs] = useState(data.card_items);
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [visibleCount, setVisibleCount] = useState(
    data.post_per_page || POSTS_PER_PAGE
  );
  const [isAscending, setIsAscending] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data?.card_items?.length) {
      const sortedBlogs = [...data.card_items].sort((a, b) => {
        const dateA = new Date(a.node.date);
        const dateB = new Date(b.node.date);
        return isAscending ? dateA - dateB : dateB - dateA;
      });

      setAllBlogs(sortedBlogs);
      setLoading(false);
    }
  }, [data, isAscending]);

  useEffect(() => {
    setDisplayedBlogs(allBlogs.slice(0, visibleCount));
  }, [allBlogs, visibleCount]);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + POSTS_PER_PAGE);
      setLoading(false);
    }, 500);
  };

  const toggleSortingOrder = () => {
    setIsAscending((prev) => !prev);
  };

  return (
    <div className="mt-[30px] lg:mt-[50px] max-w-[1680px] mx-auto">
      {data.enable_sorting && (
        <div className="action w-full flex justify-end">
          <button
            onClick={toggleSortingOrder}
            className="sorting-filter flex gap-3 mb-[35px] cursor-pointer"
          >
            <BodyText
              tag="p"
              variant="body-2"
              className="text-app-dark opacity-80"
            >
              {isAscending ? "Old to Latest" : "Latest to Old"}
            </BodyText>
            <SortingIcon />
          </button>
        </div>
      )}

      {loading ? (
        <BlogPostsLoading visibleCount={visibleCount} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-[30px] gap-y-5 lg:gap-y-[60px]">
          {displayedBlogs.map((item, index) =>
            data.card_type === "blog" ? (
              <BlogCard key={index} item={item.node} />
            ) : (
              <NewsCard key={index} item={item.node} />
            )
          )}
        </div>
      )}

      {!loading && data.load_more && visibleCount < allBlogs.length && (
        <div className="cta mt-[30px] lg:mt-[100px] flex justify-center">
          <AppButton
            as="button"
            variant="outline"
            onClick={handleLoadMore}
            className="w-full sm:w-fit cursor-pointer"
          >
            Load More
          </AppButton>
        </div>
      )}
    </div>
  );
};

const BlogPostsLoading = ({ visibleCount }) => {
  return (
    <div className="min-h-[50vh] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-[30px] gap-y-5 lg:gap-y-[60px]">
      {Array(visibleCount)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="flex flex-col space-y-3 ">
            <Skeleton className="h-[200px] lg:h-[350px] w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default BlogAndNewsSection;
