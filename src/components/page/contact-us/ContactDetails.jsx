// import ContactEmailIcon from '@/components/icons/ContactEmailIcon'
// import ContactPhoneIcon from "@/components/icons/ContactPhoneIcon";
// import PaperMapIcon from "@/components/icons/PaperMapIcon";
// import BodyText from "@/components/typography/BodyText";
// import Heading from "@/components/typography/Heading";
// import Link from "next/link";
import { Link } from "react-router-dom";
import ContactEmailIcon from "../../icons/ContactEmailIcon";
import ContactPhoneIcon from "../../icons/ContactPhoneIcon";
import PaperMapIcon from "../../icons/PaperMapIcon";
import BodyText from "../../typography/BodyText";
import Heading from "../../typography/Heading";

const ContactDetails = ({ data }) => {
  return (
    <div className="lg:max-w-[700px] inline-block md:min-w-[350px] w-full">
      <Heading
        tag="h2"
        variant="h2"
        className={`${
          data.background_image ? "text-white" : "text-app-dark"
        }  mb-5 lg:mb-10 tracking-[-2.57px]`}
      >
        {data.section_title}
      </Heading>
      <BodyText
        tag="p"
        variant="body-2"
        className={`${
          data.background_image ? "text-white/80" : "text-app-dark/80"
        }`}
      >
        {data.description}
      </BodyText>
      <div className="mt-9 mb-5 flex gap-5 flex-col lg:flex-row pb-5 lg:border-b border-border justify-between">
        <div className="flex flex-col gap-2.5 lg:gap-5 items-start  max-w-[300px]">
          <div className="flex gap-[6px] items-center">
            <PaperMapIcon />
            <BodyText
              tag="p"
              variant="lead-2"
              className={`${
                data?.background_image ? "text-white" : "text-app-dark"
              }`}
            >
              Our Office
            </BodyText>
          </div>
          <div>
            <BodyText
              tag="p"
              variant="body-2"
              className={`${
                data?.background_image ? "text-white/80" : "text-app-dark/80"
              }`}
            >
              {data.address}
            </BodyText>
          </div>
        </div>
        <div className="flex flex-col gap-2.5 lg:gap-5 items-start">
          <div className="flex gap-[6px] items-center">
            <ContactPhoneIcon />
            <BodyText
              tag="p"
              variant="lead-2"
              className={`${
                data?.background_image ? "text-white" : "text-app-dark"
              }`}
            >
              Phone
            </BodyText>
          </div>
          <div>
            {data?.phone_numbers?.map((item, index) => (
              <BodyText
                key={index}
                tag="p"
                variant="body-2"
                className={`${
                  data?.background_image
                    ? "text-white/80 hover:text-white"
                    : "text-app-dark/80 hover:text-app-dark"
                } transition-all duration-500 text-nowrap`}
              >
                <Link href={`tel:${item.link}`}>{item.label}</Link>
              </BodyText>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col gap-3 lg:gap-5">
        <div className="flex gap-[6px] items-center">
          <ContactEmailIcon />
          <BodyText
            tag="p"
            variant="lead-2"
            className={`${
              data.background_image ? "text-white/80" : "text-app-dark/80"
            }`}
          >
            Email
          </BodyText>
        </div>
        <div>
          <Link href={`mailto:${data.email}`}>
            <BodyText
              tag="span"
              variant="body-2"
              className={`${
                data.background_image
                  ? "text-white/80 hover:text-white transition-all duration-500"
                  : "text-app-dark/80 hover:text-app-dark transition-all duration-500"
              }`}
            >
              {data.email}
            </BodyText>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
