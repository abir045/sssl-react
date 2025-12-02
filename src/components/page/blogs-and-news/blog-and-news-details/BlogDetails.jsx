// "use client"
import RichTextRenderer from "./RichTextRenderer";
import BlogDetailsBanner from "./BlogDetailsBanner";
import { useRef } from "react";
const BlogDetails = ({ blog }) => {
  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = `
            <div class="p-4 max-w-[210mm] mx-auto">
                ${printContents}
            </div>
        `;
    window.print();
    document.body.innerHTML = originalContents;
  };

  const blogData = {
    image: blog.blogImage,
    title: blog.title,
    date: blog.date,
  };

  return (
    <div className="details-page mx-auto max-w-[1070px]">
      <div ref={printRef} className="print-content">
        <BlogDetailsBanner data={blogData} onPrint={handlePrint} />
        <RichTextRenderer content={blog.blogsDetails} />
      </div>
    </div>
  );
};

export default BlogDetails;
