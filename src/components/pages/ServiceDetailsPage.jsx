import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import TestimonialSlider from "../../components/page/homepage/TestimonialSlider";
import ContactCTA from "../../components/page/service-details/ContactCTA";
import YouMayLIkeSlider from "../../components/page/service-details/YouMayLIkeSlider";
import GlobalBanner from "../../components/shared/GlobalBanner";
import TopClientMarquee from "../../components/slider/TopClientMarquee";
import DetailsSectionCardsWrapper from "../../components/page/service-details/DetailsSectionCardsWrapper";
import { getServiceBySlugData } from "../../graphql/Components/getServiceBySlugData";
import { Skeleton } from "../ui/skeleton";

const ServiceDetailsPage = () => {
  const { slug } = useParams();
  const [serviceDetailsDataRaw, setServiceDetailsDataRaw] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchServiceData() {
      try {
        const data = await getServiceBySlugData(slug);
        setServiceDetailsDataRaw(data);
        console.log("Service Details:", data);
      } catch (err) {
        console.error("Failed to load service details:", err);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchServiceData();
    }
  }, [slug]);

  if (loading) return <Skeleton />;
  if (!serviceDetailsDataRaw) return <div>Error loading service details.</div>;

  // GLOBAL BANNER DATA
  const globalBannerDetails = {
    data: {
      section_title: serviceDetailsDataRaw.title,
      background_image: serviceDetailsDataRaw.serviceImage,
    },
  };

  // TESTIMONIAL SLIDER
  const testimonialSliderData = {
    data: {
      section_title: "Testimonials",
      description: null,
      testimonials: serviceDetailsDataRaw?.testimonials.map((testimonial) => {
        return { id: testimonial.testimonialId };
      }),
    },
  };

  // TOP CLIENT DATA
  const topClientData = {
    data: {
      variant: "Secondary",
      section_title: "Served Clients",
      clients: serviceDetailsDataRaw?.topClients.map((client) => {
        return { id: client.clientId };
      }),
    },
  };

  const youMayLikeSliderData = {
    section_title: "Services You May Need",
    services: serviceDetailsDataRaw?.youMayLikeServices,
    button: {
      label: "Explore All",
      link: "/our-services",
    },
  };

  const contactDetailsData = {
    section_title: serviceDetailsDataRaw?.sectionTitle,
    address: serviceDetailsDataRaw?.address,
    email: serviceDetailsDataRaw?.email,
    background_image: serviceDetailsDataRaw?.contactBackground,
    description: null,
    phone_numbers: serviceDetailsDataRaw?.phoneNumbers,
  };

  return (
    <>
      {/* SEO META */}
      <Helmet>
        <title>
          {serviceDetailsDataRaw?.title ||
            "Sentry Security || Services Details"}
        </title>
        <meta
          name="description"
          content={
            serviceDetailsDataRaw?.description ||
            "This is services details page"
          }
        />
      </Helmet>

      <GlobalBanner data={globalBannerDetails} />
      <DetailsSectionCardsWrapper
        data={serviceDetailsDataRaw?.serviceDetailsSections}
      />
      {testimonialSliderData.data.testimonials.length > 0 && (
        <TestimonialSlider data={testimonialSliderData} />
      )}
      {topClientData.data.clients.length > 0 && (
        <TopClientMarquee data={topClientData} />
      )}

      <ContactCTA data={contactDetailsData} />
      {youMayLikeSliderData.services.length > 0 && (
        <YouMayLIkeSlider data={youMayLikeSliderData} />
      )}
    </>
  );
};

export default ServiceDetailsPage;
