import React, { useState, useEffect } from "react";
import Heading from "../typography/Heading";
import MarqueeContent from "./MarqueeContent";
import { getClientsData } from "../../graphql/Components/getClientsData";

const TopClientMarquee = ({ data }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const rawClients = data?.data?.clients;
        const clientIds = rawClients?.map((client) => client?.id) || [];
        const fetchedClients = await getClientsData(clientIds);
        setClients(fetchedClients);
      } catch (error) {
        console.error("Error fetching clients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <p className="text-gray-500">Loading clients...</p>
      </div>
    );
  }

  return (
    <div
      className={`relative flex flex-col max-w-[1680px] ${
        data?.data?.variant === "primary" ? "lg:flex-row" : "lg:flex-col"
      } w-full mx-auto`}
    >
      <div
        className={`mb-[30px] ${
          data?.data?.variant === "primary"
            ? "lg:mb-0 lg:border-r-4 lg:border-app-dark lg:pr-[60px] items-center justify-center"
            : "lg:mb-[60px] justify-start"
        } flex`}
      >
        <Heading tag="h2" variant="h2" className="text-app-dark">
          {data?.data?.section_title}
        </Heading>
      </div>
      <div className="relative w-full overflow-hidden flex items-center">
        <MarqueeContent clients={clients} />
      </div>
    </div>
  );
};

export default TopClientMarquee;
