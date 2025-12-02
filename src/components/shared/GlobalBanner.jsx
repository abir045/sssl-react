import React from "react";
import Heading from "../typography/Heading";

const GlobalBanner = ({ data }) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.16) 101.95%)",
      }}
      className="relative h-[350px] lg:h-[550px] w-full rounded-2xl overflow-hidden p-[30px] lg:p-[60px] flex justify-center 2xl:justify-start items-center text-white"
    >
      {/* REPLACED NEXT IMAGE WITH NORMAL IMG */}
      <img
        src={data?.data?.background_image || "/global/global-banner.jpeg"}
        alt="banner image"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />

      <Heading
        tag="h1"
        variant="h1"
        className="text-white 2xl:max-w-[885px] text-center 2xl:text-left"
      >
        {data?.data?.section_title || "Fallback Title"}
      </Heading>
    </div>
  );
};

export default GlobalBanner;
