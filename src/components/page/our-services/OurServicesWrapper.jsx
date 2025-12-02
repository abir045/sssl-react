// // import OurServiceCard from '@/components/shared/cards/OurServiceCard'
// // import { getServiceData } from "@/graphql/Components/getServiceData";
// import { getServiceData } from "../../../graphql/Components/getServiceData";
// import OurServiceCard from "../../shared/cards/OurServiceCard";
// const OurServicesWrapper = async ({ data }) => {
//   const serviceIds = data?.data?.services.map((service) => service.id);
//   const services = await getServiceData(serviceIds);

//   return (
//     <div className="service-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 max-w-[1680px] mx-auto">
//       {services?.map((item, index) => (
//         <OurServiceCard item={item.node} key={index} />
//       ))}
//     </div>
//   );
// };

// export default OurServicesWrapper;

import { useEffect, useState } from "react";
import { getServiceData } from "../../../graphql/Components/getServiceData";
import OurServiceCard from "../../shared/cards/OurServiceCard";

const OurServicesWrapper = ({ data }) => {
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServices() {
      try {
        const serviceIds = data?.data?.services.map((service) => service.id);
        const serviceData = await getServiceData(serviceIds);
        setServices(serviceData);
      } catch (err) {
        console.error("Failed to load services:", err);
      } finally {
        setLoading(false);
      }
    }

    if (data?.data?.services) {
      fetchServices();
    } else {
      setLoading(false);
    }
  }, [data]);

  if (loading) return <div>Loading services...</div>;
  if (!services) return null;

  return (
    <div className="service-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 max-w-[1680px] mx-auto">
      {services?.map((item, index) => (
        <OurServiceCard item={item.node} key={index} />
      ))}
    </div>
  );
};

export default OurServicesWrapper;
