// import BodyText from "@/components/typography/BodyText";
// import Heading from "@/components/typography/Heading";
// import { slugify } from "@/utils/slugify";
// import Image from "next/image";
import { slugify } from "../../../utils/slugify";
import Heading from "../../typography/Heading";
import BodyText from "../../typography/BodyText";

const GuardDetailsCardsSection = ({ data, sectionRefs }) => {
  const sections = data || [];

  return (
    <div className="space-y-[30px] lg:space-y-[60px] ">
      {sections.map((section, index) => {
        const key = slugify(section.section_title);
        return (
          <div
            ref={sectionRefs[key]}
            key={index}
            className="space-y-5 lg:space-y-8 pb-[30px] lg:pb-10 border-b border-border  last:border-b-0"
          >
            {section.section_title && <SectionHead section={section} />}
            {section?.section_points?.length > 0 && (
              <ListItems points={section.section_points} />
            )}
            {section?.section_cards?.length > 0 && (
              <Cards cards={section.section_cards} />
            )}
            {section?.section_gallery?.length > 0 && (
              <ImageGallery gallery={section.section_gallery} />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default GuardDetailsCardsSection;

// Inner Components
const SectionHead = ({ section }) => {
  return (
    <div className="space-y-5">
      <Heading tag="h4" variant="h4" className="text-app-dark">
        {section.section_title}
      </Heading>
      <BodyText tag="p" variant="body-1" className="text-app-gray">
        {section.section_description}
      </BodyText>
    </div>
  );
};
const Cards = ({ cards }) => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="border border-border rounded-lg lg:rounded-3xl overflow-hidden p-8 space-y-[15px]"
        >
          <BodyText tag="p" variant="lead-1" className="text-app-dark">
            {card.card_title}
          </BodyText>
          <BodyText
            tag="p"
            variant="body-1"
            className="text-app-dark opacity-80"
          >
            {card.card_description}
          </BodyText>
        </div>
      ))}
    </div>
  );
};
const ListItems = ({ points }) => {
  return (
    <ul className="custom-list">
      {points.map((point, index) => (
        <li key={index}>
          <BodyText tag="span" variant="body-1" className="text-app-gray">
            {point?.point_text}
          </BodyText>
        </li>
      ))}
    </ul>
  );
};
const ImageGallery = ({ gallery }) => {
  if (!gallery || gallery.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-2.5">
      {gallery.map((image, index) => {
        const src = image?.gallery_image;

        if (!src || (!src.startsWith("http://") && !src.startsWith("https://")))
          return null;

        return (
          <img
            key={index}
            src={src}
            alt="Overview Card Image"
            className="h-full w-full object-cover rounded-2xl"
            loading="lazy"
          />
        );
      })}
    </div>
  );
};
