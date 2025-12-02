// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import SliderPrevBtn from "../../shared/SliderPrevBtn";
import SliderNextBtn from "../../shared/SliderNextBtn";
import Heading from "../../typography/Heading";
import BodyText from "../../typography/BodyText";
// import Link from "next/link";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/formatDate";
// import { formatDate } from "@/utils/formatDate";

const LatestNewsSliderItem = ({ data }) => {
  const swiperRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  // Check screen width on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="section-head flex justify-between items-center gap-[20px] mb-[30px] lg:mb-[100px]">
        <Heading tag="h2" variant="h2" className="text-app-dark">
          {data?.section_title}
        </Heading>

        {/* SLIDER NAVIGATION BUTTONS */}
        <div className="flex gap-2.5 lg:gap-5 mb-4">
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
            1280: {
              slidesPerView: 4,
            },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="inline-block w-full"
        >
          {data.items.map((item, index) => (
            <SwiperSlide key={index}>
              <SliderItem item={item.node} index={index} isMobile={isMobile} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
export default LatestNewsSliderItem;

const SliderItem = ({ item, index, isMobile }) => {
  const height = isMobile ? "270px" : index % 2 === 0 ? "270px" : "440px";
  return (
    <Link
      href={
        item.blogType.value == "blog"
          ? `${import.meta.env.NEXT_PUBLIC_FRONTEND_URL}/blog-and-articles/${
              item.slug
            }`
          : `${import.meta.env.NEXT_PUBLIC_FRONTEND_URL}/news-and-media/${
              item.slug
            }`
      }
      className="news-slider-card break-inside-avoid rounded-lg bg-white overflow-hidden cursor-pointer group"
    >
      <div
        className="relative overflow-hidden rounded-lg w-full"
        style={{ height }}
      >
        <img
          src={item.blogImage}
          alt={item.title}
          className="rounded-lg group-hover:scale-105 transition-all duration-800 w-full h-full object-cover"
        />
      </div>

      <div className="mt-4 sp">
        <BodyText tag="p" variant="body-2" className="text-app-gray">
          {formatDate(item.date)}
        </BodyText>
        <BodyText
          tag="p"
          variant="lead-1"
          className="text-app-gray hover:text-app-dark transition-all duration-400"
        >
          {item.title}
        </BodyText>
      </div>
    </Link>
  );
};
