import { useEffect, useState } from "react";
import { cn } from "../../utils/utils";
// import { cn } from "@/lib/utils";

const SliderNextBtn = ({ swiperRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (!swiperRef?.current) return;

    const swiper = swiperRef.current;

    // Set total slides after swiper is initialized
    const updateSlideInfo = () => {
      if (swiper?.slides?.length) {
        setTotalSlides(swiper.slides.length); // Set total slides dynamically
        setCurrentSlide(swiper.realIndex); // Set initial current slide
      }
    };

    // Initial calculation when Swiper is ready
    updateSlideInfo();

    // Update on slide change
    const handleSlideChange = () => {
      setCurrentSlide(swiper.realIndex);
    };

    swiper.on("slideChange", handleSlideChange);

    // Cleanup on unmount
    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiperRef]); // Only re-run when swiperRef changes

  const isNextDisabled =
    currentSlide + swiperRef.current?.params.slidesPerView >= totalSlides;

  return (
    <button
      disabled={isNextDisabled}
      className={cn(
        "border border-app-dark h-[52px] w-[52px] rounded-full p-[14px] cursor-pointer flex justify-center items-center transition-all duration-300",
        isNextDisabled ? "opacity-50 cursor-not-allowed" : "hover:bg-white/10"
      )}
      onClick={() => swiperRef.current?.slideNext()}
      aria-label="Next slide"
    >
      <svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
          fill="#0A1A3A"
        />
      </svg>
    </button>
  );
};

export default SliderNextBtn;
