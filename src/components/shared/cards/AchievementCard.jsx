// import BodyText from '@/components/typography/BodyText'
// import Image from 'next/image'
import React from "react";
import BodyText from "../../typography/BodyText";

const AchievementCard = ({ data }) => {
  return (
    <div className="border border-border rounded-3xl overflow-hidden bg-white h-full">
      <div className="image-content">
        {/* <Image src={data.image} alt={data.title} width={405} height={270} className='w-full h-full object-cover max-h-[270px]' /> */}
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover max-h-[270px]"
        />
      </div>
      <div className="text-content p-5 lg:p-[30px] space-y-2.5">
        <BodyText tag="p" variant="lead-0" className="text-app-dark">
          {data.title}
        </BodyText>
        <BodyText tag="p" variant="body-1" className="text-app-dark opacity-80">
          {data.description}
        </BodyText>
      </div>
    </div>
  );
};

export default AchievementCard;
