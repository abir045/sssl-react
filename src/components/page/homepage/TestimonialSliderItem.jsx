import React from "react";
// import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import SliderPrevBtn from "../../shared/SliderPrevBtn";
import SliderNextBtn from "../../shared/SliderNextBtn";
import BodyText from "../../typography/BodyText";
// import BodyText from "@/components/typography/BodyText";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const TestimonialSliderItem = ({ testimonials }) => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="relative inline-block w-full">
        <Swiper
          spaceBetween={20}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 2.5,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{
            el: ".swiper-testimonial-pagination",
            type: "bullets",
            clickable: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="inline-block w-full h-auto"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <SliderItem item={item?.node} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-custom-navigation relative flex justify-between mt-[30px] lg:mt-20 items-center">
        <div className="swiper-testimonial-pagination"></div>
        <div className="buttons flex gap-2.5">
          <SliderPrevBtn swiperRef={swiperRef} />
          <SliderNextBtn swiperRef={swiperRef} />
        </div>
      </div>
    </>
  );
};

export default TestimonialSliderItem;

const SliderItem = ({ item }) => {
  return (
    <div className="border rounded-2xl overflow-hidden cursor-pointer h-full">
      {/* HEAD  */}
      <div className="flex px-5 py-[30px] lg:p-[30px] gap-5">
        {/* <Image src={item.companyImage} alt={item.title} height={70} width={75} className="h-[70px] w-[75px] object-contain" /> */}
        <img
          src={item.companyImage}
          alt={item.title}
          className="h-[70px] w-[75px] object-contain"
        />
        <div className="space-y-1">
          <BodyText tag="p" variant="body-2" className="text-app-gray">
            Company
          </BodyText>
          <BodyText tag="p" variant="lead-2" className="text-app-dark">
            {item?.companyName}
          </BodyText>
        </div>
      </div>
      {/* FOOTER and BODY */}
      <div className="bg-[#FFFFCC] px-[15px] py-[20px] lg:p-10 h-full">
        <BodyText tag="p" variant="lead-2" className="text-app-dark">
          &quot;{item?.description}&quot;
        </BodyText>

        <div className="person-details mt-9">
          <BodyText tag="p" variant="lead-1" className="text-app-dark">
            {" "}
            {item?.name}
          </BodyText>
          <BodyText tag="p" variant="body-2" className="text-app-gray">
            {item?.position}
          </BodyText>
        </div>
      </div>
    </div>
  );
};
