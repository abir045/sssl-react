import Heading from "../../typography/Heading";
import BodyText from "../../typography/BodyText";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef } from "react";

const WorkProgress = ({ data }) => {
  const firstStepRef = useRef(null);

  useEffect(() => {
    if (firstStepRef.current) {
      const rect = firstStepRef.current.getBoundingClientRect();
    }
  }, []);

  return (
    <section
      className="py-[50px] px-[15px] lg:py-[120px] pr-0 rounded-2xl overflow-hidden 2xl:px-[120px]"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 26, 58, 0.9), rgba(10, 26, 58, 0.9)), url(${data?.data?.background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Heading
        tag="h2"
        variant="h2"
        className="text-white mb-[30px] lg:mb-[60px] text-center"
      >
        {data?.data?.section_title}
      </Heading>

      <div className="hidden 2xl:flex justify-between items-center mb-8 relative w-[85%] max-w-[1425px] mx-auto overflow-hidden">
        <div className="absolute w-full px-[127px] h-[2px] bg-white left-0 right-0 top-1/2 transform -translate-y-1/2"></div>

        {data?.data?.steps.map((item, index) => (
          <div key={index} className="z-10 flex items-center justify-center">
            <div className="bg-[#D4AF37] border-[2px] border-white text-white flex items-center justify-center rounded-full w-[80px] h-[80px] text-xl font-bold">
              {item.number}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden 2xl:grid grid-cols-5 gap-1 mt-[30px] lg:mt-[60px]">
        {data?.data?.steps.map((step) => (
          <TextContentCard key={step.number} item={step} />
        ))}
      </div>

      <div className="mobile-slider block 2xl:hidden mt-[30px] lg:mt-[60px] relative">
        <Swiper
          spaceBetween={10}
          breakpoints={{
            360: { slidesPerView: 1.3 },
            500: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.6 },
            1280: { slidesPerView: 3.5 },
          }}
          className="flex w-full h-auto"
        >
          {data?.data?.steps.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!flex flex-col !h-auto cursor-pointer last:pr-4"
            >
              <div className="z-10 flex items-center justify-start pb-5">
                <div
                  ref={item.number == 1 ? firstStepRef : undefined}
                  className="bg-[#D4AF37] border-[2px] border-white text-white flex items-center justify-center rounded-full w-[60px] h-[60px] text-xl font-bold"
                >
                  {item.number}
                </div>
              </div>
              <TextContentCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute w-full h-[2px] bg-white left-0 right-0 top-0 transform translate-y-[30px]"></div>
      </div>
    </section>
  );
};

const TextContentCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-[60px] items-start px-3 py-5 2xl:py-[30px] 2xl:px-[30px] bg-white rounded-[12px] lg:rounded-3xl border border-[#2A2A2C1A] h-full">
      <img
        src={item.icon}
        alt={item.title}
        width={80}
        height={80}
        className="h-[60px] w-[60px] lg:w-[80px] lg:h-[80px] object-contain"
      />

      <div className="mt-5 lg:mt-[28px]">
        <Heading
          tag="h5"
          variant="h5"
          className="text-app-dark text-[20px] lg:text-[28px] lg:leading-[34px] text-left font-medium tracking-[-0.56px]"
          overrideStyles={true}
        >
          {item.title}
        </Heading>

        <BodyText
          tag="p"
          variant="body-1"
          className="mt-2.5 lg:mt-[15px] text-app-dark opacity-80 text-left"
        >
          {item.description}
        </BodyText>
      </div>
    </div>
  );
};

export default WorkProgress;
