import React from "react";
import Heading from "../../typography/Heading";
import BodyText from "../../typography/BodyText";
import { AppButton } from "../../shared/Buttons";
import BtnArrow from "../../icons/BtnArrow";

const LegacySection = ({ data }) => {
  return (
    <section className="relative bg-cover bg-center px-2.5 ">
      {/* BACKGROUND IMAGE */}
      <img
        src="/global/dot-map.svg"
        alt="Section Background"
        className="absolute w-full h-full top-0 left-0 -z-10"
      />

      <div className="flex flex-col 2xl:flex-row gap-[50px] 2xl:gap-[110px] items-start justify-between">
        {/* LEFT TEXT AREA */}
        <div className="2xl:max-w-[600px] w-full">
          <Heading
            tag="h2"
            variant="h2"
            className="text-app-dark 2xl:tracking-[-2.6px] mb-5"
          >
            {data?.data?.section_title}
          </Heading>

          <Heading tag="h4" variant="h4" className="text-app-dark mb-10">
            {data?.data?.subtitle}
          </Heading>

          <BodyText
            tag="p"
            variant="lead-2"
            className="text-app-dark opacity-80 2xl:mb-[60px]"
          >
            {data?.data?.description}
          </BodyText>

          {/* MOBILE IMAGE */}
          <img
            src={data?.data?.image}
            alt={data?.data?.section_title}
            className="object-cover object-center my-5 w-full block 2xl:hidden max-h-[400px] rounded-[12px]"
          />

          <AppButton
            as="link"
            href={data?.data?.button_link}
            icon={<BtnArrow />}
            className="w-full md:w-fit"
          >
            {data?.data?.button_label}
          </AppButton>
        </div>

        {/* DESKTOP IMAGE */}
        <img
          src={data?.data?.image}
          alt={data?.data?.section_title}
          className="object-cover object-center w-full hidden 2xl:block"
        />
      </div>
    </section>
  );
};

export default LegacySection;
