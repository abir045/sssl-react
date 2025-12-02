// import Heading from "../../typography/Heading";
// import BodyText from "../../typography/BodyText";
// import TestimonialSliderItem from "./TestimonialSliderItem";
// import { getTestimonialsData } from "../../../graphql/Components/getTestimonialsData";
// // import { getTestimonialsData } from "@/graphql/Components/getTestimonialsData";

// const TestimonialSlider = async ({ data }) => {
//   const testimonialIds = data.data.testimonials.map(
//     (testimonial) => testimonial.id
//   );
//   const testimonials = await getTestimonialsData(testimonialIds);

//   return (
//     <div className="lg:border-b border-[#2A2A2C1A] lg:pb-20 max-w-[1680px] mx-auto">
//       <div className="section-head mb-[30px] lg:mb-20 max-w-[570px]">
//         <Heading tag="h2" variant="h2" className="text-app-dark">
//           {data?.data?.section_title}
//         </Heading>
//         {data?.data?.description && (
//           <BodyText
//             tag="p"
//             variant="lead-2"
//             className="text-app-gray mt-5 opacity-80"
//           >
//             {data?.data?.description}
//           </BodyText>
//         )}
//       </div>
//       <TestimonialSliderItem testimonials={testimonials} />
//     </div>
//   );
// };

// export default TestimonialSlider;

import React, { useState, useEffect } from "react";
import Heading from "../../typography/Heading";
import BodyText from "../../typography/BodyText";
import TestimonialSliderItem from "./TestimonialSliderItem";
import { getTestimonialsData } from "../../../graphql/Components/getTestimonialsData";

const TestimonialSlider = ({ data }) => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const testimonialIds = data.data.testimonials.map(
          (testimonial) => testimonial.id
        );
        const fetchedTestimonials = await getTestimonialsData(testimonialIds);
        setTestimonials(fetchedTestimonials);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [data]);

  if (loading) {
    return (
      <div className="lg:border-b border-[#2A2A2C1A] lg:pb-20 max-w-[1680px] mx-auto">
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:border-b border-[#2A2A2C1A] lg:pb-20 max-w-[1680px] mx-auto">
      <div className="section-head mb-[30px] lg:mb-20 max-w-[570px]">
        <Heading tag="h2" variant="h2" className="text-app-dark">
          {data?.data?.section_title}
        </Heading>
        {data?.data?.description && (
          <BodyText
            tag="p"
            variant="lead-2"
            className="text-app-gray mt-5 opacity-80"
          >
            {data?.data?.description}
          </BodyText>
        )}
      </div>
      <TestimonialSliderItem testimonials={testimonials} />
    </div>
  );
};

export default TestimonialSlider;
