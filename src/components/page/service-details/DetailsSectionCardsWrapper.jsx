import React, { useRef } from "react";
import GuardDetailsCardsSection from "./GuardDetailsCardsSection";
import GuardNavbar from "./GuardNavbar";
import { slugify } from "../../../utils/slugify";
// import { slugify } from "@/utils/slugify"

const DetailsSectionCardsWrapper = ({ data }) => {
  const sectionTitles = data.map((section) => section.section_title);
  const sectionRefs = useRef(
    sectionTitles.reduce((acc, title) => {
      const key = slugify(title);
      acc[key] = React.createRef();
      return acc;
    }, {})
  );
  return (
    <div className="flex bg-white max-w-[1390px] mx-auto">
      <GuardNavbar sections={sectionTitles} sectionRefs={sectionRefs.current} />
      <div className="flex-1 space-y-[30px] lg:space-y-[60px]">
        <GuardDetailsCardsSection
          data={data}
          sectionRefs={sectionRefs.current}
        />
      </div>
    </div>
  );
};

export default DetailsSectionCardsWrapper;
