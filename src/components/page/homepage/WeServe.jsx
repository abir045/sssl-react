// import Image from "next/image"
import BodyText from "../../typography/BodyText";
import Heading from "../../typography/Heading";
import { AppButton } from "../../shared/Buttons";

const WeServe = ({ data }) => {
  return (
    <section className="max-w-[1680px] w-full mx-auto z-10">
      <Heading
        tag="h2"
        variant="h2"
        className="text-app-dark text-center mb-[30px] lg:mb-10"
      >
        {data?.data?.section_title}
      </Heading>
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-center items-center p-2">
        {data?.data?.cards.map((industry, index) => (
          <div
            key={index}
            className="w-full border border-[#2A2A2C1A] flex flex-col justify-center items-center h-full min-h-[165px] lg:min-h-[280px] py-10"
          >
            <img
              // width={100}
              // height={100}
              src={industry.image}
              alt={industry.name}
              className="object-contain w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] mb-[30px]"
            />
            <BodyText
              tag="p"
              variant="lead-1"
              className="text-app-dark font-[500] text-center max-w-[300px]"
            >
              {industry.name}
            </BodyText>
          </div>
        ))}
      </div>
      {/* btn */}
      {/* <div className="text-center mt-11">
                <AppButton className="w-full sm:w-fit" href={data.data.button_link} variant="outline">
                    {data.data.button_label}
                </AppButton>
            </div> */}
    </section>
  );
};

export default WeServe;
