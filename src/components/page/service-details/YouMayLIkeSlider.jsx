import { AppButton } from "../../shared/Buttons";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import SliderPrevBtn from "../../shared/SliderPrevBtn";
import SliderNextBtn from "../../shared/SliderNextBtn";
import Heading from "../../typography/Heading";
import OurServiceCard from "../../shared/cards/OurServiceCard";
// import OurServiceCard from "@/components/shared/cards/OurServiceCard";

const YouMayLIkeSlider = ({ data }) => {
  const swiperRef = useRef(null);

  return (
    <section className="max-w-[1680px] mx-auto">
      <div className="section-head flex justify-between items-center gap-[20px] mb-[30px] lg:mb-[100px]">
        <Heading tag="h2" variant="h2" className="text-app-dark">
          {data.section_title}
        </Heading>

        {/* SLIDER NAVIGATION BUTTONS */}
        <div className="gap-2.5 lg:gap-5 mb-4 hidden md:flex">
          <SliderPrevBtn swiperRef={swiperRef} />
          <SliderNextBtn swiperRef={swiperRef} />
        </div>
      </div>

      <div className="relative inline-block w-full">
        <Swiper
          spaceBetween={20}
          breakpoints={{
            360: {
              slidesPerView: 1.1,
            },
            500: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="inline-block w-full"
        >
          {data.services.map((item, index) => (
            <SwiperSlide key={index} className="!h-auto">
              <OurServiceCard key={index} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* BUTTON BELOW SLIDER */}
      <div className="text-center mt-[30px] lg:mt-[60px]">
        <AppButton
          className="w-full md:w-fit"
          href={data.button.link}
          variant="outline"
        >
          {data.button.label}
        </AppButton>
      </div>
    </section>
  );
};
export default YouMayLIkeSlider;
