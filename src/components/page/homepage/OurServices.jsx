import React, { useState, useEffect } from "react";
import Heading from "../../typography/Heading";
import BodyText from "../../typography/BodyText";
import { AppButton } from "../../shared/Buttons";
import OurServiceCard from "../../shared/cards/OurServiceCard";
import { getServiceData } from "../../../graphql/Components/getServiceData";

const OurServices = ({ data }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const serviceIds = data?.data?.services?.map((service) => service.id);
        const fetchedServices = await getServiceData(serviceIds);
        setServices(fetchedServices);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [data]);

  if (loading) {
    return (
      <div className="px-[10px] lg:px-[80px] pb-[40px] pt-[50px] lg:py-[120px] bg-app-bg rounded-2xl">
        <div className="flex justify-center items-center py-20">
          <p className="text-gray-500">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-[10px] lg:px-[80px] pb-[40px] pt-[50px] lg:py-[120px] bg-app-bg rounded-2xl">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between items-center">
        <Heading tag="h2" variant="h2" className="text-app-gray">
          {data?.data?.section_title}
        </Heading>
        <BodyText
          tag="p"
          variant="lead-2"
          className="text-app-gray max-w-[480px] text-center lg:text-left"
        >
          {data.data?.description}
        </BodyText>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 mt-[30px] lg:mt-[60px]">
        {services?.map((item, index) => (
          <OurServiceCard key={index} item={item.node} />
        ))}
      </div>
      {/* btn */}
      <div className="flex justify-center items-center mt-[30px] lg:mt-10">
        <AppButton
          href={data.data.button_link}
          variant="outline"
          className="w-full sm:w-fit"
        >
          {data.data.button_label}
        </AppButton>
      </div>
    </div>
  );
};

export default OurServices;
