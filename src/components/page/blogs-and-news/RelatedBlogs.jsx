// import Heading from "@/components/typography/Heading"
// import BlogCard from "@/components/shared/cards/BlogCard"
import BlogCard from "../../shared/cards/BlogCard";
import Heading from "../../typography/Heading";

const RelatedBlogs = ({ data }) => {
  // return
  return (
    <div className="max-w-[1680px] mx-auto mt-[50px] lg:mt-[120px] border-t border-border pt-[30px] lg:pt-[120px]">
      <Heading
        tag="h2"
        variant="h2"
        className="text-center text-app-dark mb-[30px] lg:mb-[60px]"
      >
        {data?.section_title}
      </Heading>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 lg:gap-x-[30px] gap-y-5 lg:gap-y-[60px]">
        {data.blogs.map((item, index) => (
          <BlogCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
