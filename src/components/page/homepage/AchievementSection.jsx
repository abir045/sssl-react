"use client";

import React, { useEffect, useRef, useState } from "react";
import Heading from "../../typography/Heading";
import BodyText from "../../typography/BodyText";
import MobileAchievementTimeline from "./MobileAchievementTimeline";
import { getAchievementData } from "../../../graphql/components/getAchievementData";
// import { getAchievementData } from '@/graphql/Components/getAchievementData';

const AchievementSection = ({ data }) => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const getAchievements = async () => {
      try {
        const achievementIds = data.data.timeline.map(
          (achievement) => achievement.id
        );
        const achievementsData = await getAchievementData(achievementIds);
        setAchievements(achievementsData);
      } catch (error) {
        console.error("Failed to fetch achievements");
      }
    };

    getAchievements();
  }, [data]);

  // return
  const scrollContainerRef = useRef(null);
  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 400;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="relative max-w-[1840px] mx-auto px-2.5 py-[50px]  lg:p-0 lg:pb-60 rounded-2xl overflow-hidden "
      style={{
        backgroundImage: `linear-gradient(rgba(10, 26, 58, 0.9), rgba(10, 26, 58, 0.9)), url(${data?.data?.section_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-center lg:pt-[120px]">
        <Heading tag="h2" variant="h2" className="text-white px-[50px]">
          {data?.data?.section_title}
        </Heading>
      </div>
      <div className="desktop-achievement-timeline hidden lg:block">
        <div
          ref={scrollContainerRef}
          className="overflow-x-auto no-scrollbar space-x-10 scroll-smooth"
        >
          <div className="relative flex flex-row pl-20 lg:mt-[300px]">
            {achievements?.map((item, index) => (
              <div className="min-w-[400px]" key={index}>
                <div
                  className={`relative margin-top-important ${
                    index % 2 !== 0 ? "hidden" : ""
                  }`}
                >
                  <div className="">
                    <div className="flex items-center">
                      <div className="min-w-[88px] min-h-[88px] bg-[#D4AF37] rounded-full flex justify-center items-center border-2 border-white">
                        <BodyText
                          tag="span"
                          variant="lead-1"
                          className="text-white"
                        >
                          {" "}
                          {item?.node?.year}
                        </BodyText>
                      </div>
                      <div className="h-[2px] w-full bg-white"></div>
                    </div>
                    <div className="w-[300px] mt-[40px] text-left">
                      <BodyText tag="p" variant="lead-1" className="text-white">
                        {" "}
                        {item?.node?.title}
                      </BodyText>
                      <BodyText
                        tag="p"
                        variant="body-2"
                        className="text-white opacity-80 mt-[10px]"
                      >
                        {item?.node?.description}
                      </BodyText>
                    </div>
                  </div>
                </div>

                <div
                  className={`margin-top-important ${
                    index % 2 === 0 ? "hidden" : ""
                  }`}
                >
                  <div className="translate-y-[calc(-100%+90px)] h-fit">
                    <div className="text-left w-[300px]">
                      <BodyText tag="p" variant="lead-1" className="text-white">
                        {" "}
                        {item?.node?.title}
                      </BodyText>
                      <BodyText
                        tag="p"
                        variant="body-2"
                        className="text-white opacity-80 mt-[10px]"
                      >
                        {item?.node?.description}
                      </BodyText>
                    </div>
                    <div className=" flex items-center mt-[40px]">
                      <div className="min-w-[88px] min-h-[88px] bg-[#D4AF37] rounded-full flex justify-center items-center border-2 border-white">
                        <BodyText
                          tag="span"
                          variant="lead-1"
                          className="text-white"
                        >
                          {" "}
                          {item?.node?.year}
                        </BodyText>
                      </div>
                      <div className="h-[2px] w-full bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[120px] right-[50%] translate-x-[50%] translate-y-[50%] z-50">
          <button
            className="prev hover:bg-app-dark rounded-full transition-all duration-300 rotate-180 mr-3 cursor-pointer"
            onClick={() => scroll("left")}
          >
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="51"
                height="51"
                rx="25.5"
                stroke="white"
              />
              <path
                d="M26 18L24.59 19.41L30.17 25H18V27H30.17L24.59 32.59L26 34L34 26L26 18Z"
                fill="white"
              />
            </svg>
          </button>
          <button
            className="next  hover:bg-app-dark rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => scroll("right")}
          >
            <svg
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="51"
                height="51"
                rx="25.5"
                stroke="white"
              />
              <path
                d="M26 18L24.59 19.41L30.17 25H18V27H30.17L24.59 32.59L26 34L34 26L26 18Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mobile-achievement-timeline block lg:hidden mt-10">
        <MobileAchievementTimeline timelineData={achievements} />
      </div>
    </section>
  );
};

export default AchievementSection;
