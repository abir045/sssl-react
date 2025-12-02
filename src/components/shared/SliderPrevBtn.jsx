import { useEffect, useState } from "react";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import { cn } from "../../utils/utils";
// import { cn } from "@/lib/utils"

const SliderPrevBtn = ({ swiperRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!swiperRef?.current) return;

    const swiper = swiperRef.current;

    // Set initial slide
    setCurrentSlide(swiper.realIndex);

    // Listen for slide change
    const handleSlideChange = () => {
      setCurrentSlide(swiper.realIndex);
    };

    swiper.on("slideChange", handleSlideChange);

    // Cleanup
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiperRef]);

  return (
    <button
      disabled={currentSlide === 0}
      className={cn(
        "border border-app-dark rounded-full p-[14px] cursor-pointer flex justify-center items-center transition-all duration-300 h-[52px] w-[52px]",
        currentSlide === 0
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-white/10"
      )}
      onClick={() => swiperRef.current?.slidePrev()}
      aria-label="Previous slide"
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 20L13.41 18.59L7.83 13L20 13L20 11L7.83 11L13.41 5.41L12 4L4 12L12 20Z"
          fill="#0A142F"
        />
      </svg>
    </button>
  );
};

export default SliderPrevBtn;
