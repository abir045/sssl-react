import React from "react";
import BodyText from "../../typography/BodyText";
import Heading from "../../typography/Heading";

const MissionVisionWithCounter = ({ data }) => {
  return (
    <section className="relative">
      <div className="relative bg-cover bg-center max-w-[1675px] mx-auto">
        {/* DOTTED MAP IMAGE  */}
        <img
          height={1126}
          width={1068}
          className="absolute w-full top-0 left-0 -z-10"
          src="/global/dot-map.svg"
          alt="Section Background"
        />

        {/* MISSION VISION CARDS  */}
        <div className="mission-vision">
          <div className="grid 2xl:grid-cols-2 gap-[30px] lg:gap-[60px] justify-between">
            <div className="2xl:max-w-[780px] w-full">
              <Heading
                tag="h2"
                variant="h2"
                className="text-app-dark 2xl:tracking-[-2.6px] mb-5"
              >
                {data?.data?.section_title}
              </Heading>
              <Heading tag="h4" variant="h4" className="text-app-dark">
                {data?.data?.section_subtitle}
              </Heading>
            </div>

            <div className="mission-vision flex flex-col gap-[30px] lg:gap-[60px]">
              <div className="description">
                <BodyText
                  tag="p"
                  variant="lead-2"
                  className="text-app-dark opacity-80"
                >
                  {data?.data?.description}
                </BodyText>
              </div>

              <div className="mission-vision-items grid md:grid-cols-2 gap-[30px] lg:gap-[60px]">
                {data?.data?.mission_vision_data.map((item, index) => (
                  <MissionVisionCard key={index} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* COUNTER CARDS  */}
        <div className="counters flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-4 my-[30px] 2xl:my-[100px]">
          {data?.data?.counter_data.map((item, index) => (
            <CounterCard key={index} data={item} />
          ))}
        </div>
      </div>

      {/* SECTION IMAGE */}
      <div className="section-image rounded-2xl overflow-hidden max-h-[900px]">
        <img
          src={data?.data?.section_image}
          alt="About Image"
          width={1840}
          height={900}
          className="h-full w-full object-cover max-h-[900px]"
        />
      </div>
    </section>
  );
};

const CounterCard = ({ data }) => {
  return (
    <div className="card space-y-2 p-3 lg:p-[30px] border-r border-border last:border-r-0">
      <Heading tag="p" variant="h2" className="text-app-dark text-center">
        {data.count_number}
        {data.suffix}
      </Heading>
      <BodyText tag="p" variant="body-1" className="text-app-dark text-center">
        {data.counter_description}
      </BodyText>
    </div>
  );
};

const MissionVisionCard = ({ data }) => {
  return (
    <div className="item space-y-5">
      <Heading tag="h5" variant="h5" className="text-app-dark">
        {data.mission_vision_title}
      </Heading>
      <BodyText tag="p" variant="body-1" className="text-app-dark opacity-80">
        {data.mission_vision_description}
      </BodyText>
    </div>
  );
};

export default MissionVisionWithCounter;
