// import LearnMoreBtn from '@/components/shared/buttons/LearnMoreBtn'
// import BodyText from "@/components/typography/BodyText";
// import Image from 'next/image'
// import Link from 'next/link'
import { Link } from "react-router-dom";
import React from "react";
import LearnMoreBtn from "../buttons/LearnMoreBtn";
import BodyText from "../../typography/BodyText";

const OurServiceCard = ({ item }) => {
  return (
    <Link
      //   href={`/our-services/${item.slug}`}
      to={`/our-services/${item.slug}`}
      className="h-full flex flex-col justify-between items-start p-3 lg:py-[48px] lg:px-[40px] bg-white rounded-[12px] lg:rounded-3xl border border-[#2A2A2C1A] cursor-pointer hover:shadow-md transition-all duration-300"
    >
      <img
        src={
          item.serviceIcon ||
          "http://localhost/wordpress/ssl/wp-content/uploads/2025/05/operator-1.svg"
        }
        alt={item.title || "Our Service Card Image"}
        className="h-[60px] w-[60px] lg:w-[100px] lg:h-[100px] object-contain"
      />
      {/* Service name */}
      <BodyText
        tag="p"
        variant="lead-0"
        className="mt-5 lg:mt-[60px] text-app-dark"
      >
        {item.title}
      </BodyText>
      {/* Service description */}
      <BodyText
        tag="p"
        variant="body-1"
        className="mt-2.5 lg:mt-[15px] text-app-dark opacity-80"
      >
        {item.serviceDescription}
      </BodyText>

      {/* Learn More Link */}
      <LearnMoreBtn type="span" href={`/our-services/${item.slug}`}>
        Learn More
      </LearnMoreBtn>
    </Link>
  );
};

export default OurServiceCard;
