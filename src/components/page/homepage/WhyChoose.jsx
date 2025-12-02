// import Img from "../../shared/Img";
import Heading from "../../typography/Heading";
import BodyText from "../../typography/BodyText";
import { Swiper, SwiperSlide } from "swiper/react";

const WhyChoose = ({ data }) => {
  return (
    <div className="pl-[10px] lg:px-[80px] py-[50px] lg:py-[120px] bg-app-bg rounded-2xl">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between items-center pr-[10px]">
        <Heading
          tag="h2"
          variant="h2"
          className="text-app-gray max-w-[830px] text-center lg:text-left"
        >
          {data?.data?.section_title}
        </Heading>

        <BodyText
          tag="p"
          variant="lead-2"
          className="text-app-gray max-w-[480px] text-center lg:text-left"
        >
          {data?.data?.description}
        </BodyText>
      </div>

      {/* DESKTOP GRID */}
      {data?.data?.variant === "primary" && (
        <div className="hidden 2xl:grid grid-cols-2 gap-2.5 mt-[30px] lg:mt-[60px]">
          {data?.data?.cards.map((item, index) => (
            <ChooseCard key={index} index={index} item={item} />
          ))}
        </div>
      )}

      {/* MOBILE SLIDER */}
      <div
        className={`mobile-slider block ${
          data?.data?.variant === "primary" ? "2xl:hidden" : ""
        } mt-[30px] lg:mt-[60px]`}
      >
        <Swiper
          spaceBetween={10}
          breakpoints={{
            360: { slidesPerView: 1.3 },
            500: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.2 },
            1024: { slidesPerView: 2.6 },
            1280: { slidesPerView: 3 },
            1440: { slidesPerView: 3 },
            1600: { slidesPerView: 4 },
          }}
          className="flex w-full h-auto"
        >
          {data?.data?.cards.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!flex !h-auto cursor-pointer last:pr-2.5"
            >
              <TextContentCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const ChooseCard = ({ item, index }) => {
  const isTextFirst = index === 2 || index === 3;

  return (
    <div className="grid grid-cols-2 gap-2.5">
      {isTextFirst ? (
        <>
          <TextContentCard item={item} />
          <ImageContentCard item={item} />
        </>
      ) : (
        <>
          <ImageContentCard item={item} />
          <TextContentCard item={item} />
        </>
      )}
    </div>
  );
};

const TextContentCard = ({ item }) => {
  return (
    <div className="flex flex-col justify-start items-start p-3 lg:pt-[48px] lg:pb-8 lg:px-[40px] bg-white rounded-[12px] lg:rounded-3xl border border-[#2A2A2C1A] h-auto">
      <img
        src={item.icon}
        alt={item.name}
        // width={70}
        // height={70}
        className="h-[60px] w-[60px] lg:w-[70px] lg:h-[70px] object-contain"
      />

      <div>
        <Heading
          tag="h5"
          variant="h5"
          className="mt-5 lg:mt-[28px] text-app-dark text-[20px] lg:text-[28px] lg:leading-[34px]"
        >
          {item.name}
        </Heading>

        <BodyText
          tag="p"
          variant="body-1"
          className="mt-2.5 lg:mt-[15px] text-app-dark opacity-80"
        >
          {item.description}
        </BodyText>
      </div>
    </div>
  );
};

const ImageContentCard = ({ item }) => {
  return (
    <div className="image h-full w-full rounded-2xl overflow-hidden">
      <img
        src={item.image}
        alt="Why Choose Image"
        // width={400}
        // height={365}
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default WhyChoose;
