import { useState, useEffect } from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils"
import { AppButton } from "../shared/Buttons";
import BtnArrow from "../icons/BtnArrow";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import Heading from "../typography/Heading";
import BodyText from "../typography/BodyText";
import { cn } from "../../utils/utils";

export default function HeroSlider({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = data?.data?.hero_slides || data;
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Changed to 5000ms (5 seconds) for better user experience

    return () => {
      clearInterval(interval);
    };
  }, [isAutoPlaying, currentSlide]); // Added currentSlide as dependency

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setIsAutoPlaying(false); // Pause autoplay when manually navigating
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setIsAutoPlaying(false); // Pause autoplay when manually navigating
    setTimeout(() => setIsAutoPlaying(true), 5000); // Resume after 5 seconds
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className="relative w-full h-[570px] md:h-[600px] lg:h-[750px] overflow-hidden rounded-[16px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      {slides?.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background Image */}
          <div className="relative w-full h-full">
            <img
              src={slide?.slide_image || slide?.image || "/placeholder.svg"}
              alt={slide.title || "Hero Slider Image"}
              className="w-full h-full object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
          </div>

          {/* Content */}
          <div className="absolute pb-[60px] xl:pb-0 inset-0 z-20 flex flex-col justify-end xl:justify-center px-6 md:px-12 lg:px-[60px]">
            <div className="max-w-[990px]">
              <Heading
                tag="h1"
                variant="h1"
                className="text-white mb-2.5 xl:mb-[60px]"
              >
                {slide?.slide_title || slide.title}
              </Heading>
              <BodyText
                tag="p"
                variant="lead-2"
                className="text-white mb-[30px]"
              >
                {slide?.slide_description || slide.description}
              </BodyText>

              <div className="flex flex-wrap gap-4">
                <AppButton
                  className="w-full md:w-fit py-3 md:py-4 lg:px-7"
                  icon={<BtnArrow />}
                  href={slide?.banner_cta[0]?.cta_link}
                  variant="primary"
                >
                  {slide?.banner_cta[0]?.cta_label}
                </AppButton>
                <AppButton
                  href={slide?.banner_cta[1]?.cta_link}
                  className="w-full md:w-fit py-3 md:py-4 bg-white lg:px-7"
                  variant="secondary"
                >
                  {slide?.banner_cta[1]?.cta_label}
                </AppButton>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-[20px] xl:bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-2 w-full justify-center xl:justify-start xl:px-[60px]">
        {slides?.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentSlide === index
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute right-4 bottom-5 z-30 items-center space-x-2 hidden md:flex">
        <button
          disabled={currentSlide === 0}
          className={cn(
            "border border-white rounded-full p-[14px] cursor-pointer flex justify-center items-center transition-all duration-300",
            currentSlide === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-white/10"
          )}
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          <ArrowLeftIcon />
        </button>
        <button
          disabled={currentSlide === slides.length - 1}
          className={cn(
            "border border-white rounded-full p-[14px] cursor-pointer flex justify-center items-center transition-all duration-300",
            currentSlide === slides.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-white/10"
          )}
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
